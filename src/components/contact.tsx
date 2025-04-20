"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "2dcede50-807f-4105-b537-2481a15ebeec");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            form.reset();
            setSubmitted(true);
            // Reset the submitted state after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }
    }

    return (
        // <div className="flex justify-center outline-2 p-4 md:p-8  md:mx-8 bg-stone-50 rounded-lg shadow-xl">
        // <div className="flex justify-center w-full sm:w-[90%] md:w-[400px] outline-2 p-4 md:p-8 bg-stone-50 rounded-lg shadow-xl">
        <div className="flex justify-center w-full max-w-lg sm:w-[95%] p-4 md:p-8 bg-stone-50 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="w-full md:w-[300px]">
                    <label htmlFor="name" className="block text-gray-700  mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-900 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="w-full md:w-[300px]">
                    <label htmlFor="email" className="block text-gray-700  mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-900 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="w-full md:w-[300px]">
                    <label htmlFor="message" className="block text-gray-700  mb-1">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-900"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`w-full ${submitted
                        ? "bg-green-900 hover:bg-green-800"
                        : "bg-green-900 hover:bg-green-800"
                        } text-white hover:text-gray-900  py-2 px-4 rounded transition-colors`}
                >
                    {submitted ? "Message Sent!" : "Submit Form"}
                </button>
            </form>
        </div>
    );
}

