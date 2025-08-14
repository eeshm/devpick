import { NextResponse } from "next/server";
import { getTechStacksForComparison } from "@/lib/database";
import { error } from "console";
import { data } from "framer-motion/client";

export default async function GET(request:Request,
    {params} :{params:{categorySlug:string}}
){
    try{
        const {categorySlug}=params
        const searchParams = new URL(request.url)

        const result = await getTechStacksForComparison(categorySlug)

        if(result.error){
            const status = result.error.includes("Category not found") ? 404 : 500
            return NextResponse.json({
                success:false,
                error:result.error,
                data:null
            },{status})
        }

        return NextResponse.json({
            data:result.data,
            success:true,
            error:null,
            count:result.data?.length || 0
        },{status:200})
    }catch(error){
        console.error("API error in /api/tech-stacks/comparison/[categorySlug]")
        return NextResponse.json({
            success:false,
            data:null,
            error:"Internal error in fetching categories for comparison"
        },{status:500})
    }
}