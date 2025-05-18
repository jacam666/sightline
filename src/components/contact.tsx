"use client";

import React, { useState } from 'react';

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
        <div className="flex justify-center w-full max-w-lg sm:w-[95%] p-4 md:p-8 bg-stone-50 rounded-lg shadow-xl">
            <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded shadow-md w-full max-w-md"
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
                        className={`flex justify-center items-center gap-2 bg-green-900 text-white px-4 py-2 rounded w-full transition-opacity ${submitted || loading ? "opacity-50 cursor-not-allowed" : ""
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
        </div>
    );
}

