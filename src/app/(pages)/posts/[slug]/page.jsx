import HeadingOne from "@/components/HeadingOne"
import StyledLink from "@/components/StyledLink"
import { getAllPostIds, getPostData } from "@/lib/posts"
import dayjs from "dayjs"


// use generateStaticParams to generate all url slugs at build to be statically served
export async function generateStaticParams() {
    // get all post ids, which will serve as the url slug, i.e. /posts/slug
    const posts = getAllPostIds()

    return posts.map((post) => {
        return ({
            slug: post.params.id,
        })
    })
}

// define the page content for each post
async function Page({ params }) {

    // Need to read contents of the .md file from the server
    async function getHTML(id) {
        const postData = await getPostData(id)
        return postData  // return html content as string
    }

    const postContent = (await getHTML(params.slug)).contentHtml
    const postTitle = (await getHTML(params.slug)).title
    const { id, contentHtml, title, date } = (await getHTML(params.slug))
    console.log("🚀 ~ file: page.jsx:29 ~ Page ~ { id, contentHtml, title, date }:", { id, contentHtml, title, date })

    const formattedDate = dayjs(date).format('MMM DD, YYYY')

    return (
        <div id="post-content" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <em><HeadingOne title={postTitle} /></em>
            <div id="post-metadata" className="flex flex-row items-center justify-start text-sm font-light mb-8 divide-x-2 divide-[#2F2F30]" >
                <div className="text-[#8a51ae] pr-6">{formattedDate}</div>
                <div className="pl-6">
                    <a 
                        className="text-[#3a86ff] hover:text-[#0767FF]"
                        href="https://twitter.com/jamie_conway"
                        rel="noopener noreferrer"
                        target="_blank">jamie_conway</a></div>
            </div>
            <div 
                className="text-lg flex flex-col gap-4"
                dangerouslySetInnerHTML={{ __html: postContent }} 
            />
        </div>
    )
}


export default Page