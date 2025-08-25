//categories/[slug]/route.ts
import { NextResponse } from "next/server";
import { getCategoryBySlug } from "@/lib/database";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const { slug } = await params
        const result = await getCategoryBySlug(slug);
        if (result.error) {
            return NextResponse.json({
                success: false,
                error: result.error,
                data: null
            }, { status: 404 })
        }
        return NextResponse.json({
            success: true,
            error: null,
            data: result.data,
        }, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
            },
        });
    } catch (error) {
        console.error("API Error in api/categories/[slug]: ", error)
        return NextResponse.json({
            success: false,
            error: "Internal server error",
            data: null
        }, { status: 500 })
    }
}