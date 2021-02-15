import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import styles from '../../styles/Product.module.css';
import 'tailwindcss/tailwind.css';

export default function Product(props) {
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };

  //Format price if it doesn't have decimal place/cents
  let price = props.price;
  if (props.price % 1 === 0) {
    price = props.price + '.00';
  }
  return (
    <div className="inline-block m-2 bg-white rounded shadow hover:shadow-md duration-4 items-center  gap-4 lg:gap-8 h-120 max-h-120 w-44 max-w-10">
      <div className="object-center mx-auto border-b h-40">
        <img
          className="object-center mx-auto border-b h-40"
          src={urlFor(props.imageUrl[0]).width(180).height(180).url()}
        />
      </div>
      <h2 className="h-18uppercase font-bold text-blue-dark border-b text-center h-12">
        {props.title}
      </h2>
      <p className="p-2 h-16uppercase text-blue-dark h-20">{props.blurb}</p>
      <div className="grid grid-cols-2 m-2 align-bottom h-10">
        {' '}
        <h2 className="my-2 select-none uppercase font-bold text-blue-dark text-center">
          ${price}
        </h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
