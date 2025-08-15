import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Category from "./pages/categories";
import Search from "./pages/search";
import "./App.css"


export default function App(){
  return(
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}