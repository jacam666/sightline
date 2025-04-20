import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Services() {
    const paragraphClass =
        'font-corben text-center text-xs md:text-lg xl:text-xl text-white my-4 leading-relaxed';

    return (
        <main className="bg-green-950 min-h-screen">
            <div className="sticky top-0 z-50 bg-green-900">
                <Navbar />
            </div>
            <section className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-24 py-6 pt-16">
                <div className="flex flex-col items-center justify-center ml-4">
                    <div className="m-8 ">
                        <h1 className="font-corben text-2xl md:text-4xl lg:text-6xl text-white xl:pb-8 text-center">
                            Expert Window Installation Services
                        </h1>
                        <p className="font-corben text-xs md:text-lg lg:text-xl xl:text-3xl text-center text-white my-8">
                            With 20 years’ experience in the trade you can be sure of an outstanding Design/Sale to project managed installation experience.
                        </p>
                    </div>
                    <div className="flex flex-col w-full md:flex-row items-center text-center gap-6 my-8">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/services1-image.avif"
                                alt="Logo"
                                width={350}
                                height={300}
                                className="w-full md:w-[300px] lg:w-[400px] h-auto object-cover shadow-lg"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-corben text-2xl lg:text-5xl text-white mb-4 xl:mb-6 underline">Supply & Fit</h2>
                            <ul className="list-disc list-inside lg:text-2xl text-white">
                                <ol>UPVC / Aluminium Windows</ol>
                                <ol>French Doors</ol>
                                <ol>UPVC Doors</ol>
                                <ol>Patio Doors</ol>
                                <ol>Fascia / gutter</ol>
                                <ol>Cladding</ol>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-t border-white/30 w-full my-6" />
                    <div className="flex flex-col w-full md:flex-row items-center text-center gap-6 my-8">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/services2-image.avif"
                                alt="Logo"
                                width={350}
                                height={300}
                                className="w-full md:w-[300px] lg:w-[400px] h-auto object-cover shadow-lg"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-corben text-2xl lg:text-5xl text-white mb-4 xl:mb-8 underline">Trade Only</h2>
                            <ul className="list-disc list-inside lg:text-2xl text-white">
                                <ol>UPVC & Aluminium Windows</ol>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-t border-white/30 w-full my-6" />
                    <div className="flex flex-col w-full md:flex-row items-center text-center gap-6 my-8">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/services3-image.avif"
                                alt="Logo"
                                width={350}
                                height={300}
                                className="w-full md:w-[300px] lg:w-[400px] h-auto object-cover shadow-lg"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-corben text-2xl lg:text-5xl text-white mb-4 xl:mb-8 underline">Trade Only</h2>
                            <ul className="lg:text-2xl">
                                <ol>Composite Doors</ol>
                                <ol>Lanterns</ol>
                                <ol>Bifold Doors</ol>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-t border-white/30 w-full my-6" />
                    <div className="flex flex-col w-full md:flex-row items-center text-center gap-6 my-8">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/Fensalogo.jpg"
                                alt="Logo"
                                width={350}
                                height={300}
                                className="w-full md:w-[300px] lg:w-[400px] h-auto object-cover shadow-lg"
                                priority
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="font-corben text-2xl lg:text-5xl text-white mb-4 xl:mb-8">Fensa Registered Installer</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-green-900 mt-4 text-center px-6 py-6">
                <p className="font-corben text-md md:text-lg xl:text-4xl xl:px-36 2xl:w-4/5 mx-auto text-center leading-relaxed">
                    Enhance the beauty and functionality of your home with our top-notch window installation services. Let us help you bring your vision to life with custom window solutions tailored to your needs.
                </p>
                <a
                    href="/contactUs"
                    className="inline-block mt-4 px-8 py-2 bg-green-900 xl:text-2xl text-white text-xs hover:bg-green-700 transition duration-300"
                >
                    Schedule a Free Consultation
                </a>
            </section>
            <footer className="text-center w-2/3 mx-auto text-white mt-8 text-sm px-4">
                <p className='py-4'>© 2025 Sightline Windows LTD. All rights reserved.</p>
            </footer>
        </main>
    );
}