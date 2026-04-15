import React, { use } from 'react';
import { Link } from 'react-router';

const ContectCard = ({ contectDataLoad }) => {
    const concentData = use(contectDataLoad);


    return (
        <div className='mb-24'>
            <h1 className='font-bold mb-4 text-xl'>Your Friends</h1>
            <div className='grid grid-cols-4 gap-3'>
                {
                    concentData.map(info => <Link to={`/details/${info.id}`} className='bg-base-100 shadow-sm flex flex-col items-center rounded-md p-6 space-y-2 hover:shadow-sm  hover:shadow-[#244D3F]' key={info.id}>
                        <img className=' rounded-full w-20' src={info.picture} alt={info.name} />
                        <h1 className='font-semibold'>{info.name}</h1>
                        <p className='text-neutral/50'>{info.days_since_contact}d ago</p>
                        <div>{info.tags.map((tag, index) => <p key={index} className='badge rounded-full bg-[#CBFADB] text-[#244D3F]'>{tag}</p>)}</div>
                        <p className={`badge rounded-full ${info.status === "almost due" ? "bg-[#EFAD44] text-white" : info.status === "overdue" ? "bg-[#EF4444] text-white" : "bg-[#244D3F] text-white"}`}>{info.status}</p>

                    </Link>)

                }
            </div>
        </div>
    );
};

export default ContectCard;