import React, { Suspense } from 'react';
import Banner from '../../Components/HeroBanner/Banner';
import ContectCard from '../../Components/ContectCard/ContectCard';


const contectData = async () => {
    const dataLoad = await fetch('/data.json')
    const res = await dataLoad.json();
    return res;

}


const HomePage = () => {
    const contectDataLoad = contectData()
    return (
        <div className=' container mx-auto'>
            <Banner></Banner>
            <Suspense fallback={<h1>Loading...</h1>}>
                <ContectCard contectDataLoad={contectDataLoad}></ContectCard>
            </Suspense>
        </div>
    );
};

export default HomePage;