import { NextResponse,NextRequest } from "next/server";
import { getCategoriesFromDatabase } from "@/lib/database";
export async function get(){
    try {
        const categories = await getCategoriesFromDatabase();
        return NextResponse.json(
            {
                categories:categories.map((c)=>c)
            },
            {
                status:200,
                headers:{
                    "Cache-Control":"public"
                }
            }
        )
    }
    catch(error){
        console.log("Error fetching categories",error);
        return NextResponse.json({error:"Failed to load categories from database"} , {status : 500})
    }
}