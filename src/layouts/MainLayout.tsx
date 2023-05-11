import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import SideIndicator from "../components/SideIndicator/SideIndicator";
import PageIndicator from "../components/PageIndicator/PageIndicator";
import CursorShadow from "../components/CursorShadow/CursorShadow";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-24">
      <Navbar />
      {children}
      <SideIndicator />
      <PageIndicator />
      <CursorShadow />
    </div>
  );
}
