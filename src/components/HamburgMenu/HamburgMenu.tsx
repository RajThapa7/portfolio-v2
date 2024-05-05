import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface IHambugMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: IHambugMenuProps) {
  return (
    <div
      className="flex flex-col gap-y-2 z-50"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    >
      <motion.div
        animate={{
          rotate: isMobileMenuOpen ? 45 : 0,
          y: isMobileMenuOpen ? 23 : 0,
        }}
        className="h-1 bg-gray-300 w-14 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ width: isMobileMenuOpen ? 0 : 40 }}
        className="h-1 bg-gray-300 rounded-full self-end"
      ></motion.div>
      <motion.div
        animate={{
          rotate: isMobileMenuOpen ? 135 : 0,
          y: isMobileMenuOpen ? -2 : 0,
        }}
        className="h-1 bg-gray-300 w-14 rounded-full"
      ></motion.div>
    </div>
  );
}
