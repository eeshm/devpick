// api/category/categorySlug/route.ts


import { NextResponse } from "next/server";
import { getTechStacksByCategory } from "@/lib/database";

export async function GET(
  request: Request,
  { params }: { params: { categorySlug: string } }
) {
  try {
    const {categorySlug} =  await params
      console.log('categorySlug in API route:', categorySlug);
    const { searchParams } = new URL(request.url)


    const result = await getTechStacksByCategory(categorySlug)
    if (result.error) {
      const status = result.error.includes("Category not found") ? 404 : 500
      return NextResponse.json({
        success: false,
        error: result.error,
        data: null,
        count: 0
      }, { status })
    }
    return NextResponse.json({
      success: true,
      error: null,
      data: result.data,
      count: result.count
    }, { status: 200 })
  } catch (error) {
    console.error('API Error in /api/tech-stacks/category/[categorySlug]:', error)
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      data: null,
      count: 0
    }, { status: 500 })
  }
}