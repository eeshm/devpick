import TechStackDetailPage from "@/components/TechStackDetails"
import BackgroundEffect from "@/components/BackgroundEffect"

export default async function TechStackPage({ params }: { params: { techStackSlug: string } }) {
  const { techStackSlug} = await params
  return (
    <div>
      <BackgroundEffect />
      <TechStackDetailPage techStackSlug={techStackSlug} />;
    </div>
  )
}