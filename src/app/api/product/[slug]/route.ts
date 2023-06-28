import { NextRequest } from "next/server";
import { ProductService } from '@/service';

const productService = new ProductService();


export async function GET(req:NextRequest) { 
    const { pathname } = req.nextUrl; 
    console.log(pathname);
    return new Response(JSON.stringify({message: `Hello from ${pathname}`}), {status: 200});
}