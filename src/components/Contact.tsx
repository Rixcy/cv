import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Contact: React.VFC = () => {
    return (
        <div className="flex flex-row md:flex-col pr-4">
            <a href="https://twitter.com/rixcydev" className="mb-4 mr-4 md:mr-0 block">
                <FaTwitter className="text-2xl text-nord3" />
            </a>
            <a href="https://github.com/rixcy" className="mb-4 mr-4 md:mr-0 block">
                <FaGithub className="text-2xl text-nord3" />
            </a>
            <a
                href="https://www.linkedin.com/in/rick-booth-480677119/"
                className="mb-4 mr-4 md:mr-0 block"
            >
                <FaLinkedin className="text-2xl text-nord3" />
            </a>
        </div>
    )
}
