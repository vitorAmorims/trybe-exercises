import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  
  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: "Enter your e-mail",
            maxlength: 30,
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register({ required: "Enter your password" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
