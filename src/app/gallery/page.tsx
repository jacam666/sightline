// 'use client';

// import React, { useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Image from 'next/image';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';


// export default function Gallery() {
//     const [open, setOpen] = useState(false);
//     const [index, setIndex] = useState(0);

//     const images = Array.from({ length: 3 }, (_, i) => ({
//         src: `/images/gallery${i + 1}.jpg`,
//     }));


//     return (
//         <div className="flex flex-col bg-green-950">
//             <div className="sticky top-0 z-50 bg-green-950">
//                 <Navbar />
//             </div>
//             <div className="min-h-screen flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
//                 <h2 className="font-corben text-3xl lg:text-6xl text-center text-white py-4">
//                     Gallery
//                 </h2>
//                 <h3 className="font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl mb-10">
//                     Take a look at some of our recent projects
//                 </h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl">
//                     {images.map((image, i) => (
//                         <div
//                             key={i}
//                             className="relative w-full h-64 md:h-72 lg:h-80 rounded overflow-hidden shadow-lg cursor-pointer"
//                             onClick={() => {
//                                 setIndex(i);
//                                 setOpen(true);
//                             }}
//                         >
//                             <Image
//                                 src={image.src}
//                                 alt={`Gallery image ${i + 1}`}
//                                 fill
//                                 className="object-fill"
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <footer className="text-center w-2/3 mx-auto text-white mt-8 text-sm px-4">
//                     <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
//                 </footer>
//             </div>
//             <Lightbox
//                 open={open}
//                 close={() => setOpen(false)}
//                 slides={images}
//                 index={index}
//                 on={{ view: ({ index }) => setIndex(index) }}
//             />
//         </div>
//     );
// }
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
    RenderImageContext,
    RenderImageProps,
    RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
    {
        src: "/images/gallery1.jpg",
        width: 1200,
        height: 800,
        key: "gallery1-1",
    },
    {
        src: "/images/gallery2.jpg",
        width: 2000,
        height: 900,
        key: "gallery2-1",
    },
    {
        src: "/images/gallery3.jpg",
        width: 1080,
        height: 720,
        key: "gallery3-1",
    },
    {
        src: "/images/mainPage-Image.avif",
        width: 1200,
        height: 800,
        key: "gallery1-2",
    },
    {
        src: "/images/gallery1.jpg",
        width: 1200,
        height: 800,
        key: "gallery2-2",
    },
    {
        src: "/images/gallery2.jpg",
        width: 1600,
        height: 900,
        key: "gallery3-2",
    },
    {
        src: "/images/gallery3.jpg",
        width: 1080,
        height: 720,
        key: "gallery1-3",
    },
    {
        src: "/images/gallery1.jpg",
        width: 1200,
        height: 800,
        key: "gallery2-3",
    },
    {
        src: "/images/gallery2.jpg",
        width: 1600,
        height: 900,
        key: "gallery3-3",
    },
];

function renderNextImage(
    { alt = "", title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext,
) {
    return (

        <div
            key={photo.key}
            style={{
                width: "100%",
                position: "relative",
                aspectRatio: `${width} / ${height}`,
            }}
        >
            <Image
                fill
                src={photo.src}
                alt={alt}
                title={title}
                sizes={sizes}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
            />
        </div>
    );
}

export default function PhotoGallery() {
    return (
        <div className="flex flex-col bg-green-950 min-h-screen">
            <div className="sticky top-0 z-50 bg-green-950">
                <Navbar />
            </div>
            <div className=" flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
                <h2 className="font-corben text-3xl lg:text-6xl text-center text-white py-4">
                    Gallery
                </h2>
                <h3 className="font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl mb-10">
                    Take a look at some of our recent projects
                </h3>
            </div>
            <div className="px-4">
                <RowsPhotoAlbum
                    photos={photos}
                    render={{ image: renderNextImage }}
                    defaultContainerWidth={1200}
                    sizes={{
                        size: "1168px",
                        sizes: [
                            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
                        ],
                    }}
                />
            </div>

            <footer className="text-center w-2/3 mx-auto text-white mt-8 text-sm px-4">
                <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
            </footer>
        </div>
    );
}
