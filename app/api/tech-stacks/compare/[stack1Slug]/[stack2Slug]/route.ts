//api/tech-stacks/compare/[stack1Slug]/[stack2Slug]
import { NextResponse } from "next/server";
import { compareTechStacks} from "@/lib/database";

export async function GET(request:Request,
    {params} :{params:{stack1Slug:string,stack2Slug:string}}
) {
    try{
        const {stack1Slug,stack2Slug} = params
        const {searchParams} = new URL(request.url)

        const categorySlug = searchParams.get('category')

            const result = await compareTechStacks(
                stack1Slug,
                stack2Slug,
                categorySlug || undefined
            )

            if(result.error){
                let status =500;
                if(result.error.includes('not found') || result.error.includes("Tech stack not found")){
                    status=404
                }else if(
                    result.error.includes('required') || 
                    result.error.includes('Cannot compare the same') || 
                    result.error.includes('must belong to') || 
                    result.error.includes('must be from the same category') 
                ){
                    status=400
                }
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
    }catch (error){
    console.error('API Error in /api/tech-stacks/compare:', error)
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      data: null
    }, { status: 500 })
    }
}
