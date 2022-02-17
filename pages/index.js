import CTA from 'components/CTA';
import Featured from 'components/Featured';
import Hero from 'components/Hero';
import Incentive from 'components/Incentive';
import Products from 'components/ProductList';
import { getProductsInCollection } from 'lib/shopify';

export default function Home({ products }) {
  return (
    <>
      <Hero />
      <Incentive />
      <Featured />
      <Products products={products} />
      <CTA />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
  revalidate: 10,
}
