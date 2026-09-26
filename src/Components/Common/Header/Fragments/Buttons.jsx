import React, { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";
import { AuthContext } from "../../../../contexts/authContext";

const Buttons = () => {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <div className="flex-ic text-white! gap-3! *:rounded-md text-sm *:px-4! *:first:p-0! *:flex-center *:py-2 *:duration-150 *:hover:opacity-90">
      <Link
        to="/cart"
        className="relative border border-slate-200 rounded-lg size-10! p-0!"
      >
        <HiShoppingCart className="text-xl text-slate-700!" />
      </Link>
      {isLoading ? (
        <span className="text-sm text-neutral-500">درحال بارگزاری</span>
      ) : user?.phone ? (
        <Link to="/dashboard" className="bg-cyan-600">
          حساب کاربری
        </Link>
      ) : (
        <Link to="/auth" className="bg-cyan-600">
          ورود و ثبت نام
        </Link>
      )}
      <Link to="/contact-us" className="bg-[#FF5F55]">
        تماس با ما
      </Link>
    </div>
  );
};

export default Buttons;
