import { useState } from 'react';
import styles from '../../styles/Nav.module.css';
import 'tailwindcss/tailwind.css';
import Menu from './menu';
export default function Nav(props) {
  const [state, setState] = useState({
    showMenu: false,
  });
  const hideNav = () => {
    if (state.showMenu === false) {
      setState({
        ...state,
        showMenu: true,
      });
    }
    if (state.showMenu === true) {
      setState({
        ...state,
        showMenu: false,
      });
    }
  };

  const loginClick = () => {
    if (props.state.loginModal) {
      props.setState({
        ...props.state,
        loginModal: false,
      });
    }
    if (!props.state.loginModal) {
      props.setState({
        ...props.state,
        loginModal: true,
      });
    }
  };

  const searchClick = () => {
    if (props.state.search) {
      props.setState({
        ...props.state,
        search: false,
      });
    }
    if (!props.state.search) {
      props.setState({
        ...props.state,
        search: true,
      });
    }
  };
  const largeMenu =
    'menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 sm:hidden';

  const smallMenu =
    'menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 lg:hidden';
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="select-none font-semibold text-xl tracking-tight">
            StoreSite
          </span>
        </div>
        <div className="block lg:hidden ">
          <button
            onClick={hideNav}
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <Menu
        searchClick={searchClick}
        hideNav={hideNav}
        loginClick={loginClick}
        class={largeMenu}
      ></Menu>

      {state.showMenu ? (
        <Menu
          searchClick={searchClick}
          hideNav={hideNav}
          loginClick={loginClick}
          class={smallMenu}
        ></Menu>
      ) : null}
    </nav>
  );
}
