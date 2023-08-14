import React, { useEffect, useState } from 'react';

const Home = () => {
    const [token, setToken] = useState('');

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
    }, []);

    return (
        <div>
            {
                token && 
                <div>
                    <h1>homepage</h1>
                    <p>here is your token: {token}</p>
                </div>
            }
        </div>
    );
};

export default Home;