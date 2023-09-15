import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
  return (
    <div className="p-5 bg-red-500 text-blue-50 text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Select food of choice</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            food cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
