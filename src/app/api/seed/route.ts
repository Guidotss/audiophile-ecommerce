import { SeedService } from '@/service';
import '@/database/connect';

const seedService = new SeedService();

export async function GET(req:Request) { 
    try{
        const response = await seedService.seed();
        return new Response(JSON.stringify({ message:'Products seeded successfully' }), {status: 200});
    }catch(error){ 
        console.log(error);
        return new Response(JSON.stringify({message: 'Internal Server error, check logs for more information'}), {status: 500});
    }
}