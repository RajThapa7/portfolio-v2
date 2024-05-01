import { ReactNode } from "react";
import CursorShadow from "../components/CursorShadow/CursorShadow";
import Navbar from "../components/Navbar/Navbar";
import PageIndicator from "../components/PageIndicator/PageIndicator";
import SideIndicator from "../components/SideIndicator/SideIndicator";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <div className="">{children}</div>
      <SideIndicator />
      <PageIndicator />
      <CursorShadow />
    </div>
  );
}
