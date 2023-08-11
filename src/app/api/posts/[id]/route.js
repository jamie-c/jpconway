import { getPostData } from "@/lib/posts";
import { NextResponse } from "next/server";

async function getAllPostData(id) {

    try {
        const postData = await getPostData(id)
        return postData

    } catch (error) {
        console.log("Error in getAllPostData:", error);
        throw new Error("Error fetching post data");
    }
}

export async function GET(request, { params }) {

    const postId = params.id
    try {
        const res = await getAllPostData(postId)
        return NextResponse.json(res)
    } catch (error) {
        console.log("Error in GET:", error);
        return NextResponse.error({ statusCode: 500, body: "Internal Server Error" })
    }
}
