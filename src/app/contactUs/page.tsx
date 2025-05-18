// import React from 'react';
// import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
// import Navbar from '@/components/Navbar';
// import Contact from '@/components/contact';
// import FooterSocial from '@/components/FooterSocial';



// export default function ContactUs() {
//     return (
//         <div className="flex flex-col bg-green-950 ">
//             <div className="sticky top-0 z-50 bg-green-950">
//                 <Navbar />
//             </div>
//             <div className="min-h-screen flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
//                 <h2 className='font-corben text-3xl lg:text-6xl text-center text-white py-4'>
//                     Let&apos;s Discuss Your Next Project
//                 </h2>
//                 <h3 className='font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl'>
//                     Fill out the form, call us, or request a free in-home consultation or brochure.
//                 </h3>

//                 <div className="flex flex-col lg:flex-row items-center justify-around w-full my-10 gap-8">
//                     {/* <div className="backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6"> */}
//                     <div className="w-full max-w-xl xl:max-w-md backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">
//                         <Contact />
//                     </div>
//                     {/* <div className='flex flex-col backdrop-blur-lg bg-white/10 rounded-xl shadow-2xl p-6 animate-float'>
//                      */}
//                     <div className="w-full max-w-xl xl:max-w-md backdrop-blur-lg bg-white/20 rounded-xl shadow-2xl p-6">

//                         <h3 className="font-corben text-2xl lg:text-3xl text-center text-white  mb-4">Areas Covered:</h3>
//                         <ul className="list-inside space-y-2 text-center text-lg lg:text-2xl text-white">
//                             {['Leighton Buzzard', 'Milton Keynes', 'Dunstable', 'Hertfordshire', 'Bedfordshire', 'Buckinghamshire', 'Northants'].map(area => (
//                                 <li key={area}>
//                                     <MapPinIcon className="inline-block h-5 w-5 mr-2" />
//                                     {area}
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className="mt-6 space-y-4 text-lg lg:text-2xl text-center text-white">
//                             <p className='flex items-center justify-center'>
//                                 <EnvelopeIcon className="w-6 h-6 mr-2" />
//                                 sightlinewindowsltd@gmail.com
//                             </p>
//                             <p className='flex items-center justify-center'>
//                                 <PhoneIcon className="w-6 h-6 mr-2" />
//                                 07538800369
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="text-center w-2/3 mx-auto text-white text-sm px-4">
//             <FooterSocial />
//                 <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }
"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import FooterSocial from "@/components/FooterSocial";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true); // start spinner

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "f1be0cbb-fbe0-4f52-9f10-45bdc7006a42");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const result = await response.json();
        setLoading(false); // stop spinner

        if (result.success) {
            form.reset();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        }
    }


    return (
        <div>
            <div className="sticky top-0 z-50 bg-green-950">
                <Navbar />
            </div>
            <div className=" flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
                <h2 className='font-corben text-3xl lg:text-6xl text-center text-white py-4'>
                    Let&apos;s Discuss Your Next Project
                </h2>
                <h3 className='font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl'>
                    Fill out the form, call us, or request a free in-home consultation or brochure.
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen  bg-green-950 px-4 py-12">

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow-md w-full max-w-md "
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={submitted || loading}
                        className={`flex justify-center items-center gap-2 bg-green-800 text-white px-4 py-2 rounded w-full transition-opacity ${submitted || loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading && (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        )}
                        {submitted ? "Submitted!" : loading ? "Sending..." : "Submit"}
                    </button>


                    {submitted && (
                        <p className="text-green-600 font-medium text-center mt-4">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                </form>

                {/* Areas + Contact Info Section */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 w-full max-w-4xl">
                    {/* Areas Covered */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-lg p-6 shadow">
                        <h3 className="text-2xl font-semibold mb-4 text-white text-center">Areas Covered</h3>
                        <ul className="space-y-2 text-white text-center">
                            {[
                                "Leighton Buzzard",
                                "Milton Keynes",
                                "Dunstable",
                                "Hertfordshire",
                                "Bedfordshire",
                                "Buckinghamshire",
                                "Northants",
                            ].map((area) => (
                                <li key={area}>
                                    <MapPinIcon className="inline-block h-5 w-5 mr-2 text-green-500" />
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-lg p-6 shadow">
                        <h3 className="text-2xl font-semibold mb-4 text-white text-center">Contact Details</h3>
                        <p className="mb-4 flex items-center justify-center text-white">
                            <EnvelopeIcon className="w-6 h-6 mr-2 text-green-500" />
                            sightlinewindowsltd@gmail.com
                        </p>
                        <p className="flex items-center justify-center text-white">
                            <PhoneIcon className="w-6 h-6 mr-2 text-green-500" />
                            07539 800369
                        </p>
                    </div>
                </div>
            </div>
            <FooterSocial />
        </div>
    );
}
