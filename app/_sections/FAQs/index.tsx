'use client'

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

import UserMobile from '@app/_assets/images/user-using-app.webp'
import ChevronUpIcon from '@app/_assets/icons/chevronup.svg'
import { Card, Section } from '@app/_components'


export const FAQS = () => {
    return (
        <div className="grid grid-cols-5 grid-flow-row gap-8 my-20 w-full">
            <div className="hidden md:block col-span-2 bg-black relative rounded h-[32rem] pl-2 pt-2">
                <div className={"border rounded font-sans -mr-2 mt-2 bg-black border-black py-4 px-6 h-full"}>
                    <Image 
                        src={UserMobile}
                        alt='user mobile'
                        layout='fill'
                        objectFit="cover"
                        className='rounded'
                    />
                </div>
            </div>
            <Section className='px-2 col-span-3'>
                <Section.Heading>
                    <Section.Subtitle>
                        <p>faqs</p>
                    </Section.Subtitle>
                    <Section.Title>
                        Frequently Asked <br/> Questions
                    </Section.Title>
                </Section.Heading>
                <Section.Body>
                    <Card bgcolor='bg-white'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span>What specific immigration services do you offer?</span>
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        objectFit="cover"
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    We offer a wide range of immigration services, including visa applications, work permits, permanent residency applications, citizenship applications, and more.
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span>How can I contact your customer support team?</span>
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        objectFit="cover"
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    You can contact our customer support team via phone, email, or through our online chat system on our website.
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span>What payment methods do you provide?</span>
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        objectFit="cover"
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Paypal, Wire-transfer, Online Card Payment
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span>Is your customer support team multilingual?</span>
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        objectFit="cover"
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Yes, our customer support team consists of multilingual representatives who can assist you in various languages based on your preferences and needs.
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span>Can your customer support team provide legal advice?</span>
                                    <Image 
                                        src={ChevronUpIcon}
                                        alt='user mobile'
                                        objectFit="cover"
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Our customer support team consists of immigration experts who can provide general guidance and information regarding immigration processes. However, they cannot provide specific legal advice. For legal matters, we recommend consulting with an immigration attorney.
                                </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Card>
                </Section.Body>
            </Section>
        </div>
    )
}