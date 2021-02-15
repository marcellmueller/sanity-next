import { useState, useEffect } from 'react';
import client from '../client';
import Product from '../components/product/product';
import Nav from '../components/nav/nav.js';
import Login from '../components/login/login.js';
import Search from '../components/search/search.js';

import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

export default function Home(productData) {
  const [state, setState] = useState({
    products: productData[0],
    loginModal: false,
  });
  console.log(productData);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const products = state.products.map((product, i) => {
    console.log(product);
    return (
      <Product
        key={i}
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
      <Search state={state} setState={setState}></Search>

      <div className={styles.productlist}>{products}</div>
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
  return [productData];
};
