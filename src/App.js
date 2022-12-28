import logo from "./logo.svg";
import "./App.css";
import { AiFillFacebook } from "react-icons/ai";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./Login";

function App() {
  return (
    <div className="h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route element={<FirstPage />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function FirstPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="bg-indigo-50 h-screen w-full flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
        <h1>Get Free Diamond</h1>
        <div>
          <button
            onClick={() => handleClick()}
            className="border bg-gray-400 px-2 py-1 flex justify-center items-center rounded-md"
          >
            <span className="text-white"> Register Please </span>
            <AiFillFacebook color="blue" className="w-9 h-9 rounded" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
