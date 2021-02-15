import 'tailwindcss/tailwind.css';
import client from '../../client';
// import sanityClient from '@sanity/client';

export default function SearchForm(props) {
  const get = async (event) => {
    const searchString = event.target.value;
    console.log(searchString);
    const productData = await client.fetch(
      `
      *[_type == "product" && title match "${searchString}*" ]
    `,
      {}
    );
    console.log(productData);
    props.setState({
      ...props.state,
      products: productData,
    });
    return [productData];
  };

  return (
    <div>
      <input
        onChange={get}
        type="text"
        className="ml-4 h-10 w-64 pr-8 pl-5 rounded border z-0 focus:shadow focus:outline-none"
        placeholder="Search anything..."
      />
    </div>
  );
}
