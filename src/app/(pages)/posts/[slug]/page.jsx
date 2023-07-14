import HeadingOne from "@/components/HeadingOne"
import { getAllPostIds, getPostData } from "@/lib/posts"


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

    return (
        <>
            <em><HeadingOne title={postTitle} /></em>
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </>
    )
}


export default Page