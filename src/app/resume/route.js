import { NextResponse } from 'next/server';

export function GET() {
    // Send the PDF content as the response
    return NextResponse.redirect("https:jpconway.com/files/resume-for-jamie-conway.pdf");
}