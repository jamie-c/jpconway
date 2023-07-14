import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import Image from "next/image"

const Skills = () => {

    const skillImages = [
        {
            title: 'Responsive Web Design - Free Code Camp',
            linkTo: 'https://www.freecodecamp.org/fcc6ebd6462-e213-40c0-8eaf-e06f336c09cd',
            fileName: 'ResponsiveWebDesignCert-FreeCodeCamp.jpg',
        },
        {
            title: 'JavaScript Algorithms and Data Structures - Free Code Camp',
            linkTo: 'https://www.freecodecamp.org/fcc6ebd6462-e213-40c0-8eaf-e06f336c09cd',
            fileName: 'JavaScriptAlgorithmsAndDataStructuresCert-FreeCodeCamp.jpg',
        },
    ]

    return (
        <div id="skills-page" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="Skills" />
            {skillImages.map(({ title, linkTo, fileName }: {title: string, linkTo: string, fileName: string}) => (
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
                        url="https://www.freecodecamp.org/fcc6ebd6462-e213-40c0-8eaf-e06f336c09cd"
                        title="Free Code Camp Profile"
                    />
                </div>
            ))}
        </div>
    )
}

export default Skills