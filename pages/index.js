import client from '../client';
import Product from '../components/product/product';
import Nav from '../components/nav/nav.js';
import styles from '../styles/Home.module.css';

export default function Home(productData) {
  console.log(productData);

  const products = productData[0].map((product, i) => {
    return (
      <Product
        key={i}
        id={product.id}
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

Home.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const productData = await client.fetch(
    `
    *[_type == "product" ]
  `,
    {}
  );
  return [productData];
};
