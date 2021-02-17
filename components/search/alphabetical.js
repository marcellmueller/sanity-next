import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import client from '../../client';

export default function Alphabetical(props) {
  const [alphabetical, setAlphabetical] = useState({
    sortDown: true,
    text: <>2</>,
  });

  const sortAlphabetical = async (event) => {
    const sort = event.target.value;
    const products = props.state.products;
    if (sort === 'descending') {
      products.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      props.setState({
        ...props.state,
        products: products,
      });
    }

    if (sort === 'ascending') {
      products.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
      props.setState({
        ...props.state,
        products: products,
      });
    }
  };

  return (
    <select
      className="inline mr-6 w-26 pl-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      onChange={sortAlphabetical}
      // className="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <option value="descending">Sort Title Descending &#9660;</option>
      <option value="ascending">Sort Title Ascending &#9650;</option>
    </select>
  );
}
