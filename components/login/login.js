import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import LoginForm from './loginForm';
import NewUserForm from './newUserForm';

export default function Login(props) {
  const [login, setLogin] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    login: true,
    newUser: false,
    bgActive: 'darkgrey',
    bgInactive: 'lightgrey',
  });

  // useEffect(() => {
  //   console.log(login);
  // }, [login]);

  const loginClick = () => {
    setLogin({
      ...login,
      login: true,
      newUser: false,
      bgActive: 'darkgrey',
      bgInactive: 'lightgrey',
    });
  };

  const newUserClick = () => {
    setLogin({
      ...login,
      login: false,
      newUser: true,
      bgActive: 'lightgrey',
      bgInactive: 'darkgrey',
    });
  };

  const hide = () => {
    console.log('click');
    props.setState({
      ...props.state,
      loginModal: false,
    });
  };
  return (
    <>
      {props.state.loginModal ? (
        <div className="flex items-center relative select-none">
          <div className="m-10 p-2 fixed left-10 right-10 top-0 w-30 mx-auto bg-white w-1/2  sm:min-w-md md:max-w-sm  rounded shadow-lg z-50">
            <div className="h-8">
              <div
                onClick={loginClick}
                className="inline p-2 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded"
                style={{ backgroundColor: login.bgActive }}
              >
                Login
              </div>{' '}
              <div
                onClick={newUserClick}
                className="inline p-2  text-white hover:bg-black font-bold py-2 px-4 rounded"
                style={{ backgroundColor: login.bgInactive }}
              >
                New User
              </div>
            </div>
            <hr />
            {login.login ? (
              <LoginForm
                state={props.state}
                setState={props.setState}
                login={login}
                setLogin={setLogin}
              ></LoginForm>
            ) : null}
            {login.newUser ? (
              <NewUserForm
                state={props.state}
                setState={props.setState}
                login={login}
                setLogin={setLogin}
              ></NewUserForm>
            ) : null}
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
