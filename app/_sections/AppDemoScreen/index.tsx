import Image from "next/image"


import { Section, AppStoreButton, PlayStoreButton } from "@app/_components"
import AppScreenImage from '@app/_assets/images/app-screen.png'
import { AppDemoScreenContainer } from "./AppDemoScreenContainer"


export const AppDemoScreen = () => {
    return (
        <AppDemoScreenContainer>
            <Section className="w-full px-0 md:pr-16 flex-1">
                <Section.Heading>
                    <Section.Subtitle>
                        <p>quick 2 min signup</p>
                    </Section.Subtitle>
                    <Section.Title className="mt-12">
                        The new way of Handling Immigration
                    </Section.Title>
                </Section.Heading>
                <Section.Body>
                    <p className="text-gray-500 leading-6 mt-6 text-base">Case Status | Journey Tabs | Notifications | Groups | Talk to Lawyers | and many other 
                        features to make your Journey Simple.
                    </p>
                    <div className="flex items-center justify-start md:justify-normal gap-10 mt-12 md:mt-24">
                        <AppStoreButton />
                        <PlayStoreButton />
                    </div>
                </Section.Body>
            </Section>
            <div className="hidden md:block bg-black rounded w-[24rem] lg:w-[32rem] h-[28rem] pr-2">
                <div className={"border rounded font-sans -ml-2 -mt-2 bg-blue-100 border-black py-4 px-6 h-full flex items-center justify-center"}>
                    <div className="w-[16rem] lg:w-[20rem] h-[32rem] relative">
                        <Image 
                            src={AppScreenImage}
                            alt='user mobile'
                            fill
                            style={{objectFit:"contain"}}
                            className='rounded'
                        />
                    </div>
                </div>
            </div>
        </AppDemoScreenContainer>
    )
}