import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-slate-100 w-full h-full">
      <form
        action="h-full w-full flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-1/2 gap-3">
          <label htmlFor="" className="flex justify-between">
            <span>Email :</span>
            <input
              type="text"
              name="email"
              id=""
              // placeholder="Enter your Name"
              {...register("name", { required: true })}
              className="border border-gray-600 py-1"
            />
          </label>
          <label htmlFor="" className="flex justify-between">
            <span>Password :</span>
            <input
              type="text"
              name="password"
              id=""
              // placeholder="Enter your Password"
              {...register("password", { required: true })}
              className="border border-gray-600 py-1"
            />
          </label>
          <div className="w-full flex justify-center items-center">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 w-1/3 py-1 rounded-sm mt-5 "
            />
          </div>
        </div>
      </form>
    </div>
  );
};
