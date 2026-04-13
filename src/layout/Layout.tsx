import Navbar from "../components/Navbar";
import { type ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
};

export default Layout;