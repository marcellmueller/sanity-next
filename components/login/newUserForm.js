import 'tailwindcss/tailwind.css';

export default function NewUserForm(props) {
  const firstNameOnChange = (event) => {
    props.setLogin({
      ...props.login,
      firstName: event.target.value,
    });
  };

  const lastNameOnChange = (event) => {
    props.setLogin({
      ...props.login,
      lastName: event.target.value,
    });
  };
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

  const password2OnChange = (event) => {
    props.setLogin({
      ...props.login,
      password2: event.target.value,
    });
  };

  const newUserOnClick = () => {
    props.setState({
      ...props.state,
      loginModal: false,
    });
  };
  return (
    <>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          value={props.state.firstName}
          onChange={firstNameOnChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          value={props.state.lastName}
          onChange={lastNameOnChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          value={props.state.email}
          onChange={emailOnChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="email"
          type="text"
          value={props.state.password}
          onChange={passwordOnChange}
          placeholder="Email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Re-enterPassword
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          value={props.state.password2}
          onChange={password2OnChange}
          placeholder="******************"
        />

        <p className="text-red text-xs italic">
          {!props.state.password ? 'Enter a password' : null}
          {props.state.password !== props.state.password2
            ? 'Passwords must match'
            : null}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={newUserOnClick}
          className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
      </div>
    </>
  );
}
