import { getPostData } from '@/lib/posts'

export default async function handler(req, res) {
    
    const { id } = req.query

    if (req.method === 'GET') {
        try {
            (async () => {
                const postData = await getPostData(id)
                res.status(200).json(postData)
            })()

        } catch (error) {
            console.log("🚀 ~ file: route.ts:25 ~ GET ~ error", error)
            res.json({error})
        }
    } else {
        res.json({ message: 'This endpoint only supports GET requests' })
    }
}