import { GetServerSideProps } from 'next';
import InteractiveComparePage from '@/components/InteractiveCompareClient';


export default function ComparePage({ params}: { params: {categorySlug: string} }) {
  const {categorySlug}= params
  return <InteractiveComparePage categorySlug={categorySlug} />;
}
