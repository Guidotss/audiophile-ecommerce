import { NextRequest } from "next/server";
import { ProductService } from "@/service";
import "@/database/connect";

const productService = new ProductService();

export async function GET(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const slug = pathname.split("/")[4];

  if (!slug)
    return new Response(JSON.stringify({ message: `slug is required` }), {
      status: 400,
    });

  try {
    const product = await productService.getProductBySlug(slug);

    if (!product)
      return new Response(JSON.stringify({ message: `Product not found` }), {
        status: 404,
      });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: `Error getting product by slug: ${error}` }),
      { status: 500 }
    );
  }
}
