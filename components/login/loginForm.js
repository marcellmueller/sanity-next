import 'tailwindcss/tailwind.css';

export default function LoginForm(props) {
  const emailOnChange = (event) => {
    props.setLogin({
      ...props.login,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    props.setLogin({
      ...props.login,
      password: event.target.value,
    });
  };

  const signInOnClick = () => {
    props.setState({
      ...props.state,
      loginModal: false,
    });
  };
  return (
    <>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          onChange={emailOnChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          onChange={passwordOnChange}
          placeholder="******************"
        />

        <p className="text-red text-xs italic">
          {!props.login.password ? 'Enter a password' : null}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={signInOnClick}
          className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
