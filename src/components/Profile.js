import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileData(){
    const [token, setToken] = useState('');
    const [profileData, setProfileData] = useState({});

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
        async function getProfileData() {
            await axios({
                method: "GET",
                url: "https://api.spotify.com/v1/me",
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }).then(response => {
                setProfileData(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
          }
          getProfileData();
    }, []);

    return (
        <>
        {
            profileData.display_name && profileData.images &&

            <div className='profile-section'>
                <div className='user-info'>
                    <div>
                        <img className='user-pic' src={profileData.images[1].url} alt="profile" />
                    </div>
                    <div className='mt-1'>
                        <h1 className='main-font user-name'>{profileData.display_name}</h1>
                    </div>
                </div>
            </div>
        }
        </>
    )
}