import Image from 'next/image'


import UserMobile from '@app/_assets/images/user-using-app.webp'
import BellIcon from '@app/_assets/icons/bell.svg'
import FlagIcon from '@app/_assets/icons/flag.svg'
import GroupIcon from '@app/_assets/icons/group.svg'

import { Card, Section } from '@app/_components'
import { TheoryContainer } from './TheoryContainer'

export const Theory = () => {
    return (
        <TheoryContainer>
            <div className="hidden md:block col-span-2 row-span-3 bg-black rounded w-[24rem] lg:w-[26rem] pb-1 pr-2">
                <div className={"border rounded relative font-sans -ml-2 -mt-1 bg-black border-black py-4 px-6 h-full"}>
                    <Image 
                        src={UserMobile}
                        alt='user mobile'
                        fill
                        style={{objectFit:"cover"}}
                        className='rounded'
                    />
                </div>
            </div>
            <div className="col-span-4 md:col-span-2 row-span-1">
                <Section className='my-0 px-0'>
                    <Section.Heading>
                        <Section.Subtitle>
                            <p>why immihub?</p>
                        </Section.Subtitle>
                        <Section.Title>
                            Make your Immigration<br/> Journey Easy by <br/>Ensuring Compliance
                        </Section.Title>
                    </Section.Heading>
                    <Section.Body className='text-gray-500'>
                        <p className='text-sm -mt-4 mb-2'>With tools liek Case Status, Jtabs, Notifications and Groups, Your Journey is simplified</p>
                    </Section.Body>
                </Section>
            </div>
            <div className="col-span-2 md:col-span-1 row-span-1 px-1">
                <Card bgcolor='bg-blue-200'>
                    <Card.Image bgcolor='bg-black'>
                        <Image 
                            src={GroupIcon}
                            alt='tick'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full p-1"
                        />
                    </Card.Image>
                    <Card.Content color='text-black'>
                        <h1 className='font-bold text-base md:text-sm'>Groups</h1>
                        <p className='leading-[1.4]'>Connect with your community - Help others or Get help yourself</p>
                    </Card.Content>
                </Card>
            </div>
            <div className="col-span-2 md:col-span-1 row-span-1 px-1">
                <Card bgcolor='bg-black'>
                    <Card.Image bgcolor='bg-white'>
                        <Image 
                            src={FlagIcon}
                            alt='tick'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full p-1"
                        />
                    </Card.Image>
                    <Card.Content color='text-white'>
                        <h1 className='font-bold text-base md:text-sm'>Journey Tab</h1>
                        <p className='leading-[1.4]'>
                            You will be able to handle any issue/concerns with ease.
                        </p>
                    </Card.Content>
                </Card>
            </div>
            <div className="col-span-4 md:col-span-2 row-span-1">
                <Card bgcolor='bg-lime-300'>
                    <Card.Image bgcolor='bg-black'>
                        <Image 
                            src={BellIcon}
                            alt='tick'
                            fill
                            style={{objectFit:"cover"}}
                            className="rounded-full p-1"
                        />
                    </Card.Image>
                    <Card.Content color='text-black'>
                        <h1 className='font-bold text-base md:text-sm'>Notifications</h1>
                        <p className='leading-[1.4]'>
                            Out App notifies you on important things like Passport Renewal Alerts,
                            OPT & Stem OPT Reporting Alerts & many other important Alerts ensuring
                            visa compliance.
                        </p>
                    </Card.Content>
                </Card>
            </div>
        </TheoryContainer>
    )
}