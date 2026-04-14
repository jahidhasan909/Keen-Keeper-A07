import React, { Suspense } from 'react';
import Banner from '../../Components/HeroBanner/Banner';
import ContectCard from '../../Components/ContectCard/ContectCard';
import { RingLoader } from 'react-spinners';


const contectData = async () => {
    const dataLoad = await fetch('/data.json')
    const res = await dataLoad.json();
    return res;

}


const HomePage = () => {
    const contectDataLoad = contectData()
    return (
        <div className=' container mx-auto'>
            <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><RingLoader color='#244D3F' /></div>}>
                <Banner contectDataLoad={contectDataLoad}></Banner>
            </Suspense>
            <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><RingLoader color='#244D3F' /></div>}>
                <ContectCard contectDataLoad={contectDataLoad}></ContectCard>
            </Suspense>
        </div>
    );
};

export default HomePage;