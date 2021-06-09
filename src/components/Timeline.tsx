import { GetInTouch } from './GetInTouch'

export const Timeline: React.VFC = (): React.ReactElement => {
    const externalProps = {
        target: '_blank',
        rel: 'noopener noreferrer',
    }

    return (
        <div className="relative">
            <div className="absolute left-0 top-0 bg-gradient-to-br from-nord4 to-nord9 w-full md:w-1 h-1 md:h-full" />
            <div className="pt-6 md:pt-0 pl-0 md:pl-6 overflow-y-hidden">
                <div className="pb-6 xl:pb-8">
                    <h3 className="tracking-widest font-bold mb-1">INTRODUCTION</h3>
                    <p className="text-nord3 text-sm">
                        I&apos;m a 26 year old software developer from Skipton, England. I
                        specialise in front end web development but come from a full stack
                        background. My ideal stack is using GraphQL, Prisma and Next.JS.
                    </p>
                </div>
                <div className="pb-6 xl:pb-8">
                    <h3 className="tracking-widest font-bold mb-1">JOB HISTORY</h3>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">2 Years @ 9xb</span> - Tech Lead / Head of
                        Front-End Development
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">5 Months @ Awaze</span> - Web Developer
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">1 Year @ Lead Tech</span> - Web Developer
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">3 Years @ CPOMS</span> - Full Stack Rails
                        Developer
                    </p>
                </div>
                <div className="pb-6 xl:pb-8">
                    <h3 className="tracking-widest font-bold mb-1">TOOLS AND TECHNOLOGIES</h3>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">Frameworks</span> - React, Next.JS, Blitz,
                        Gatsby, React Testing Library, Jest, Cypress
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">Languages</span> - JavaScript, TypeScript,
                        GraphQL (and a bit of Rust/Python/Go/Rails/Solidity on the side)
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">Tools</span> - Prettier, ESLint, Lerna,
                        ESBuild, TailwindCSS, CSS-in-JS, Redux, MobX, Zustand
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">Skills</span> - Software Architecture, Unit
                        Testing, Integration Testing, Serverless Deployment, Progressive Web Apps
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <span className="text-nord9">Dev Environment</span> - I develop mainly on
                        the command line using a mixture of Vim, Tmux, FZF and Lazygit amongst many
                        other powerful tools.
                    </p>
                </div>
                <div className="pb-6 xl:pb-8">
                    <h3 className="tracking-widest font-bold mb-1">PROJECTS</h3>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/cv" {...externalProps}>
                            <span className="text-nord9 underline">CV</span>
                        </a>{' '}
                        - This project, build using TailwindCSS and Next.JS.
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/community" {...externalProps}>
                            <span className="text-nord9 underline">Community</span>
                        </a>{' '}
                        - Full stack SaaS application for building a community, built using Blitz.
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/nextjs-starter" {...externalProps}>
                            <span className="text-nord9 underline">NextJS Starter</span>
                        </a>{' '}
                        - Starter project for NextJS, TailwindCSS, Commitlint, Prettier, ESLint and
                        more.
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/vite-react-starter" {...externalProps}>
                            <span className="text-nord9 underline">Vite Starter</span>
                        </a>{' '}
                        - Similar to the NextJS starter, but for Vite.
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/rickbooth.me" {...externalProps}>
                            <span className="text-nord9 underline">rickbooth.me</span>
                        </a>{' '}
                        - Current portfolio website built using NextJS and Dracula UI.
                    </p>
                    <p className="text-nord3 mb-1 text-sm">
                        <a href="https://github.com/Rixcy/airbnb-clone" {...externalProps}>
                            <span className="text-nord9 underline">AirBnB Clone</span>
                        </a>{' '}
                        - A homepage clone of AirBnB to practice using TailwindCSS.
                    </p>
                </div>
                <GetInTouch />
            </div>
        </div>
    )
}
