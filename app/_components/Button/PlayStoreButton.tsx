import Image from "next/image"
import PlayStoreIcon from '@app/_assets/icons/play-store.svg'


export const PlayStoreButton = () => (
    <button className="bg-black shadow-md text-white text-start rounded-md text-sm py-1 px-4 flex items-center gap-2">
        <Image 
            src={PlayStoreIcon}
            alt='play store icon'
            height={32}
            width={32}
            objectFit="contain"
        />
        <p className="leading-3">Get it on<br/><span className="font-semibold text-lg">Google Play</span></p>
    </button>
)