import { getSortedPostsData } from '@/lib/posts';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const posts = getSortedPostsData();
        const fetchPromises = posts.map(async ({ id }) => {
            const response = await fetch('http://localhost:3000/api/posts/' + id);
            const data = await response.json();
            return data;
        });

        try {
            const allData = await Promise.all(fetchPromises);
            res.status(200).json(allData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
