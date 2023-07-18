import { Section, Card } from "@app/_components"

export const RequestDemo = () => {
    return (
        <div className="w-full my-24">
            <Card bgcolor="bg-purple-200" borderRadius="rounded-2xl">
                <Section className = 'px-4 md:px-8 my-10 w-full'>
                    <Section.Heading>
                        <Section.Title className="text-center w-full">
                            <h2 className="text-5xl leading[1.2]">Helping entreprneurs<br/> to grow business</h2>
                        </Section.Title>
                    </Section.Heading>
                    <Section.Body className="text-center">
                        <p className="text-center mt-12 w-2/4 mx-auto leading-[1.5]">No more waiting to get paid from platforms or payment processors with instant payout</p>
                        <button className="my-16 bg-gray-900 p-4 rounded-xl text-white shadow drop-shadow">
                            Request A Demo
                        </button>
                    </Section.Body>
                </Section>
            </Card>
        </div>
    )
}