import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function ProductInfo(props) {
  const hide = () => {
    console.log('click');
    props.setState({
      ...props.state,
      productModal: false,
    });
  };
  return (
    <>
      {props.state.productModal ? (
        <div className="flex items-center relative select-none">
          <div className="m-10 p-2 fixed left-10 right-10 top-0 w-30 mx-auto bg-white w-1/2  sm:min-w-md md:max-w-sm  rounded shadow-lg z-50">
            <hr />
          </div>
          <div className="w-100 h-100">
            <LoginForm></LoginForm>
          </div>
          <div
            onClick={hide}
            className="w-full h-full fixed block top-0 left-0 bg-black opacity-50 z-auto"
          ></div>
        </div>
      ) : null}
    </>
  );
}
