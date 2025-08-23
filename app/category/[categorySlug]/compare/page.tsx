import { GetServerSideProps } from 'next';
import InteractiveComparePage from '@/components/InteractiveCompareClient';


export default async function ComparePage({ params}: { params: {categorySlug: string} }) {
  const {categorySlug}= await params
  return <InteractiveComparePage categorySlug={categorySlug} />;
}
