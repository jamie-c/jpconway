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
        <>
            <HeadingOne title="My Posts" />
            {/* Add this <section> tag below the existing <section> tag */}
            <section >
                <h2 >Blog</h2>
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
        </>
    )
}

export default Posts