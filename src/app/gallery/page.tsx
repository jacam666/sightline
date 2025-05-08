'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FooterSocial from '@/components/FooterSocial';


export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const photos = [
        {
            src: "/images/gallery1.jpg",
            width: 1200,
            height: 800,
            key: "gallery1",
        },
        {
            src: "/images/gallery2.jpg",
            width: 2000,
            height: 900,
            key: "gallery2",
        },
        {
            src: "/images/gallery3.jpg",
            width: 1080,
            height: 720,
            key: "gallery3",
        },
        {
            src: "/images/IMG-20250508-WA0003.jpg",
            width: 1200,
            height: 800,
            key: "gallery4",
        },
        {
            src: "/images/IMG-20250508-WA0004.jpg",
            width: 1200,
            height: 800,
            key: "gallery5",
        },
        {
            src: "/images/IMG-20250508-WA0008.jpg",
            width: 1080,
            height: 720,
            key: "gallery6",
        },
        {
            src: "/images/IMG-20250508-WA0009.jpg",
            width: 1200,
            height: 800,
            key: "gallery7",
        },
        {
            src: "/images/IMG-20250508-WA0010.jpg",
            width: 2000,
            height: 900,
            key: "gallery8",
        },
        {
            src: "/images/IMG-20250508-WA0011.jpg",
            width: 1080,
            height: 720,
            key: "gallery9",
        },
        {
            src: "/images/IMG-20250508-WA0012.jpg",
            width: 1200,
            height: 800,
            key: "gallery10",
        },
        {
            src: "/images/IMG-20250508-WA0013.jpg",
            width: 2000,
            height: 900,
            key: "gallery11",
        },
        {
            src: "/images/IMG-20250508-WA0017.jpg",
            width: 1080,
            height: 720,
            key: "gallery15",
        },
        {
            src: "/images/IMG-20250508-WA0018.jpg",
            width: 1200,
            height: 800,
            key: "gallery16",
        },
        {
            src: "/images/IMG-20250508-WA0019.jpg",
            width: 2000,
            height: 900,
            key: "gallery17",
        },
        {
            src: "/images/IMG-20250508-WA0020.jpg",
            width: 1080,
            height: 720,
            key: "gallery18",
        },
        {
            src: "/images/IMG-20250508-WA0021.jpg",
            width: 1200,
            height: 800,
            key: "gallery19",
        },
        {
            src: "/images/IMG-20250508-WA0022.jpg",
            width: 1200,
            height: 800,
            key: "gallery20",
        },
        {
            src: "/images/IMG-20250508-WA0014.jpg",
            width: 1080,
            height: 720,
            key: "gallery12",
        },
        {
            src: "/images/IMG-20250508-WA0015.jpg",
            width: 1200,
            height: 800,
            key: "gallery13",
        },
        {
            src: "/images/IMG-20250508-WA0016.jpg",
            width: 2000,
            height: 900,
            key: "gallery14",
        },
        {
            src: "/images/IMG-20250508-WA0023.jpg",
            width: 2000,
            height: 900,
            key: "gallery21",
        }
    ];


    return (
        <div className="flex flex-col bg-green-950">
            <div className="sticky top-0 z-50 bg-green-950">
                <Navbar />
            </div>
            <div className="min-h-screen flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
                <h2 className="font-corben text-3xl lg:text-6xl text-center text-white py-4">
                    Gallery
                </h2>
                <h3 className="font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl mb-10">
                    Take a look at some of our recent projects
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 w-full max-w-7xl">
                    {photos.map((image, i) => (
                        <div
                            key={image.key}
                            className="relative w-full h-32 md:h-72 lg:h-80 rounded overflow-hidden shadow-lg cursor-pointer"
                            onClick={() => {
                                setIndex(i);
                                setOpen(true);
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                className="object-fill"
                                priority
                            />
                        </div>
                    ))}
                </div>
                <footer className="text-center w-2/3 mx-auto text-white mt-8 text-sm px-4">
                <FooterSocial />
                    <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
                </footer>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={photos}
                index={index}
                on={{ view: ({ index }) => setIndex(index) }}
            />
        </div>
    );
}