import HeadingOne from "@/components/HeadingOne"
import { getSortedPostsData } from "../../../lib/posts"
import dayjs from 'dayjs'
import PostDate from "@/components/postComponents/PostDate"
import PostYear from "@/components/postComponents/PostYear"

async function getData() {
    const allPostsData = getSortedPostsData()
    if (!allPostsData) {
        throw new Error
    }
    return allPostsData
}

const Posts = async () => {

    const data = await getData()

    return (
        <div id="about" className="px-8 md:px-24 lg:px-48 max-w-7xl">
            <HeadingOne title="Posts" />
            <section id="posts">
                <ul >
                    <li>Testing postsData</li>
                    
                    {data.map(({ id, date, title }) => {
                        const year = dayjs(date).year()
                        const month = dayjs(date).month()
                        const day = dayjs(date).day()
                        const dateFormatted = dayjs(date).format('YYYY-MM-DD')
                        
                        return (
                        <li key={id}>
                            <PostYear date={date} />
                            <br />
                            {title}
                            <br />
                            {id}
                            <br />
                            <PostDate date={date} />
                        </li>
                    )})}
                </ul>
            </section>
        </div>
    )
}

export default Posts