import Image from 'next/image';
import Link from 'next/link';
import { formatter } from 'utils/formatter';

export default function ProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <div className="group relative">
      <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
        <Image
          src={originalSrc}
          alt={altText}
          className="w-full h-full object-center object-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900">
        <Link href={`/products/${handle}`}>
          <a>
            <span className="absolute inset-0" />
            {title}
          </a>
        </Link>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{formatter.format(price)}</p>
    </div>
  );
}
