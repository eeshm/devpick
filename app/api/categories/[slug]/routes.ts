//categories/[slug]/route.ts
import { NextResponse } from "next/server";
import { getCategoryBySlug } from "@/lib/database";

export async function GET(
        request:Request,
        { params } : {params:{slug:string}}
){
    try{
        const {slug}=params
        const result = await getCategoryBySlug(slug);
        if(result.error){
            return NextResponse.json({
                success:false,
                error:result.error,
                data:null
            },{status:404})
        }
        return NextResponse.json({
            success:true,
            error:null,
            data:result.data
        },{status:200})
    }catch(error){
        console.error("API Error in api/categories/[slug]: ",error)
        return NextResponse.json({
            success:false,
            error:"Internal server error",
            data:null
        },{status:500})
    }
}