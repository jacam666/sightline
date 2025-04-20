'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';


export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = Array.from({ length: 3 }, (_, i) => ({
    src: `/images/gallery${i + 1}.jpg`,
  }));
// const images = [
//     { src: '/images/gallery1.jpg' },
//     { src: '/images/gallery2.jpg' },
//     { src: '/images/gallery3.jpg' },
//   ];
  

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative w-full h-64 md:h-72 lg:h-80 rounded overflow-hidden shadow-lg cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  );
}
