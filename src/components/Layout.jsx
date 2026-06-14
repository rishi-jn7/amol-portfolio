import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { categories } from "../data/data";

export default function Layout() {
  return (
    <div className="d-flex flex-column overflow-hidden">
      <Navbar categories={categories} />
      <Outlet />
    </div>
  );
}