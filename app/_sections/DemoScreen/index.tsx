import { AppStoreButton } from "@app/_components/Button/AppStoreButton"
import { PlayStoreButton } from "@app/_components/Button/PlayStoreButton"
import { Section } from "@app/_components/Section"


export const DemoScreen = () => {
    return (
        <Section>
            <Section.Heading>
                <Section.Subtitle>
                    <p>quick 2 min signup</p>
                </Section.Subtitle>
                <Section.Title>
                    <h2>The new way of Handling Immigration</h2>
                </Section.Title>
            </Section.Heading>
            <Section.Body>
                <p className="text-gray-500 leading-6 mt-6">Case Status | Journey Tabs | Notifications | Groups | Talk to Lawyers | and many other 
                    features to make your Journey Simple.
                </p>
                <div className="flex items-center justify-around md:justify-normal gap-4 mt-12 md:mt-8">
                    <AppStoreButton />
                    <PlayStoreButton />
                </div>
            </Section.Body>
        </Section>
    )
}