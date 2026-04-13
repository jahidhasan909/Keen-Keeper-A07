import React from 'react';
import footerlogo from '../../../assets/logo-xl.png'
import instagramlogo from '../../../assets/instagram.png'
import faceBooklogo from '../../../assets/facebook.png'
import twitterlogo from '../../../assets/twitter.png'

const Footer = () => {
    return (
        <div>
            <footer className="flex  justify-center flex-col bg-[#244D3F]  w-screen h-[413px]">

                <div className='text-center'>
                    <img className='mx-auto w-[412px] h-[61px] mb-4' src={footerlogo} alt="" />
                    <p className='text-[#E9E9E9]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='space-y-2 mt-[24px]'>
                        <h4 className='font-semibold text-[#E9E9E9]'>Social Links</h4>
                        <div className='flex  items-center justify-center gap-2'>
                            <img src={instagramlogo} alt="" />
                            <img src={faceBooklogo} alt="" />
                            <img src={twitterlogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="border-b mt-7 text-gray-500 container mx-auto"></div>
                <div className='flex justify-between container mx-auto mt-7 text-[#E9E9E9] text-[0.80rem]'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms of Service</a></p>
                        <p><a href="">Cookies</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;