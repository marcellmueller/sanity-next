import { useState, useEffect } from 'react';
import client from '../client';
import Product from '../components/product/product';
import Nav from '../components/nav/nav.js';
import Login from '../components/login/login.js';
import ProductInfo from '../components/product/productInfo';
import Search from '../components/search/search.js';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

export default function Home(props) {
  const [state, setState] = useState({
    products: props[0],
    categories: props[1],
    vendors: props[2],
    loginModal: false,
    productModal: false,
    search: false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  const products = state.products.map((product, i) => {
    return (
      <Product
        key={i}
        state={state}
        setState={setState}
        slug={product.slug.current}
        title={product.title}
        blurb={product.blurb.en}
        price={product.defaultProductVariant.price}
        imageUrl={product.defaultProductVariant.images}
      ></Product>
    );
  });
  return (
    <>
      <Nav state={state} setState={setState}></Nav>
      <Login state={state} setState={setState}></Login>
      <ProductInfo state={state} setState={setState}></ProductInfo>
      <Search state={state} setState={setState}></Search>

      <div className="w-7/8 fixed lg:left-20 lg:right-20">{products}</div>
    </>
  );
}

Home.getInitialProps = async function () {
  const productData = await client.fetch(
    `
    *[_type == "product" ]
  `,
    {}
  );
  const categoryData = await client.fetch(
    `
    *[_type == "category" ]
  `,
    {}
  );

  const vendorData = await client.fetch(
    `
    *[_type == "vendor" ]
  `,
    {}
  );
  return [productData, categoryData, vendorData];
};
