import HeadingOne from "@/components/HeadingOne"
import { getSortedPostsData } from "../../../lib/posts"
import * as dayjs from 'dayjs'

export async function getData() {
    const allPostsData = getSortedPostsData()
    if (!allPostsData) {
        throw new Error
    }
    console.log("🚀 ~ file: page.tsx:14 ~ Posts ~ allPostsData:", allPostsData)
    return allPostsData
}

const Posts = async () => {

    const data = await getData()
    console.log("🚀 ~ file: page.tsx:16 ~ Posts ~ data:", data)

    return (
        <div id="about" className="px-8 md:px-24 lg:px-48 max-w-7xl">
            <HeadingOne title="Posts" />
            {/* Add this <section> tag below the existing <section> tag */}
            <section id="posts">
                <ul >
                    <li>Testing postsData</li>
                    
                    {data.map(({ id, date, title }) => {
                        const year = dayjs(date).year()
                        return (
                        <li key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {year}
                        </li>
                    )})}
                </ul>
            </section>
        </div>
    )
}

export default Posts