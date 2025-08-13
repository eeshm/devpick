import { supabase,type Category,type Tech_stack ,type DatabaseResponse} from "./supabase";

//getallcategories logic 
export async function getAllCategories() :Promise<DatabaseResponse<Category[]>>{
    try{
        const {data,error}  = await supabase
        .from("categories")
        .select("*")
        .order("name",{ascending:true})

        if(error){
            console.log("Database error fetching categories",error)
            return {
                data:null,
                error:`Failed to getch categories ${error.message}`
            }
        }
        return{
            data:data||[],
            error:null
        }

    }
    catch(error){
        console.error("Unexpected error fetching category: ",error);
        return{
            data: null,
            error:"An unexpected error occured while fetching category"
        }
    }
}

//getcategoriesbyslug
export async function getCategoryBySlug(slug:string) : Promise<DatabaseResponse<Category>>{
    try{
        if(!slug || slug.trim()==""){
            return{
                data:null,
                error:"Category slug is required" 
            }
        }
        const {data,error} = await supabase
        .from('categories')
        .select("*")
        .eq('slug',slug.toLowerCase())
        .single()

        if(error){
            if(error.code=='PGRST116'){
                return{
                    data:null,
                    error:"Category not found"
                }
            }
            console.error("Database error fetching category: ",error)
            return{
                data:null,
                error:`Failed to fetch category: ${error.message}`
            }
        }
        return{
            data:data,
            error:null
        }
    }catch(error){
        console.error("Unexpected error fetching category: ",error)
        return{
            data:null,
            error:"An unexpected error occurred while fetching category"
        }
    }
}

//gettechstacksbycategory
//gettechstackbyslug
