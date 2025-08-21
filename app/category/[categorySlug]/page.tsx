import TechStacks from "@/components/CategoryTechStacks";
import BackgroundEffect from "@/components/BackgroundEffect";

export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const { categorySlug } = await params
  return (
    <div>
      <BackgroundEffect />
      <TechStacks categorySlug={categorySlug} />;
    </div>
  )
}
