import TechStacks from "@/components/CategoryTechStacks";

export default async function CategoryPage({ params }: { params: { categorySlug: string }}) {
  const { categorySlug } = await params
  return (
    <div>
      <TechStacks categorySlug={categorySlug} />
    </div>
  )
}
