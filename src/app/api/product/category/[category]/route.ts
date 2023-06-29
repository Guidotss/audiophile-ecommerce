import { NextRequest } from "next/server";
import { ProductService } from "@/service";
import '@/database/connect';

const productService = new ProductService();

export async function GET(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const category = pathname.split("/")[4];
  console.log(category);

  try {
    const products = await productService.getProductsByCategory(category);
    if (!products) {
      return new Response(
        JSON.stringify({ error: "No products found for category" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ products }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
