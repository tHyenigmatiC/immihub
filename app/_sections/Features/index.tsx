import Image from "next/image"
import Link from "next/link"

import { Section } from "@app/_components/Section"
import { Card } from "@app/_components/Card"
import DefaultIcon from '@app/_assets/icons/bell.svg'

export const Features = () => {
    return (
        <Section className="my-10 w-full">
            <Section.Heading className="items-start md:items-center text-start md:text-center">
                <Section.Subtitle>
                    <p>Our features</p>
                </Section.Subtitle>
                <Section.Title>
                    <h2>Immigration Journey Made <br/> Simple</h2>
                </Section.Title>
            </Section.Heading>
            <Section.Body className="text-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-8">
                    {
                        featuresData.map(feature => (
                            <Card key={feature.alt} bgcolor="bg-white">
                                <Card.ImageWithText>
                                    <Card.Image bgcolor="bg-black">
                                        <Image
                                            alt={feature.alt}
                                            src={feature.icon}
                                            height={24}
                                            width={24}
                                            style={{objectFit:"contain"}}
                                        />
                                    </Card.Image>
                                    <Card.Text>
                                        <p>{feature.heading}</p>
                                    </Card.Text>
                                </Card.ImageWithText>
                                <Card.Content color="text-gray-600">
                                    <p className="leading-6">
                                        {feature.description}
                                    </p>
                                </Card.Content>
                                <Card.More>
                                    <Link href={feature.link}>
                                        {feature.more}
                                    </Link>
                                </Card.More>
                            </Card>
                        ))
                    }
                </div>
            </Section.Body>
        </Section>
    )
}


const featuresData = [
    {
        icon: DefaultIcon,
        alt: 'hidden eye',
        heading: 'Ask Anonymously',
        description: `
            We prioritize anonymity and consider it our utmost responsibility to 
            diligently safegaurd and protect your identity.
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
    {
        icon: DefaultIcon,
        alt: 'headphones',
        heading: 'Immigaration Experts ',
        description: `
            Immigation Lawyers, Tax Professionals, Career Counsellors are available
            to speak anytime for a discounted fee
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
    {
        icon: DefaultIcon,
        alt: 'government office',
        heading: 'USCIS Case Tracker',
        description: `
            Easy to track all your immigation cases uder one roof. Our AI tools 
            help with prediction of timelines/case results.
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
    {
        icon: DefaultIcon,
        alt: 'group of people',
        heading: 'Groups/Communities',
        description: `
            Join any groups/communities that interest you and engage in discussing
            fostering new friendships.
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
    {
        icon: DefaultIcon,
        alt: 'handshake',
        heading: 'Meet New People',
        description: `
            Use advanced filters like Langugae, Home Country & others 
            to connect with like minded people.
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
    {
        icon: DefaultIcon,
        alt: 'book with financial ideas',
        heading: 'Financial Tools',
        description: `
            We partner with experts/business that deal with
            Banking/Financial Products and other relevant services.
        `,
        link: '#',
        more: '(Beta - Coming Soon) ->'
    },
]