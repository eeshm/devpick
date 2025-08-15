import { NextResponse } from "next/server";
import { getTechStackBySlug } from "@/lib/database";
import { data, param } from "framer-motion/client";

export async function GET(
    request:Request,
    {params}:{params:{slug:string}}
){
    try{
        const {slug} = params

        const result = await getTechStackBySlug(slug)
        if(result.error){
               const status = result.error === 'Tech stack not found' ? 404 : 500
            return NextResponse.json({
                success:false,
                error:result.error,
                data:null
            },{status})
        }
        return NextResponse.json({
            success:true,
            error:null,
            data:result.data
        },{status:200})
    }catch(error){
    console.error('API Error in /api/tech-stacks/[slug]:', error)
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      data: null
    }, { status: 500 })
    }
}