import { CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URL_AFTER_LOGIN, SCOPES_URL_PARAM } from '../auth/index.js'

export function Login(){
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    return (
        <div className='login-bg'>
            <div className='login-content'>
                <h1 className='title-font main-font'>Overwrapped</h1>
                <button className='login-btn main-font' onClick={() => handleLogin()}>Sign in with Spotify</button>
                <p className='info-font main-font'>*see your spotify wrapped whenever you want*</p>
            </div>
        </div>
    );
};