import { useState, useEffect } from 'react';
import client from '../../client';

import 'tailwindcss/tailwind.css';

export default function Category(props) {
  const [category, setCategory] = useState('');

  // const categoryOnChange = (event) => {
  //   setCategory(event.target.value);
  // };

  useEffect(() => {
    console.log(category);
  }, [category]);

  const get = async (event) => {
    const category = event.target.value;
    console.log(category);
    const productData = await client.fetch(
      `
      *[ _type == "category" && slug.current == "${category}"]{
        ...,
        "products": *[ _type == "product" && references(^._id) ]
      }      `,
      {}
    );
    console.log(productData);
    props.setState({
      ...props.state,
      products: productData[0].products,
    });
    return [productData];
  };
  return (
    <>
      <select
        className="inline w-26 pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        name="categories"
        onChange={get}
      >
        <option value="category">Category</option>
        {props.state.categories.map((category, i) => {
          return (
            <option key={i} value={category.slug.current}>
              {category.title}
            </option>
          );
        })}
      </select>
    </>
  );
}
