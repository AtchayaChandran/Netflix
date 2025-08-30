import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Success from "./components/Success";
import Fail from "./components/Fail";
import Watch from "./components/Watch";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/Watch" element={<Watch/>}/>
      </Routes>
    </BrowserRouter>
  );
}
