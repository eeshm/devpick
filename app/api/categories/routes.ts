import { NextResponse,NextRequest } from "next/server";
import { getAllCategories,getCategoryBySlug } from "@/lib/database";

export default async  function GET(req:NextRequest){
    try{
        const {searchParams} = new URL(req.url)
        const slug =searchParams.get('slug')

        if(slug){
            const result = await getCategoryBySlug(slug)

            if(result.error){
                return NextResponse.json(
                    {success:false,error:result.error,data:null},
                    {status:404}
                )
            }

            return NextResponse.json(
                {success:true,error:null,data:result.data},
                {status:200}
            )
        }
        const result = await getAllCategories();

        if(result.error){
            return NextResponse.json(
                {succes:false,error:result.error,data:null},
                {status:404}
            )
        }
         return NextResponse.json(
            {success:true,error:null,data:result.data},
            {status:200}
        )
    }catch(error){
        console.error("Categories API error", error)
        return NextResponse.json(
            { success: false, error: (error as Error).message, data: null },
            { status: 500 }
        )
    }
}