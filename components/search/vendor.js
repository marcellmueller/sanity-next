import { useState } from 'react';
import client from '../../client';

import 'tailwindcss/tailwind.css';

export default function Vendor(props) {
  const get = async (event) => {
    const vendor = event.target.value;
    const productData = await client.fetch(
      `
      *[ _type == "vendor" && slug.current == "${vendor}"]{
        ...,
        "products": *[ _type == "product" && references(^._id) ]
      }      `,
      {}
    );

    props.setState({
      ...props.state,
      products: productData[0].products,
    });
    return [productData];
  };
  return (
    <>
      <select
        className="inline mr-6 w-26 pl-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        name="vendors"
        onChange={get}
      >
        <option value="vendor">Vendor</option>
        {props.state.vendors.map((vendor, i) => {
          return (
            <option key={i} value={vendor.slug.current}>
              {vendor.title}
            </option>
          );
        })}
      </select>
    </>
  );
}
