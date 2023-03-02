import Input from "../../../components/Input.jsx";
import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(loginData);
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <form className="space-y-6" action="hackbid-admin/src/pages#" method="POST">
      <Input
        state="email"
        label="Email Address"
        handleChange={handleOnChange}
        type="email"
      />
      <Input
        state="password"
        label="Password"
        handleChange={handleOnChange}
        type="password"
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
          {loginData.email}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
