import { ReactNode } from "react";
import CursorShadow from "../components/CursorShadow/CursorShadow";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import PageIndicator from "../components/PageIndicator/PageIndicator";
import SideIndicator from "../components/SideIndicator/SideIndicator";
import ModalProvider from "./ModalProvider";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Modal />
      <div className="!overflow-hidden">
        <Navbar />
        <div className="">{children}</div>
        <SideIndicator />
        <PageIndicator />
        <CursorShadow />
      </div>
    </ModalProvider>
  );
}
