import Image from "next/image"
import HeadingOne from "../../../components/HeadingOne"

const About = () => {
    return (
        <div id="about" className="px-8 md:px-24 lg:px-48 max-w-7xl">
            <HeadingOne title='About Jamie'/>
            <section id="jamie">
	            <div
                    className="w-full sm:w-80 md:w-80 rotate-0 sm:rotate-2 relative float-none sm:float-right mb-8 sm:ml-11"
                >
                    <Image
                        className="rounded-md" 
                        src="/images/jamie-conway.jpg"
                        width={320}
                        height={320}
                        layout="responsive"
                        alt="Photo of Jamie Conway" 
                    />
                </div>
                <div className="text-justify text-lg">
	                <p>Hello and welcome! My name is Jamie Conway and I am a full stack developer with a diverse background in entrepreneurship, food science, and  biomedical science. I have 5 years of experience in the field of software development, and owned and operated a small restaurant in the heart of downtown Oklahoma City for 7.5 years. I am one of the founders of <a href="https://www.nourishedfood.co" target="_blank">Nourished Co</a>.</p>
                    <p id="okcoders">This site is a work-in-progress using what I&apos;ve learned in the <a href="https://www.okcoders.com/" target="_blank">OKCoders</a> bootcamp.</p>
                    <p>As a full stack developer, I have a deep understanding of both front-end and back-end development, and I am comfortable working with a variety of programming languages and frameworks. I am committed to creating intuitive, user-friendly interfaces that provide an outstanding user experience, as well as robust and reliable back-end systems that can handle heavy traffic and large amounts of data.</p>
                    <p id="background">My background in biomedical science has provided me with a unique perspective and a deep understanding of complex scientific concepts. I am able to leverage my expertise to create software solutions that meet the needs of scientists, researchers, and healthcare professionals. I am passionate about using technology to improve healthcare outcomes and to drive innovation in the industry.</p>
                    <p>In addition to my technical skills, I am a collaborative team player who thrives in a fast-paced, dynamic environment. I am a clear communicator who can articulate complex technical and scientific concepts to both technical and non-technical stakeholders. My ability to bridge the gap between technology and science makes me an asset to any team.</p>
                    <p>I am excited about the opportunity to bring my skills and experience to your organization as a full stack developer. Please don&apos;t hesitate to reach out if you have any questions or if you would like to discuss potential job opportunities. Thank you for your time and consideration, and I look forward to hearing from you soon!</p>
                    <p>I have work experience building websites using many different tech stacks including wordpress (LAMP), django, flask, react, node...</p>
                    <p id="backend">Backend experience includes: neo4j, cypher, mongoDB, mongoose.</p>
                    <p>I&apos;m obsessed with learning new languages, and building projects to be fun and appealing to use!</p>
                    <p id="for-hire">I am  open for  work - feel free to contact me at any time. Contact me for work via email at forhire@jpconway.com.</p>
                </div>
        </section>
        </div>
    )
}

export default About