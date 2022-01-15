import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './ProductCard';

export default function Products({ products }) {
  return (
    <section aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="products-heading"
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Our Products
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
