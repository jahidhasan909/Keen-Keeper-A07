import React, { use } from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = ({ contectDataLoad }) => {
    const contectdata = use(contectDataLoad);





    return (
        <div>
            <div className='text-center space-y-4 mt-40'>
                <h1 className='font-bold text-5xl'>Friends to keep close in your life</h1>
                <p className='text-[16px] text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white w-36 h-11'><FaPlus /> Add a Friend</button>
            </div>

            <div className='grid grid-cols-4 justify-center gap-6 my-10'>
                <div className=' h-32 shadow-md text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                    <h4 className='font-semibold text-xl'>{contectdata.length}</h4>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className=' h-32 shadow-md text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                    <h4 className='font-semibold text-xl'>{contectdata.filter(item => item.priority === 'on-track').length}</h4>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className=' h-32 shadow-md text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                    <h4 className='font-semibold text-xl'>{contectdata.filter(item => item.priority === 'need attention').length}</h4>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className=' h-32 shadow-md text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                    <h4 className='font-semibold text-xl'>{contectdata.filter(item => item.priority === 'interactions this month').length}</h4>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
            <div className="border-b mt-7 text-[#E9E9E9] container mx-auto my-10"></div>
        </div>
    );
};

export default Banner;