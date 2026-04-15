
import { FaAngleDown } from 'react-icons/fa';
import { useContext, useState } from 'react';
import textIcon from '../../assets/text.png'
import callIcon from '../../assets/call.png'
import videoIcon from '../../assets/video.png'
import { format } from 'date-fns';
import { TimeLineContect } from '../../Context/ContectContect';


const TimeLine = () => {



    const dateFormat = () => {
        return format(new Date(), 'MMMM d,yy')
    }

    const { timeLineContect } = useContext(TimeLineContect)
    const [search, setSearch] = useState('')


    const filterSearch = timeLineContect.filter(contect => contect.name.toLowerCase().includes(search.toLowerCase()))


    const [sortType, setSortType] = useState('')
    const fillterbySort = [...filterSearch]

    if (sortType) {
        fillterbySort.sort((a, b) => (b.status === sortType) - (a.status === sortType));
    }


    return (
        <div className='container mx-auto mt-40 mb-20'>
            <h1 className='text-3xl font-semibold'>Timeline</h1>
            <div className='flex items-center justify-between my-6'>
                <div className="dropdown  md:dropdown-right">
                    <div tabIndex={0} role="button" className="btn m-1 text-neutral/50">Filter by <FaAngleDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortType('text')}><a>Filter by text</a></li>
                        <li onClick={() => setSortType('call')}><a>Filter by call</a></li>
                        <li onClick={() => setSortType('video')}><a>Filter by video</a></li>
                    </ul>
                </div>

                <div>
                    <input type="search"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)}
                        placeholder="Search"
                        className="input w-32" />
                </div>

            </div>


            {
                fillterbySort.length === 0 ?
                    <div className='text-center text-neutral/50 bg-base-100 shadow-sm rounded-sm py-40'>
                        <p>No interaction data yet!</p>
                    </div> :

                    fillterbySort.map(contect =>
                        <div className='' key={contect.id}>

                            {contect.status === 'call' && (<div className='flex gap-2 bg-base-100 shadow-sm py-4 px-4 items-center rounded-sm mb-2' key={contect.id}>
                                <img className='w-10 h-10' src={callIcon} alt="" />
                                <div className='space-1-2'>
                                    <h2><span className='font-semibold text-[1.10rem]'>Call</span> <span className='text-neutral/50'>With {contect.name}</span></h2>
                                    <p className='text-neutral/50'>{dateFormat()}</p>
                                </div>
                            </div>)}



                            {contect.status === 'text' && (<div className='flex gap-2 bg-base-100 shadow-sm py-4 px-4 items-center rounded-sm mb-2' key={contect.id}>
                                <img className='w-10 h-10' src={textIcon} alt="" />
                                <div className='space-1-2'>
                                    <h2><span className='font-semibold text-[1.10rem]'>Text</span> <span className='text-neutral/50'>With {contect.name}</span></h2>
                                    <p className='text-neutral/50'>{dateFormat()}</p>
                                </div>
                            </div>)}


                            {contect.status === 'video' && (<div className='flex gap-2 bg-base-100 shadow-sm py-4 px-4 items-center rounded-sm mb-2' key={contect.id}>
                                <img className='w-10 h-10' src={videoIcon} alt="" />
                                <div className='space-1-2'>
                                    <h2><span className='font-semibold text-[1.10rem]'>Video</span> <span className='text-neutral/50'>With {contect.name}</span></h2>
                                    <p className='text-neutral/50'>{dateFormat()}</p>
                                </div>
                            </div>)}
                        </div>)
            }
        </div>
    );
};

export default TimeLine;