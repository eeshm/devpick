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
        query = query.order('popularity', { ascending: orderDirection === 'asc' })
        break
      case 'name':
        query = query.order('name', { ascending: orderDirection === 'asc' })
        break
      case 'created_at':
        query = query.order('created_at', { ascending: orderDirection === 'asc' })
        break
      default:
        query = query.order('popularity', { ascending: false })
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


//comparison logic 
export async function getTechStacksForComparison(categorySlug:string):Promise<DatabaseResponse<TechStack[]>> {
    try{
      if(!categorySlug || categorySlug.trim()==""){
        return {
          data:null,
          error: 'Category slug is required for comparison'
        }
      }

      const categoryCheck=  await getCategoryBySlug(categorySlug)
      if (categoryCheck.error || !categoryCheck.data) {
      return {
        data: null,
        error: categoryCheck.error || 'Category not found'
        }
      }
      const {data,error}= await supabase
      .from("tech_stacks")
      .select(`
        *,
        categories!inner(
          id,
          name,
          slug
        )
      `)
      .eq("categories.slug",categorySlug.toLowerCase())
         if (error) {
      console.error('Database error fetching stacks for comparison:', error)
      return {
        data: null,
        error: `Failed to fetch tech stacks for comparison: ${error.message}`
      }
    }
    return {
      data: data || [],
      error: null
    }
  } catch (error) {
    console.error('Unexpected error fetching stacks for comparison:', error)
    return {
      data: null,
      error: 'An unexpected error occurred while fetching tech stacks for comparison'
    }
    }
}

export async function compareTechStacks(
  stack1Slug:string,
  stack2Slug:string,
  categorySlug?:string
) :Promise<DatabaseResponse<{stack1:TechStack,stack2:TechStack,category:string}>>{
  try{
    if(!stack1Slug || !stack2Slug){
      return{
        data:null,
        error:"Both tech stack slugs are required for comparison"
      }
    }
    if(stack1Slug == stack2Slug){
      return{
        data:null,
        error:"Cannot compare the same tech stack with itself"
      }
    }
    const[stack1Result,stack2Result]= await Promise.all([
      getTechStackBySlug(stack1Slug),
      getTechStackBySlug(stack2Slug)
    ])
    if(stack1Result.error || !stack1Result.data){
      return{
        data:null,
        error: `First tech stack not found: ${stack1Result.error || 'Unknown error'}`
      }
    }
    if(stack2Result.error || !stack2Result.data){
      return{
        data:null,
        error: `Second tech stack not found: ${stack2Result.error || 'Unknown error'}`
      }
    }

    if(categorySlug){
      const stack1Category = stack1Result.data.category_slug
      const stack2Category = stack2Result.data.category_slug

      if(stack1Category !=categorySlug || stack2Category!=categorySlug){
        return{
          data:null,
          error: 'Both tech stacks must belong to the specified category'
        }
      }
    }else{
      if(stack1Result.data.category_slug != stack2Result.data.category_slug){
        return{
          data:null,
          error: 'Tech stacks must be from the same category to compare'
        }
      }
    }
    const category = stack1Result.data.category_slug!
    return{
      data:{
        stack1:stack1Result.data,
        stack2:stack2Result.data,
        category
      },
      error:null
    }
  }catch (error) {
    console.error('Unexpected error comparing tech stacks:', error)
    return {
      data: null,
      error: 'An unexpected error occurred while comparing tech stacks'
    }
  }
}