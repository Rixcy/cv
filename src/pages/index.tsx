import Head from 'next/head'
import { Container } from '../components/Container'
import { Timeline } from '../components/Timeline'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'

export default function Home(): React.ReactElement {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <Head>
                <title>Rick Booth - CV</title>
                <meta
                    name="description"
                    content="Experienced Front-End Developer with Full Stack Experience"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Header />
                <div className="flex flex-col md:flex-row">
                    <Contact />
                    <Timeline />
                </div>
            </Container>
        </div>
    )
}
