import HeadingOne from "@/components/HeadingOne"
import { getAllPostIds, getPostData } from "@/lib/posts"
import dayjs from "dayjs"
import Link from "next/link"


// use generateStaticParams to generate all url ids at build to be statically served
export async function generateStaticParams() {
    // get all post ids, which will serve as the url id, i.e. /posts/id
    const posts = getAllPostIds()

    // map the ids to the url ids
    return posts.map((post) => {
        return ({
            id: post.params.id,
        })
    })
}

// define the page content for each post
async function Page({ params }) {

    // Read contents of the .md file from the server
    async function getHTML(id) {
        const postData = await getPostData(id)
        return postData  // return html content as string
    }

    const postContent = (await getHTML(params.id)).contentHtml  // get the html content
    const postTitle = (await getHTML(params.id)).title  // get the title
    const { id, contentHtml, title, date } = (await getHTML(params.id))  // get all meta data

    const formattedDate = dayjs(date).format('MMM DD, YYYY')  // format the date for display on the page

    return (
        <div id="post-content" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            {/* element containing a back arrow and link back to the previous page */}
            <div id="back-link">
                <Link href="/posts" className="group flex flex-row items-center justify-start mt-4">
                    <svg className="w-6 h-6 mr-1 group-hover:stroke-darkBlue-600" viewBox="0 0 24 24" fill="none" stroke="#3a86ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <span className="text-brightBlue-500 group-hover:text-darkBlue-600">Posts</span>
                </Link>
            </div>
            {/* element containing the title in a heading */}
            <em><HeadingOne title={postTitle} /></em>
            {/* element containing the post content starting with formattedDate, vertical line, link to author */}
            <div id="post-metadata" className="flex flex-row items-center justify-start text-sm font-light mb-8 divide-x-2 divide-tricornBlack-500 dark:divide-pureWhite-200" >
                <div className="text-[#8a51ae] pr-6">{formattedDate}</div>
                <div className="pl-6">
                    <a 
                        className="text-[#3a86ff] hover:text-[#0767FF]"
                        href="https://twitter.com/jamie_conway"
                        rel="noopener noreferrer"
                        target="_blank">jamie_conway</a></div>
            </div>
            {/* finally, element containing the post content */}
            <div
                id="inner-html" 
                className="text-lg flex flex-col gap-4"
                dangerouslySetInnerHTML={{ __html: postContent }} 
            />
        </div>
    )
}


export default Page