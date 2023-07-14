import HeadingOne from "@/components/HeadingOne"
import { getSortedPostsData } from "../../../lib/posts"
import dayjs from 'dayjs'
import PostDate from "@/components/postComponents/PostDate"
import PostYear from "@/components/postComponents/PostYear"
// import StyledLink from "@/components/StyledLink"
import Link from "next/link"

async function getData() {
    const allPostsData = getSortedPostsData()
    if (!allPostsData) {
        throw new Error
    }
    return allPostsData
}


const Posts = async () => {

    const data = await getData()
    const mappedData = data.map(({ id, title, date }) => {
        const year = dayjs(date).year()
        const month = dayjs(date).format('YYYY-MM')
  
        return {
            date,
            year,
            month,
            id,
            title
        }
    })

    const groupedPosts = mappedData.reduce((acc, { year, month, id, date, title }) => {
        const key = month
        
        if (!acc[year]) {
          acc[year] = {};
        }

        if (!acc[year][key]) {
            acc[year][key] = []
        }

        acc[year][key].push({id, title, date});

        return acc;
    }, {});
    
    const years = Object.keys(groupedPosts)
    const getMonths = (y) => {
        return Object.keys(groupedPosts[y])
    }
    

    return (
        <div id="posts" className="px-8 md:px-24 lg:px-48 max-w-7xl w-full flex flex-col items-start">
            <HeadingOne title="Posts" />
            <section id="posts">
                {years.map(year => (
                    <>
                    <PostYear id={year} key={year} date={year} />
                    {getMonths(year).map(month => (
                        <div id={month} className="pb-4" key={month}>
                        {groupedPosts[year][month].map(({ id, date, title }) => {
                            return (
                                <div className="flex flex-row gap-5 pb-2" id={month} key={id}>
                                    <span className="w-24">
                                        <PostDate date={date} />
                                    </span>
                                    <Link 
                                        className="text-[#3a86ff] hover:text-[#0767FF] border-b-2 border-[#3a86ff] hover:border-[#0767FF] font-medium text-xl" 
                                        href={`/posts/${id}`}>{title}</Link>
                                </div>
                            )
                        })}
                        </div>
                    ))}
                </>
                    ))}
            </section>
        </div>
    )
}

export default Posts