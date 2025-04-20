'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function About() {
    const paragraphClass =
        'font-corben text-center text-sm md:text-lg xl:text-xl text-white my-4 leading-relaxed';

    return (
        <>
            <Head>
                <title>About | Sightline Windows</title>
                <meta
                    name="description"
                    content="Learn more about Sightline Windows – your trusted supplier and installer of high-quality UPVC and aluminium windows and doors."
                />
            </Head>

            <main className="bg-green-950 min-h-screen">
                <div className="sticky top-0 z-50 bg-green-900">
                    <Navbar />
                </div>

                <section className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-24 py-6 ">
                    <div className="flex flex-col items-center justify-center ml-4">
                        <h1 className="font-corben text-3xl md:text-4xl xl:text-6xl text-white xl:pb-8 text-center">
                            Welcome To Sightline Windows
                        </h1>

                        <p className={paragraphClass}>
                            Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium
                            windows, French doors, UPVC doors, and patio doors.
                        </p>
                        <p className={paragraphClass}>
                            With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project-managed
                            installation experience. As a trade customer, you can benefit from our specialized supply of UPVC and
                            aluminium windows, ensuring top-notch quality and competitive prices.
                        </p>
                        <p className={paragraphClass}>
                            Our comprehensive range of products is designed to meet the needs of both residential and trade customers.
                            In addition to windows and doors, we also offer composite doors, lanterns, and bifold doors, providing
                            stylish and durable options to enhance the appearance and functionality of any property.
                        </p>
                        <p className={paragraphClass}>
                            Our services are available in Leighton Buzzard, Milton Keynes, Dunstable, as well as the wider areas of
                            Hertfordshire, Bedfordshire, Buckinghamshire, and Northants. At Sightline Windows, we take pride in
                            delivering exceptional customer service and top-quality products to meet all your window and door needs.
                        </p>
                    </div>
                </section>

                <section className="bg-white text-green-900 mt-4 text-center px-6 py-6">
                    <p className="font-corben text-md md:text-lg md:w-2/3 xl:text-4xl xl:px-36 xl:w-full mx-auto text-center leading-relaxed">
                        Contact us today to discuss your requirements and let us help you transform your space.
                    </p>
                    <a
                        href="/contactUs"
                        className="inline-block mt-4 px-8 py-2 bg-green-950 xl:text-2xl text-white text-xs hover:bg-green-700 transition duration-300"
                    >
                        Get A Free Consultation
                    </a>
                </section>
                <footer className="text-center w-2/3 mx-auto text-white mt-8 text-sm px-4">
                <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
            </footer>
            </main>
        </>
    );
}
