import Navbar from "@/components/Navbar";

export default function Gallery() {
    return (
        <div className="flex flex-col bg-green-950 ">
            <div className="sticky top-0 z-50 bg-green-950">
                <Navbar />
            </div>
            <div className="min-h-screen flex w-full flex-col bg-green-950 lg:p-16 px-4 items-center">
                <h2 className='font-corben text-3xl lg:text-6xl text-center text-white py-4'>
                    Gallery
                </h2>
                <h3 className='font-corben text-xl md:text-3xl lg:text-4xl text-center text-white max-w-4xl'>
                    Take a look at some of our recent projects
                </h3>
            </div>
        </div>
    );
}