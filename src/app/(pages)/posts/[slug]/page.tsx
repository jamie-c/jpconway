import { getAllPostIds, getPostData } from "@/lib/posts"

export async function generateStaticParams({ params }) {
    const posts = getAllPostIds();

    return posts.map((post) => ({
        slug: post.params.id
  }))
}

function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}

export default Page