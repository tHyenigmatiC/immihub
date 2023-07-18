import Image from "next/image"


import { Card } from "@app/_components"
import { AppStoreButton } from "@app/_components/Button/AppStoreButton"
import { PlayStoreButton } from "@app/_components/Button/PlayStoreButton"
import { Section } from "@app/_components/Section"
import UserMobile from '@app/_assets/images/user-using-app.webp'


export const AppDemoScreen = () => {
    return (
        <div className="flex items-start justify-center gap-14 my-32 px-4 md:px-0">
            <Section className="w-full px-0 md:pr-16 flex-1">
                <Section.Heading>
                    <Section.Subtitle>
                        <p>quick 2 min signup</p>
                    </Section.Subtitle>
                    <Section.Title className="mt-12">
                        <h2>The new way of Handling Immigration</h2>
                    </Section.Title>
                </Section.Heading>
                <Section.Body>
                    <p className="text-gray-500 leading-6 mt-6 text-base">Case Status | Journey Tabs | Notifications | Groups | Talk to Lawyers | and many other 
                        features to make your Journey Simple.
                    </p>
                    <div className="flex items-center justify-around md:justify-normal gap-4 mt-12 md:mt-24">
                        <AppStoreButton />
                        <PlayStoreButton />
                    </div>
                </Section.Body>
            </Section>
            <div className="hidden md:block bg-black relative rounded w-[32rem] h-[28rem] pr-2">
                <div className={"border rounded font-sans -ml-2 -mt-2 bg-blue-100 border-black py-4 px-6 h-full flex items-center justify-center"}>
                    <Image 
                        src={UserMobile}
                        alt='user mobile'
                        height={500}                 
                        objectFit="cover"
                        className='rounded'
                    />
                </div>
            </div>
        </div>
    )
}