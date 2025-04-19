
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className=''>
            <div className="relative">
                <Image
                    src="/images/mainPage-Image.avif"
                    height={300}
                    width={1920}
                    alt="main page image"
                    priority
                />
                <div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-8"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    <div>
                        <div className="text-white p-2 max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                            <h1 className="font-corben text-3xl mx-4 md:text-5xl lg:text-6xl xl:text-7xl ">Quality Window & Door Installation Services at Trade Prices</h1>
                        </div>
                        <div className='flex py-4 mx-4 md:px-2 mt-16'>
                            <a
                                data-mdb-ripple-init
                                className=" flex justify-center items-center btn btn-outline-light btn-lg p-1 text-xs sm:text-lg md:text-xl lg:text-xl text-white bg-green-900  hover:bg-green-800 hover:text-white transition-colors duration-300 ease-in-out px-12 py-2 "
                                href="/about"
                                role="button"

                            >
                                Get A Free Quote
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
