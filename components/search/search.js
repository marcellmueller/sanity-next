import 'tailwindcss/tailwind.css';
import SearchForm from './searchForm';

export default function Search(props) {
  return (
    <nav className=" flex items-center justify-between flex-wrap bg-white py-4 px-12 shadow border-solid border-t-2 max-h-100">
      <SearchForm state={props.state} setState={props.setState}></SearchForm>
    </nav>
  );
}
