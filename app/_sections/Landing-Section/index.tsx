import Image from "next/image"

import LandingImage from '@app/_assets/images/landing.png'
import { AppStoreButton, PlayStoreButton  } from "@app/_components"

export const LandingSection = () => {
    return (
        <div className="grid grid-cols-8 grid-rows-1 gap-4 w-full mb-10 mt-16 md:mt-24  ">
            {/* Info Section */}
            <section className="col-span-8 md:col-span-4 lg:col-span-3">
                <p className="text-gray-400 tracking-widest uppercase font-semibold">Welcome to immuhub</p>
                <h2 className="mt-4 font-sans text-6xl md:text-5xl leading-snug md:leading-snug text-gray-900">Your <span className="bg-blue-200 p-2">Immigration</span> Journey <br/> Simplified!</h2>
                <p className="text-base md:text-sm mt-8 leading-6 text-gray-700 pr-4 lg:pr-0">Our Team of Experts & collaborators are working together to make your 
                    immigration journey seem Effortless
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-start md:justify-normal gap-10 mt-8 w-full md:w-auto">
                    <AppStoreButton />
                    <PlayStoreButton/>
                </div>  
            </section>
            {/* Image Section */}
            <section className="items-start justify-end hidden relative md:flex col-span-4 lg:col-span-5">
                <Image 
                    src={LandingImage}
                    alt='moving image'
                    fill
                    style={{objectFit:"contain"}}
                />
            </section>
        </div>
    )
}