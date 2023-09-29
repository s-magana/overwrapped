import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArtistsData({ rangeValue }){
    const [token, setToken] = useState('');
    const [artistsData, setArtistsData] = useState([]);

    const getParamsFromHash = (hash) => {
        const hashContent = hash.substr(1); // removes #
        const paramsSplit = hashContent.split('&'); // returns list with keys and values
        let params = {}; // fill with params
        let values = []; // use in foreach loop to store split return values
        paramsSplit.forEach((item) => {
            values = item.split('=');
            params[values[0]] = values[1];
        });
        return params;
    };

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    useEffect( () => { 
        // getting the token from the hash
        if(window.location.hash) {
            const hash = window.location.hash;
            const tokens = getParamsFromHash(hash);
            localStorage.setItem('token', tokens.access_token);
            setToken(tokens.access_token);
            window.history.pushState({}, null, '/home');
        }
        // request to spotify api to fetch 
        async function getArtistsData() {
            await axios({
                method: "GET",
                url: `https://api.spotify.com/v1/me/top/artists?time_range=${rangeValue}&limit=10`,
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }).then(response => {
                setArtistsData(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
          }
          getArtistsData();
    }, [rangeValue]);

    return (
        <>
        {
            artistsData.items &&

            <div className='main-font'>
                {artistsData.items.map((artist, index) => {
                    return (
                        <Fragment key={artist.id}>
                        <div className='item-bg mb-4 d-flex flex-row'>
                            <div className='d-flex flex-row p-2' >
                                <span className='index-font'>{index + 1}.</span>
                                <img src={artist.images[0].url} alt="Artist Art" height="105" width="105" className='square-img circle-artist'/>
                            </div>
                            <div className="d-flex flex-column justify-content-center ps-3">
                                <b className='artist-song-font'>{artist.name}</b>
                                <b className='genre-font pt-1'>{artist.genres[0]}</b>
                            </div>
                        </div>
                        </Fragment>
                    )
                })}
            </div>
        }
        </>
    )
}