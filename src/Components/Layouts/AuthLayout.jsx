import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen bg-[#ededed] flex-center px-6">
      <div className="w-full md:w-80 px-4 py-5 bg-[#fefefe] rounded-xl shadow-md/5">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
