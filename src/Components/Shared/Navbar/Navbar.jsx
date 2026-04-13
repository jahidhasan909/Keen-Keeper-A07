import React from 'react';
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import { FaChartLine } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20">
                <div className="flex-1">
                    <img src={logo} alt="" className='w-32 h-7' />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-3 text-neutral/70">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-md' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><RiHome2Line /> Home</span></NavLink>
                        <NavLink to={'/timeline'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-md' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><IoMdTime /> Timeline</span></NavLink>
                        <NavLink to={'/stats'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-md' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><FaChartLine /> Stats</span></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;