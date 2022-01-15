import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductForm({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="mt-4 lg:mt-0 lg:row-span-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl text-gray-900">{product.price}</p>

      <form className="mt-10">
        {/* Colors */}
        <div>
          <h3 className="text-sm text-gray-900 font-medium">Color</h3>

          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-4"
          >
            <RadioGroup.Label className="sr-only">
              Choose a color
            </RadioGroup.Label>
            <div className="flex items-center space-x-3">
              {product.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedClass,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                    )
                  }
                >
                  <RadioGroup.Label as="p" className="sr-only">
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.class,
                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Sizes */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-900 font-medium">Size</h3>
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Size guide
            </a>
          </div>

          <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className="mt-4"
          >
            <RadioGroup.Label className="sr-only">
              Choose a size
            </RadioGroup.Label>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              {product.sizes.map((size) => (
                <RadioGroup.Option
                  key={size.name}
                  value={size}
                  disabled={!size.inStock}
                  className={({ active }) =>
                    classNames(
                      size.inStock
                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      active ? 'ring-2 ring-indigo-500' : '',
                      'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                      {size.inStock ? (
                        <div
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked
                              ? 'border-indigo-500'
                              : 'border-transparent',
                            'absolute -inset-px rounded-md pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                        >
                          <svg
                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1={0}
                              y1={100}
                              x2={100}
                              y2={0}
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        <button
          type="submit"
          className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to bag
        </button>
      </form>
    </div>
  );
}
