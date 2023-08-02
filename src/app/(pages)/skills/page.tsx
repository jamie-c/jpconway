import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import Image from "next/image"


const freeCodeCampProfileUrl = 'https://www.freecodecamp.org/fcc6ebd6462-e213-40c0-8eaf-e06f336c09cd'
const neo4jProfileUrl = 'https://graphacademy.neo4j.com/u/1489cff7-f57c-4978-a0c6-3ba3e95ec411/'


const Skills = () => {

    const skillImages = [
        {
            title: 'Backend Development and APIs - Free Code Camp',
            linkTo: freeCodeCampProfileUrl,
            fileName: 'BackendDevelopmentAndAPIsCert-FreeCodeCamp.jpg',
            profileTitle: 'Free Code Camp Profile',
            profileUrl: freeCodeCampProfileUrl,
        },
        {
            title: 'Responsive Web Design - Free Code Camp',
            linkTo: freeCodeCampProfileUrl,
            fileName: 'ResponsiveWebDesignCert-FreeCodeCamp.jpg',
            profileTitle: 'Free Code Camp Profile',
            profileUrl: freeCodeCampProfileUrl,
        },
        {
            title: 'JavaScript Algorithms and Data Structures - Free Code Camp',
            linkTo: freeCodeCampProfileUrl,
            fileName: 'JavaScriptAlgorithmsAndDataStructuresCert-FreeCodeCamp.jpg',
            profileTitle: 'Free Code Camp Profile',
            profileUrl: freeCodeCampProfileUrl,
        },
        {
            title: 'Neo4j Fundamentals',
            linkTo: 'https://graphacademy.neo4j.com/c/10df8afa-bb29-46dc-b82d-7695bb977c01/',
            fileName: 'Neo4j-Fundamentals.png',
            profileTitle: 'Neo4j Profile',
            profileUrl: neo4jProfileUrl,
        },
        {
            title: 'Cypher Fundamentals',
            linkTo: 'https://graphacademy.neo4j.com/c/2882cf20-b15e-43a4-8a1b-807d948ad524/',
            fileName: 'Neo4j-Cypher-Fundamentals.png',
            profileTitle: 'Neo4j Profile',
            profileUrl: neo4jProfileUrl,
        },
        {
            title: 'Graph Data Modeling Fundamentals',
            linkTo: 'https://graphacademy.neo4j.com/c/db658771-03ff-4413-ac22-caafb23ce57c/',
            fileName: 'Neo4j-GDM-Fundamentals.png',
            profileTitle: 'Neo4j Profile',
            profileUrl: neo4jProfileUrl,
        },
        ,
        {
            title: 'Building Neo4j Applications with Python',
            linkTo: 'https://graphacademy.neo4j.com/c/fea8db94-1399-4e4c-9dd6-d4ccf8faea23/',
            fileName: 'Neo4j-building-with-python.png',
            profileTitle: 'Neo4j Profile',
            profileUrl: neo4jProfileUrl,
        }
    ]

    return (
        <div id="skills-page" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="Skills" />
            {skillImages.map((skillImage: {
                title: string;
                linkTo: string;
                fileName: string;
                profileTitle: string;
                profileUrl: string;
  }             | undefined, index: number) => {
                if (skillImage) {
                    const { title, linkTo, fileName, profileTitle, profileUrl } = skillImage;
                    return (
                <div
                    key={fileName}
                    className="flex flex-col mb-8 items-start justify-evenly "
                >
                    <div className="text-2xl mb-4 font-light"><b>{title}</b></div>
                    <a rel="noopener noreferrer" target="_blank" href={linkTo}>
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
                        url={profileUrl}
                        title={profileTitle}
                    />
                </div>
)}})}
        </div>
    )
}

export default Skills
