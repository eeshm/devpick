import { NextRequest,NextResponse } from "next/server";
import { getTechStacksFromDatabase } from "@/lib/database";
export async function GET(){
    try{
        const techStacks = getTechStacksFromDatabase();
        return NextResponse.json(
            {
                tech_stack:(await techStacks).map(t=>t)
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
        console.log("Error fetching tech stacks from database",error)
        return NextResponse.json({error:"Error fetching tech stacks from database"},{status:500})
    }
}