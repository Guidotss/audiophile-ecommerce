import { ProductService } from "@/service";
import "@/database/connect";

const productService = new ProductService();

export async function GET() {
  try {
    const products = await productService.getProducts();
    return new Response(JSON.stringify(products), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return {
      status: 500,
      body: { message: `Internal server errors:${error}` },
    };
  }
}
