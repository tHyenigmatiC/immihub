import Image from "next/image"

import LandingImag from '../../_assets/images/flame-space-adventures.gif'

export const LandingSection = () => {
    return (
        <div className="flex items-center justify-between w-full">
            {/* Info Section */}
            <div className="w-3/5">
                <p className="text-gray-400 tracking-widest uppercase font-semibold">Welcome to immuhub</p>
                <p className="mt-4 font-sans text-6xl leading-snug">Your <span className="bg-blue-300 p-2">Immigration</span> Journey Simplified!</p>
                <p className="text-sm mt-8 leading-7 w-4/5 text-gray-800">Our Team of Experts & collaborators are working together to make your 
                    immigration journey seem Effortless
                </p>

                {/* Action Button */}
                <div className="flex items-center gap-4 mt-8">
                    <button className="border border-black rounded-md text-sm py-3 px-8">Learn More</button>
                    <button className="bg-blue-600 shadow text-white border border-blue-600 rounded-md text-sm py-3 px-8">Download Now</button>
                </div>
            </div>
            {/* Image Section */}
            <div className="w-4/5 flex items-center justify-end">
                <Image 
                    src={LandingImag}
                    alt='moving image'
                    unoptimized={true}
                    height={500}
                    objectFit="contain"
                />
            </div>
        </div>
    )
}