import { supabase,type Category,type TechStack ,type DatabaseResponse} from "./supabase";

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
//get techstack by category
export async function getTechStacksByCategory(
  categorySlug: string,
  options: {
    limit?: number
    offset?: number
    orderBy?: 'popularity' | 'name' | 'created_at'
    orderDirection?: 'asc' | 'desc'
  } = {}
): Promise<DatabaseResponse<TechStack[]> & { count: number }> {
  try {
    if (!categorySlug || categorySlug.trim() === '') {
      return {
        data: null,
        error: 'Category slug is required',
        count: 0
      }
    }

    const {
      limit = 50,
      offset = 0,
      orderBy = 'popularity',
      orderDirection = 'desc'
    } = options

    // First, verify category exists
    const categoryCheck = await getCategoryBySlug(categorySlug)
    if (categoryCheck.error || !categoryCheck.data) {
      return {
        data: null,
        error: categoryCheck.error || 'Category not found',
        count: 0
      }
    }

    //query
    let query = supabase
      .from('tech_stacks')
      .select(`
        *,
        categories!inner(
          id,
          name,
          slug,
          description
        )
      `, { count: 'exact' })
      .eq('categories.slug', categorySlug.toLowerCase())
      .range(offset, offset + limit - 1)

    // Apply ordering
    switch (orderBy) {
      case 'popularity':
        query = query.order('popularity_score', { ascending: orderDirection === 'asc' })
        break
      case 'name':
        query = query.order('name', { ascending: orderDirection === 'asc' })
        break
      case 'created_at':
        query = query.order('created_at', { ascending: orderDirection === 'asc' })
        break
      default:
        query = query.order('popularity_score', { ascending: false })
    }
    const {data,error,count}= await query
    if(error){
        return{
            data:null,
            error:`failed to fetch tech stacks: ${error?.message}`,
            count:0
        }
    }
    return{
        data:data || [],
        error:null,
        count:count || 0
    }
  }
  catch(error){
    console.error("Unexpected error fetching tech stacks: ",error)
    return{
        data:null,
        error:"An unexpected error occurred while fetching tech stacks",
        count:0
    }
  }
}
//gettechstackbyslug
export async function getTechStackBySlug(slug:string):Promise<DatabaseResponse<TechStack>>{
    
    try{
        if(!slug || slug.trim()==""){
        return{
            data:null,
            error:"Tech stack slug is required"
        }
    }
    const {data,error} = await supabase
    .from("tech_stacks")
    .select(`
        *,
        categories(
        id,
        name,
        slug,
        description
        )`
    )
    .eq("slug",slug.toLowerCase())
    .single()

    if(error){
        if(error.code=="PGRST116"){
            return{
                data:null,
                error:"Tech stack not found"
            }
        }
        console.error("Database error fetching tech : ",error)
        return{
            data:null,
            error:`Failed to fetch stack stack ${error.message}`
        }
    }
    return{
        data:data,
        error:null
    }
    }catch(error){
        console.error('Unexpected error fetching tech stack:', error)
        return{
            data:null,
            error:"An unexpected error occurred while fetching tech stacks"
        }
    }
}
