import { NextResponse,NextRequest } from "next/server";
import { getAllCategories} from "@/lib/database";

export async function GET(){
    try{
        const result = await getAllCategories();
        if(result.error){
            console.log(`${result.error}`)
            return NextResponse.json(
                {
                    success:false,
                    error:result.error,
                    data:null
                },{status:404})
        }
        return NextResponse.json(
            {
                success:true,
                error:null,
                data:result.data,
                count:result.data?.length || 0
            } , {status:200,
                headers:{
                    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
                }
            })
    }catch(error){
        console.error("API error in api/categories", error)
        return NextResponse.json({
            success:false,
            error:"Internal server error",
            data:null
        },{status:500})
    }
}