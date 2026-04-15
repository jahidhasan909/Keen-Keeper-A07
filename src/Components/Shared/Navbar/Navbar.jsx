import React from 'react';
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import { FaChartLine } from 'react-icons/fa';

const Navbar = () => {

    const links = (
        <ul className='menu menu-horizontal px-1 gap-3 text-neutral/70'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-sm' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><RiHome2Line /> Home</span></NavLink>
            <NavLink to={'/timeline'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-sm' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><IoMdTime /> Timeline</span></NavLink>
            <NavLink to={'/stats'} className={({ isActive }) => isActive ? 'bg-[#244D3F] font-semibold text-white p-2 rounded-sm' : 'p-2 text-[0.93rem]'}><span className='flex items-center gap-1'><FaChartLine /> Stats</span></NavLink>
        </ul>
    )



    return (
        <div>
            <div className="navbar fixed z-50 bg-base-100 shadow-sm md:px-14 lg:px-20  justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        <img src={logo} alt="" className='w-14 h-4 md:w-20 md:h-6 lg:w-32 lg:h-7' />
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;