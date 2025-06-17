import StyledLink from "@/components/StyledLink"
import Image from "next/image"
import HeadingOne from "../../../components/HeadingOne"

const About = () => {
    return (
        <div id="about" className="px-8 md:px-24 lg:px-48 max-w-7xl">
            <HeadingOne title="About Jamie" />
            <section id="jamie">
                <div className="w-full sm:w-80 md:w-80 rotate-0 sm:rotate-2 relative float-none sm:float-right mb-8 sm:ml-11">
                    <Image
                        className="rounded-md w-full"
                        src="/images/jamie-conway.jpg"
                        width={320}
                        height={320}
                        alt="Photo of Jamie Conway"
                    />
                </div>
                <div className="text-justify text-lg space-y-4">
                    <p>
                        Hello and welcome! My name is Jamie Conway and I am a
                        food scientist turned passionate software engineer with
                        a strong background in UI/UX design and full-stack
                        development. I am currently working to build{" "}
                        <StyledLink
                            url="https://apricothealth.ai"
                            title="Apricot"
                        />
                        . Over the years, I&apos;ve honed my skills in creating
                        intuitive and visually appealing applications that not
                        only meet user needs but also deliver exceptional
                        experiences. I successfully transitioned my career from
                        the culinary world, where I was a chef and successful
                        restaurant owner, to the tech industry.
                    </p>
                    <p>
                        I owned and operated Nourished Food Bar in the heart of
                        downtown Oklahoma City for 8 years. While the workload
                        of running a restaurant does not generally allow any
                        free time or down time, I was able to create and
                        maintain our restaurant&apos;s website during that time,
                        and also learn to code in Python. One of the biggest
                        aspects of successfully running a restaurant is managing
                        and knowing the cost of goods. Managing how much money
                        is in inventory, or in wasted product, determining what
                        the cost of each menu item, and the actual profits are
                        some of the important tasks necessary to successfully
                        manage any restaurant. Of course, spreadsheets were made
                        for these sorts of tasks, but there was something
                        magical about managing these business tasks by writing
                        Pythonic code! I&apos;ve since learned JavaScript (and
                        TypeScript) as well.
                    </p>
                    <p>
                        One aspect that my previous career has truly enriched is
                        my ability to lead and manage teams effectively,
                        bringing valuable interpersonal skills to any tech role.
                    </p>
                    <p>
                        My primary strengths are in Python and
                        JavaScript/TypeScript, and have extensive experience
                        with Vue.js, Node.js, React.js, and Next.js. While my
                        expertise lies in these areas, I have built a solid
                        foundation in computer science principles, which enables
                        me to quickly adapt to new languages and frameworks.
                    </p>
                    <p>
                        My journey in tech began with a deep curiosity for how
                        things work, which quickly evolved into a love for
                        solving problems through code. Whether I&apos;m
                        designing user interfaces or diving into the intricacies
                        of full-stack development, I strive to blend creativity
                        with functionality. My approach is always user-centered,
                        ensuring that every feature and interaction is crafted
                        with the end-user in mind. I am confident that my strong
                        work ethic, adaptability, and passion for continuous
                        learning make me a valuable addition to any tech team.
                    </p>
                    <p>
                        When I&apos;m not coding, you might find me exploring
                        the latest design trends, woodworking, playing piano or
                        guitar, or enjoying a good book. I&apos;m always eager
                        to learn new technologies and embrace fresh challenges
                        that push the boundaries of what&apos;s possible.
                        Let&apos;s connect and explore how we can collaborate to
                        build innovative solutions and make an impact!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
