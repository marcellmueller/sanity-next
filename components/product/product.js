import client from '../../client';

import imageUrlBuilder from '@sanity/image-url';
import styles from '../../styles/Product.module.css';

export default function Product(props) {
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };

  let price = props.price;
  if (props.price % 1 === 0) {
    price = props.price + '.00';
  }
  return (
    <div className={styles.product}>
      <h2>{props.title}</h2>
      <p>{props.blurb}</p>
      <p>${price}</p>
      <img src={urlFor(props.imageUrl[0]).width(200).height(200).url()} />
    </div>
  );
}
