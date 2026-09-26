import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Toaster } from "sonner";

import AuthContextProvider from "./../../contexts/authContext";

const AppLayout = () => {
  return (
    <AuthContextProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { fontFamily: "IRANSansX" },
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
};

export default AppLayout;
