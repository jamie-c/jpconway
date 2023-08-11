import { getSortedPostsData } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    try {

        const posts = getSortedPostsData();
        const fetchPromises = posts.map(async ({ id }) => {
            const response = await fetch(`/api/posts/${id}`);
            const data = await response.json();
            return data;
        });

        const allData = await Promise.all(fetchPromises);
        return NextResponse.json(allData);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error fetching data' });
    }
}
