import 'tailwindcss/tailwind.css';

export default function Menu(props) {
  return (
    <div className={props.class}>
      <div className="text-md font-bold text-blue-700 lg:flex-grow">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Menu 1
        </a>
        <a
          href="#responsive-header"
          className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Menu 2
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Menu 3
        </a>
      </div>

      <div className="flex ">
        <button
          onClick={props.searchClick}
          className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 inline"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Search
        </button>

        <a
          onClick={props.loginClick}
          href="#"
          className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
        >
          login
        </a>

        <a
          href="#"
          className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
        >
          Cart
        </a>
      </div>
    </div>
  );
}
