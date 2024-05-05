import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import logo from "../../../public/rajlogo.png";
import HamburgMenu from "../HamburgMenu/HamburgMenu";

interface NavLink {
  id: number;
  title: string;
  link: string;
  icon?: ReactNode;
}

const navLinks: NavLink[] = [
  {
    id: 0,
    title: "Home",
    link: "/",
  },
  {
    id: 1,
    title: "Category",
    link: "/category",
  },
  {
    id: 2,
    title: "Blog",
    link: "https://rajthapablog.netlify.app/",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="hidden xs:flex justify-between items-center py-4 px-8 fixed w-full top-0 left-0 z-[999]">
      <img src={logo} className="md:w-[60px] md:h-[60px] w-10 h-10" />
      <HamburgMenu {...{ isMobileMenuOpen, setIsMobileMenuOpen }} />
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
}

const list = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.4,
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      duration: 0.5,
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const MobileMenu = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center pb-10 pt-32 shadow-md text-gray-200 bg-black bg-opacity-90"
          variants={list}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col gap-y-10 text-center">
            {navLinks.map(({ id, title, link }) => (
              <motion.div
                key={id}
                className="text-2xl lg:text-4xl cursor-pointer"
                variants={item}
              >
                <a
                  href={link}
                  target="_blank"
                  className="hover:text-pink-500 transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {title}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
