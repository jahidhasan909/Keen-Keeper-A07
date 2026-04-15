import React, { useContext } from 'react';
import { FaArchive } from 'react-icons/fa';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeFill } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';
import { TimeLineContect } from '../../Context/ContectContect';
import { toast } from 'react-toastify';



const DetailPage = () => {

    const params = useParams();
    const contectload = useLoaderData();

    const excetedContect = contectload.find(contect => contect.id == params.id)


    const { timeLineContect, setTimeLineContect } = useContext(TimeLineContect)


    const handleAddedCallTimeline = () => {
        setTimeLineContect([
            {
                ...excetedContect,
                contectstatus: 'callcontect',
                id: Math.random()

            },
            ...timeLineContect])
        toast.success(`Call With ${excetedContect.name}`)

    }
    const handleAddedTextTimeline = () => {
        setTimeLineContect([
            { ...excetedContect, 
                contectstatus: 'textcontect', 
                id: Math.random()},
                 ...timeLineContect])
        toast.success(`Text With ${excetedContect.name}`)

    }
    const handleAddedVideoTimeline = () => {
        setTimeLineContect([{ ...excetedContect,
             contectstatus: 'videocontect', 
             id: Math.random() },
              ...timeLineContect])
        toast.success(`Video With ${excetedContect.name}`)
    }



    return (
        <div className='mt-40 mb-24 container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className='space-y-2'>
                    <div className='bg-base-100 shadow-sm flex flex-col items-center rounded-md lg:p-8 space-y-2 p-3'>
                        <img className=' rounded-full w-20' src={excetedContect.picture} alt={excetedContect.name} />
                        <h1 className='font-semibold'>{excetedContect.name}</h1>
                        <p className='text-neutral/50'>{excetedContect.days_since_contact}d ago</p>
                        <div>{excetedContect.tags.map((tag, index) => <p key={index} className='badge bg-green-100 text-green-800'>{tag}</p>)}</div>
                        <p className={`badge ${excetedContect.status === "almost due" ? "bg-orange-400 text-white" : excetedContect.status === "overdue" ? "bg-red-500 text-white" : "bg-green-950 text-white"}`}>{excetedContect.status}</p>
                        <p className='text-neutral/50 text-[0.60rem] md:text-[0.76rem] lg:text-[0.80rem]'>"{excetedContect.bio}"</p>
                        <p className='text-neutral/50 text-[0.90rem]'>Preferred:{excetedContect.email}</p>



                    </div>
                    <div className='space-y-2 flex flex-col'>
                        <button className='btn bg-base-100'>
                            <p className=' flex items-center  justify-center p-2 gap-1 '><RiNotificationSnoozeFill /> Snooze 2 weeks</p>
                        </button>
                        <button className='btn bg-base-100'>

                            <p className=' flex items-center   justify-center p-2 gap-1'><FaArchive /> Archive</p>
                        </button>
                        <button className='btn bg-base-100'>
                            <p className=' flex items-center  justify-center p-2 gap-1 text-red-400' ><MdDelete /> Delete</p>
                        </button>
                    </div>
                </div>



                <div className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        <div className=' h-32 shadow-sm text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                            <h4 className='font-semibold text-xl'>{excetedContect.days_since_contact}</h4>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className=' h-32 shadow-sm text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                            <h4 className='font-semibold text-xl'>{excetedContect.goal}</h4>
                            <p className='text-[#64748B]'>Goal(Days)</p>
                        </div>
                        <div className=' h-32 shadow-sm text-center flex flex-col items-center justify-center rounded-md bg-base-100'>
                            <h4 className='font-semibold text-xl'>{excetedContect.next_due_date}</h4>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='flex bg-base-100 shadow-sm rounded-sm h-36 items-center justify-between p-7'>
                        <div className='space-y-2'>
                            <h4 className='text-xl'>Relationship Goal</h4>
                            <p ><span className='text-neutral/50'>Connect every</span> <span className='font-semibold'>{excetedContect.relationship_goal}Days</span></p>
                        </div>
                        <button className='btn'>Edit</button>
                    </div>

                    <div className='bg-base-100 shadow-sm rounded-sm md:p-5  lg:p-6 space-y-2 '>
                        <h3 className='text-center md:text-start lg:text-start lg:text-xl'>Quick Check-In</h3>
                        <div className='flex flex-col justify-center items-center  lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                            <button onClick={handleAddedCallTimeline} className='btn w-[190px] h-20'><span className='flex flex-col items-center text-[1.10rem]'><IoCallOutline /> Call</span></button>
                            <button onClick={handleAddedTextTimeline} className='btn w-[190px] h-20'><span className='flex flex-col items-center text-[1.10rem]'><MdOutlineTextsms /> Text</span></button>
                            <button onClick={handleAddedVideoTimeline} className='btn w-[190px] h-20'><span className='flex flex-col items-center text-[1.10rem]'><IoVideocamOutline />
                                Video</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;