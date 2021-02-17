import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import client from '../../client';

export default function Price(props) {
  const [range, setRange] = useState({
    value: [0, 50],
  });

  useEffect(() => {
    console.log(range);
  }, [range]);

  const get = async (event) => {
    const lower = range.value[0];
    const higher = range.value[1];
    console.log(lower, higher);
    const productData = await client.fetch(
      `
      *[ _type == "product" && defaultProductVariant.price > ${lower} && defaultProductVariant.price < ${higher}]
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
    <div className="flex flex-row ">
      <h1 className="w-10">${range.value[0]}</h1>
      <Range
        className="w-40"
        max={50}
        min={0}
        defaultValue={[0, 50]}
        allowCross={false}
        overlay={`sdjakda %`}
        formatLabel={(value) => `$${value}`}
        // value={range.value}
        onChange={(value) => setRange({ value: value })}
        onAfterChange={get}
      />
      <h1 className="w-10 ">${range.value[1]}</h1>
    </div>
  );
}
