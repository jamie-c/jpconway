import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import Image from "next/image"

const portfolio = [
    {
        title: 'Weather App',
        linkTo: '/weather',
        fileName: 'weather-app.png',
    }
]

const Portfolio = () => {
    return (
        <div id="skills-page" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="My Portfolio" />
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                {portfolio.map(({ title, linkTo, fileName }: {title: string, linkTo: string, fileName: string}) => (
                <div
                    key={fileName}
                    className="flex flex-col mb-8 items-start justify-evenly "
                >
                    <div className="text-2xl mb-4 font-light"><b>{title}</b></div>
                    <a rel="noopener noreferrer" href={linkTo}>
                        <div
                            className="w-full sm:w-80 md:w-80 h-auto relative mb-6"
                        >
                            <Image
                                className="rounded-md w-full" 
                                src={`/images/${fileName}`}
                                width={320}
                                height={320}
                                alt={title} 
                            />
                        </div>
                    </a>
                    <StyledLink
                        url={linkTo}
                        title="View the Project"
                    />
                </div>
                ))}
            <div>More coming soon...</div>
            </div>
        </div>
    )
}

export default Portfolio