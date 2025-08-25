import TechStackDetailPage from "@/components/TechStackDetails"

export default async function TechStackPage({ params }: 
  { params: { 
  techStackSlug: string ;
  categorySlug:string } }) {
  const { categorySlug,techStackSlug} = await params
  return (
    <div>
      <TechStackDetailPage techStackSlug={techStackSlug} categorySlug={categorySlug}/>
    </div>
  )
}