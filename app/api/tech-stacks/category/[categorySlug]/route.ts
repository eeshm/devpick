// api/category/categorySlug/route.ts


import { NextResponse } from "next/server";
import { getTechStacksByCategory } from "@/lib/database";
import { count, error } from "console";
import { data } from "framer-motion/client";
import Categories from "@/components/Cateogories";

export async function GET(
    request:Request,
    {params}:{params:{categorySlug:string}}
){
    try{
        const {categorySlug} =params
        const {searchParams} = new URL(request.url)

        const limit  = parseInt(searchParams.get('limit') || '10')
        const offset = parseInt(searchParams.get('offset') || '0')
        const orderBy = searchParams.get('orderBy') as 'popularity' | 'name' || 'popularity'
        const orderDirection = searchParams.get('orderDirection') as 'asc' | 'desc' || "desc"

           if (isNaN(limit) || limit <= 0 || limit > 100) {
      return NextResponse.json({
        success: false,
        error: 'Invalid limit parameter (must be between 1 and 100)',
        data: null
      }, { status: 400 })
    }
    
    if (isNaN(offset) || offset < 0) {
      return NextResponse.json({
        success: false,
        error: 'Invalid offset parameter (must be >= 0)',
        data: null
      }, { status: 400 })
    }
    
    if (!['popularity', 'name', 'created_at'].includes(orderBy)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid orderBy parameter (must be popularity, name, or created_at)',
        data: null
      }, { status: 400 })
    }
    
    if (!['asc', 'desc'].includes(orderDirection)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid orderDirection parameter (must be asc or desc)',
        data: null
      }, { status: 400 })
    }
    const result = await getTechStacksByCategory(categorySlug,{
    limit,
    offset,
    orderBy,
    orderDirection
    })
    if(result.error){
        const status = result.error.includes("Category not found") ? 404 : 500 
        return NextResponse.json({
            success:false,
            error:result.error,
            data:null,
            count:0
        },{status})
    }
    return NextResponse.json({
        success:true,
        error:null,
        data:result.data,
        count:result.count
    },{status:200})
    }catch(error){
    console.error('API Error in /api/tech-stacks/category/[categorySlug]:', error)
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      data: null,
      count: 0
    }, { status: 500 })
    }
}