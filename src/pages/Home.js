import { useState } from 'react';
import ProfileData from '../components/Profile';
import Dropdown from '../components/Dropdown';
import TracksData from '../components/Tracks';
import ArtistsData from '../components/Artists';
import 'bootstrap/dist/css/bootstrap.min.css'


export function Home(){
    // State for sorting data
    const [rangeValue, setRangeValue] = useState("long_term");

    // Dropdown values
    const dropDownTime = [
        {
        text: "All time",
        value: "long_term",
        },
        {
        text: "Last 6 months",
        value: "medium_term",
        },
        {
        text: "Last month",
        value: "short_term",
        },
    ];

    function sortValue(value) {
        setRangeValue(value)
    }

    return (
        <>
        <div className='home-page'> 
            <div className='d-flex flex-column min-vh-100'>
                <div>
                    <ProfileData />
                </div>
                <div>
                    <Dropdown sortValue={sortValue} options={dropDownTime} />
                </div>
                <div className='mt-5 mb-5'>
                    <h2 className='main-font top-font mt-5 ms-3 mb-4'>Top Artists</h2>
                    <ArtistsData rangeValue={rangeValue} />
                </div>
                <div className='mt-4 mb-5'>
                    <h2 className='main-font top-font mt-5 ms-3 mb-4'>Top Tracks</h2>
                    <TracksData rangeValue={rangeValue} />           
                </div>
            </div>
        </div>
        </>
    );
};