import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoDiamondOutline } from "react-icons/io5";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import config from "./config";
export const Login = () => {
  const [user, setUser] = useState();
  const [dataBase, setDataBase] = useState();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    let name;
   name= data.email.split("@")[0]
   console.log("name",name);
    firebase.database().ref(name).set(data);
    console.log("data saved");
  };

  useEffect(() => {
    firebase.initializeApp(config);
    setDataBase(firebase.database());
  }, []);

  return (
    <div className="bg-slate-100 w-full h-full flex justify-center items-center">
      <form
        action="h-full w-full flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full sm:w-1/2 gap-3">
          <label htmlFor="" className="flex justify-between">
            <span>Email :</span>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="border border-gray-600 py-1 indent-4"
            />
          </label>
          <label htmlFor="" className="flex justify-between mt-3">
            <span>Password :</span>
            <input
              type="text"
              name="password"
              id=""
              placeholder="Enter your Password"
              {...register("password", { required: true })}
              className="border border-gray-600 py-1 indent-4"
            />
          </label>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 w-1/3 py-1 rounded-sm mt-5 "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
