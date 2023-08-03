import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import ExpandingSubMenu from "@/components/expandingSubMenu/ExpandingSubMenu"
import Image from "next/image"
import Link from "next/link"

const portfolio = [
    {
        title: 'Weather App',
        linkTo: '/weather',
        fileName: 'weather-app.jpg',
        category: 'OKCoders'
    },
    {
        title: 'Ten Key Trips',
        linkTo: 'https://tenkeytrips.com',
        fileName: 'TenKeyTrips-Home.jpg',
        category: 'Websites'
    },
    {
        title: 'Nourished Co',
        linkTo: 'https://nourishedfood.co',
        fileName: 'NourishedCo-Home.jpg',
        category: 'Websites'
    }
]

const Portfolio = () => {
    return (
        <div id="skills-page" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="My Portfolio" />
            <ExpandingSubMenu links={portfolio}/>
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-6 mt-10 ml-auto mr-auto">
                {portfolio.map(({ title, linkTo, fileName }: {title: string, linkTo: string, fileName: string}) => {
                    const isExternalLink = linkTo.startsWith('http') ? {target:"_blank"} : {}
                return (
                <div
                    key={fileName}
                    id={title.toLowerCase().replace(/ /g, '-')}
                    className="flex flex-col mb-8 items-start justify-evenly "
                >
                    <div className="text-2xl mb-4 font-light"><b>{title}</b></div>
                    <Link rel="noopener noreferrer" {...isExternalLink} href={linkTo}>
                        <div
                            className="w-full sm:w-80 md:w-80 h-auto relative mb-6"
                        >
                            <Image
                                className="rounded-md w-full" 
                                src={`/images/${fileName}`}
                                width={240}
                                height={240}
                                alt={title} 
                            />
                        </div>
                    </Link>
                    <StyledLink
                        url={linkTo}
                        title="View the Project"
                    />
                </div>
                )})}
            <div>More coming soon...</div>
            </div>
        </div>
    )
}

export default Portfolio