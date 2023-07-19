import Image from "next/image"

import User1 from '@app/_assets/images/1.webp'
import User2 from '@app/_assets/images/2.webp'
import User3 from '@app/_assets/images/3.webp'
import User4 from '@app/_assets/images/4.webp'
import User5 from '@app/_assets/images/5.webp'
import TickIcon from '@app/_assets/icons/tick.svg'
import { AppStoreButton, PlayStoreButton  } from "@app/_components"

export const UsersInfo = () => {
    return (
        <div className="mr-auto mt-24 mb-12 md:mb-0 md:mt-16">
            {/* Users Section */}
            <div className="flex items-start justify-between">
                {/* Users Group */}
                <div className="flex items-center justify-between md:justify-normal w-full px-4 md:px-0">
                    {/* Image Holder */}
                    <div className="w-12 h-12 relative bg-black rounded-full border border-black">
                        <Image 
                            src={User5}
                            alt='user 1'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full pr-1 pb-1"
                        />
                    </div>
                    <div className="w-12 h-12 relative bg-black rounded-full border border-black -ml-4">
                        <Image 
                            src={User2}
                            alt='user 2'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full pr-1 pb-1"
                        />
                    </div>
                    <div className="w-12 h-12 relative bg-black rounded-full border border-black -ml-4">
                        <Image 
                            src={User3}
                            alt='user 3'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full pr-1 pb-1"
                        />
                    </div>
                    <div className="w-12 h-12 relative bg-black rounded-full border border-black -ml-4">
                        <Image 
                            src={User4}
                            alt='user 4'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full pr-1 pb-1"
                        />
                    </div>
                    <p className="w-28 text-sm md:text-xs text-gray-500 font-medium mx-0 md:mx-6"><span className="text-black text-xl font-semibold md:text-lg">1,000 +</span><br/>Beta Users</p>
                </div>
                <div className="w-[9rem] h-[7rem] relative rounded-ful hidden md:block">
                    <Image 
                        src={User1}
                        alt='user 1'
                        fill
                        style={{objectFit:"cover"}}
                        className="rounded-full"
                    />
                    <div className="w-6 h-6 absolute rounded-full bg-white -right-2 z-10 drop-shadow top-4">
                        <Image 
                            src={TickIcon}
                            alt='tick'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full p-1"
                        />
                    </div>
                </div>
            </div>
            {/* Action Button */}
            <div className="flex items-center justify-around md:justify-normal gap-4 mt-12 md:mt-8">
                <AppStoreButton />
                <PlayStoreButton/>
            </div>
        </div>
    )
}