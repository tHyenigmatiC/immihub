import Image from "next/image"

import LandingImage from '@app/_assets/images/flame-space-adventures.gif'
import { AppStoreButton, PlayStoreButton  } from "@app/_components"

export const LandingSection = () => {
    return (
        <div className="flex items-center md:items-start justify-between w-full mt-16 md:mt-36 mb-10">
            {/* Info Section */}
            <section className="w-full md:w-5/6">
                <p className="text-gray-400 tracking-widest uppercase font-semibold">Welcome to immuhub</p>
                <h2 className="mt-4 font-sans text-6xl md:text-5xl leading-snug md:leading-snug text-gray-900">Your <span className="bg-blue-200 p-2">Immigration</span> Journey <br/> Simplified!</h2>
                <p className="text-base md:text-sm mt-8 leading-6 text-gray-700 pr-4 md:pr-0">Our Team of Experts & collaborators are working together to make your 
                    immigration journey seem Effortless
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-start md:justify-normal gap-10 mt-8 w-full md:w-auto">
                    <AppStoreButton />
                    <PlayStoreButton/>
                </div>
            </section>
            {/* Image Section */}
            <section className="w-4/5 items-center justify-end hidden md:flex">
                <Image 
                    src={LandingImage}
                    alt='moving image'
                    height={550}
                    style={{objectFit:"cover"}}
                />
            </section>
        </div>
    )
}