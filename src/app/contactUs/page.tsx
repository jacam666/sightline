import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Navbar from '@/components/Navbar';
import Contact from '@/components/contact';
import FooterSocial from '@/components/FooterSocial';



export default function ContactUs() {
    return (
        <div className="flex flex-col bg-green-950 ">
            <div className="sticky top-0 z-50 bg-green-950">
                <Navbar />
            </div>
            <div className="min-h-screen flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
                <h2 className='font-corben text-3xl lg:text-6xl text-center text-white py-4'>
                    Let&apos;s Discuss Your Next Project
                </h2>
                <h3 className='font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl'>
                    Fill out the form, call us, or request a free in-home consultation or brochure.
                </h3>

                <div className="flex flex-col lg:flex-row items-center justify-around w-full my-10 gap-8">
                    {/* <div className="backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6"> */}
                    <div className="w-full max-w-xl xl:max-w-md backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">
                        <Contact />
                    </div>
                    {/* <div className='flex flex-col backdrop-blur-lg bg-white/10 rounded-xl shadow-2xl p-6 animate-float'>
                     */}
                    <div className="w-full max-w-xl xl:max-w-md backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">

                        <h3 className="font-corben text-2xl lg:text-3xl text-center text-white  mb-4">Areas Covered:</h3>
                        <ul className="list-inside space-y-2 text-center text-lg lg:text-2xl text-white">
                            {['Leighton Buzzard', 'Milton Keynes', 'Dunstable', 'Hertfordshire', 'Bedfordshire', 'Buckinghamshire', 'Northants'].map(area => (
                                <li key={area}>
                                    <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                                    {area}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 space-y-4 text-lg lg:text-2xl text-center text-white">
                            <p className='flex items-center justify-center'>
                                <EnvelopeIcon className="w-6 h-6 mr-2" />
                                sightlinewindowsltd@gmail.com
                            </p>
                            <p className='flex items-center justify-center'>
                                <PhoneIcon className="w-6 h-6 mr-2" />
                                07538800369
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-center w-2/3 mx-auto text-white text-sm px-4">
            <FooterSocial />
                <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
            </footer>
        </div>
    );
}