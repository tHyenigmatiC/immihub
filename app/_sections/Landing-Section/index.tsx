import Image from "next/image"

import LandingImage from '@app/_assets/images/flame-space-adventures.gif'
import { UsersInfo } from "./users-info"

export const LandingSection = () => {
    return (
        <div className="flex items-center md:items-start justify-between w-full mt-16 md:mt-36 mb-10 px-4 md:px-0">
            {/* Info Section */}
            <section className="w-full md:w-5/6">
                <p className="text-gray-400 tracking-widest uppercase font-semibold">Welcome to immuhub</p>
                <h2 className="mt-4 font-sans text-6xl md:text-5xl leading-snug md:leading-snug text-gray-900">Your <span className="bg-blue-300 p-2">Immigration</span> Journey <br/> Simplified!</h2>
                <p className="text-base md:text-sm mt-8 leading-6 text-gray-700 px-4 md:px-0">Our Team of Experts & collaborators are working together to make your 
                    immigration journey seem Effortless
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-center md:justify-normal gap-10 mt-8 w-full md:w-auto">
                    <button className="border border-black rounded-md text-base text-gray-900 md:text-sm py-3 px-8">Learn More</button>
                    <button className="bg-blue-600 shadow-md text-white border border-blue-600 rounded-md text-base md:text-sm py-3 px-8">Download Now</button>
                </div>
                <UsersInfo />
            </section>
            {/* Image Section */}
            <section className="w-4/5 items-center justify-end hidden md:flex">
                <Image 
                    src={LandingImage}
                    alt='moving image'
                    unoptimized={true}
                    height={500}
                    objectFit="contain"
                />
            </section>
        </div>
    )
}