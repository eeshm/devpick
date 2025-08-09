

import { error } from "console";
import { supabase,type Categories,type Tech_stacks } from "./supabase";


export async function getCategoriesFromDatabase() :Promise<Categories[]>{
    try{
        const {data,error}  = await supabase.from("categories").select("*").order("name")
        if(error) throw error;
        return data || [];
    }
    catch(error){
        console.error("Error fetching categories from database",error);
        return [];
    }
}
//Testing queries from database

export async function getTechStacksFromDatabase():Promise<Tech_stacks[]>{
    try{
        const {data,error} = await supabase.from('tech_stacks').select("*").order("name");
            if(error) throw error;
            return data|| [];
    }
    catch(error){
        console.log("Error fetching tech stacks",error)
        return [];
    }
}