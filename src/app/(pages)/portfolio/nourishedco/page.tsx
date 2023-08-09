import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import Image from "next/image"

const Portfolio = () => {
    return (
        <div id="skills-page" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="Nourished Co" />
            <div className="flex flex-col max-w-7xl gap-6 mt-10 ml-auto mr-auto">
                <Image
                    className="rounded-md w-full"
                    src={`https://user-images.githubusercontent.com/5421944/259461022-0452f3ce-d315-4350-a951-fa6f729a8486.png`}
                    width={800}
                    height={800}
                    alt="Nourished Co"
                />
                <p>I am currently in the process of migrating our site from Squarespace to Next.js. This is a work in progress!</p>
                <p>This project is a recreation of the <StyledLink url="https://nourishedfood.co" title="nourishedfood.co" /> website. View the code for the next.js project <StyledLink url="https://github.com/jamie-c/nourished" title="on GitHub" />. The current version that the domain points to is a squarespace site.</p>
                <p>The next.js version will eventually be deployed and replace the current squarespace site.</p>
            </div>
        </div>
    )
}

export default Portfolio