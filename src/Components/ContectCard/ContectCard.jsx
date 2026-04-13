import React, { use } from 'react';

const ContectCard = ({ contectDataLoad }) => {
    const concentData = use(contectDataLoad);


    return (
        <div className='mb-20'>
            <h1 className='font-bold mb-4 text-xl'>Your Friends</h1>
            <div className='grid grid-cols-4 gap-3'>
                {
                    concentData.map(info => <div className='bg-base-100 shadow-sm flex flex-col items-center rounded-md p-6 space-y-2' key={info.id}>
                        <img className=' rounded-full w-20' src={info.picture} alt={info.name} />
                        <h1 className='font-semibold'>{info.name}</h1>
                        <p className='text-neutral/50'>{info.days_since_contact}d ago</p>
                        <div>{info.tags.map((tag, index) => <p key={index} className='badge bg-green-100 text-green-800'>{tag}</p>)}</div>
                        <p className={`badge ${info.status === "almost due" ? "bg-orange-400 text-white" : info.status === "overdue" ? "bg-red-500 text-white" : "bg-green-950 text-white"}`}>{info.status}</p>

                    </div>)

                }
            </div>
        </div>
    );
};

export default ContectCard;