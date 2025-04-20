import Navbar from "@/components/Navbar";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-green-950 min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
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
            <div className='flex py-4 mx-4 md:px-2 xl:mt-16'>
              <a
                data-mdb-ripple-init
                className=" flex justify-center items-center btn btn-outline-light btn-lg p-1 text-xs sm:text-lg md:text-xl lg:text-xl text-white bg-green-950  hover:bg-green-800 hover:text-white transition-colors duration-300 ease-in-out px-12 py-2 "
                href="/about"
                role="button"
              >
                Get A Free Quote
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-24 items-center justify-center gap-4 px-4 py-6 pt-16">
        <Image
          src="/images/services2-image.avif"
          alt="Logo"
          width={350}
          height={300}
          className="h-auto  md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px] object-contain"
          priority
        />
        <div className="flex flex-col items-start justify-center ml-4">
          <h1 className="font-corben text-2xl md:text-xl xl:text-4xl text-white xl:pb-4">
            Your Trusted Windows & Doors Installation Partner
          </h1>
          <p className=" font-corben text-xs md:text-md xl:text-xl text-white my-4 xl:my-2">
            Welcome to Sightline Windows, your trusted supplier and installer of high-quality UPVC and aluminium windows, French doors, UPVC doors, and patio doors. With 20 years of experience in the trade, we guarantee an outstanding Design/Sale to project managed installation experience.
          </p>
          <div className="mt-4 flex">
            <a
              href="/about"
              className="px-12 py-2 bg-white text-black text-xs sm:text-lg md:text-lg hover:bg-green-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
      <footer className="text-center text-white mt-8 w-2/3 mx-auto text-sm px-4">
        <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
      </footer>
    </div>
  );
}
