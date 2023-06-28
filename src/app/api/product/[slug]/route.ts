import { NextRequest } from "next/server";

export async function GET(req:NextRequest) { 
    const { pathname } = req.nextUrl; 
    console.log(pathname);
    return new Response(JSON.stringify({message: `Hello from ${pathname}`}), {status: 200});
}