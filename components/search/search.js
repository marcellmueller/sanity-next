import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import SearchForm from './searchForm';
import Category from './category';
import Vendor from './vendor';
import Price from './price';
export default function Search(props) {
  return (
    <nav className=" flex items-center justify-between flex-wrap bg-white py-4 px-12 shadow border-solid border-t-2 max-h-100">
      <SearchForm state={props.state} setState={props.setState}></SearchForm>
      <div className="w-40 ">
        <Price state={props.state} setState={props.setState}></Price>
      </div>
      <div className="inline">
        <Vendor state={props.state} setState={props.setState}></Vendor>
        <Category state={props.state} setState={props.setState}></Category>
      </div>
    </nav>
  );
}
