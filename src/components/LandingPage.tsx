import Logo from "./Logo"
import NavLinks from "./NavLinks"
import StyledLink from "./StyledLink"

const LandingPage = () => {
    return (
        <div className="max-w-7xl min-h-[100vh] flex flex-col items-center justify-center gap-3 px-8 md:px-24 lg:px-48">
            <div className="w-full flex flex-row justify-start">
                <Logo txtSize="text-5xl" bold={true}/>
            </div>
            <div className="w-full flex flex-row justify-start text-lg">
                <p>
                    <b>Member of the Spring 2023</b> <StyledLink url="https://www.okcoders.com/" title="OKCoders" /> <b>cohort</b>. 
                    Software engineer at <StyledLink url="https://www.nodecraft.com/" title="Nodecraft" />. 
                    Founding member of <StyledLink url="https://www.nourishedfood.co" title="Nourished Co" />. 
                    I built this site by using Node.js, React, Next.js, Tailwind CSS, and JavaScript/TypeScript.
                </p>
            </div>
            <div className="w-full flex flex-row justify-end sm:pr-10">
                <NavLinks />
            </div>
        </div>
    )
}

export default LandingPage