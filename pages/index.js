import { useState } from 'react';
import client from '../client';
import Product from '../components/product/product';
import Nav from '../components/nav/nav.js';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';

export default function Home(productData) {
  const [state, setState] = useState({
    products: productData[0],
  });
  console.log(productData);

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
      <Nav></Nav>
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
