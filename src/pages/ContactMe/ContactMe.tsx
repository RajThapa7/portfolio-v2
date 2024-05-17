import { BsGithub, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import Button from "../../components/Button";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import useEnhanceText from "../../hooks/useEnhanceText";

const data = [
  {
    id: 0,
    icon: <CgFacebook />,
    link: "https://www.facebook.com/raj.thappa.3",
    hover: "hover:bg-blue-600",
  },

  {
    id: 1,
    icon: <BsTwitter />,
    link: "https://twitter.com/rajthapa_7",
    hover: "hover:bg-sky-500",
  },

  {
    id: 2,
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/rajthapa7/",
    hover: "hover:bg-blue-800",
  },
  {
    id: 3,
    icon: <BsGithub />,
    link: "https://www.github.com/rajthapa7/",
    hover: "hover:bg-black",
  },
];

const ContactMe = () => {
  useEnhanceText("contact");

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   const formData = new FormData(myForm);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData as any).toString(),
  //   })
  //     .then(() => alert("Thank you for your submission"))
  //     .catch((error) => alert(error));
  // };

  return (
    <div className="flex h-full w-full pt-8 xs:pt-0 xs:justify-center flex-col lg:gap-20 gap-6">
      <div className="flex flex-row justify-center items-center lg:self-start gap-2">
        <div className="hidden lg:flex from-pink-500 bg-gradient-to-tr to-purple-500 w-32 h-2"></div>
        <p
          className="text-white text-3xl md:text-4xl xl:text-5xl font-semibold uppercase fancy"
          id="contact"
        >
          Contact&nbsp;Me
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-8 xl:px-32 gap-8 md:gap-12 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="bg-pink-500 rounded-full p-2">
                <IoMdMail className="text-xl" />
              </div>
              <p className="text-lg">connect@rajthapa7.com.np</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <div className="bg-pink-500 rounded-full p-2">
                <IoLocationSharp className="text-xl" />
              </div>
              <p className="text-lg">Chunikhel, Kathmandu, Nepal</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <div className="bg-pink-500 rounded-full p-2">
                <FaPhoneAlt className="text-xl" />
              </div>
              <p className="text-lg">+977 9848741130</p>
            </div>
          </div>
          <SocialLinks data={data} />
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-5"
          name="contact"
          method="POST"
          data-netlify="true"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-row gap-5">
            {/* for netlify form handling for jsx form we need this  */}
            <input type="hidden" name="contact" value="contact" />

            <input
              type="text"
              name="firstName"
              id="firstName"
              className=" z-1 w-full rounded-[10px] border-none bg-gray-100 px-4 py-3 md:py-4 outline-none focus:ring-2 ring-pink-500 text-gray-700"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              className=" z-1 w-full rounded-[10px] border-none bg-gray-100 px-4 py-3 md:py-4 outline-none focus:ring-2 ring-pink-500 text-gray-700"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className=" z-1 w-full rounded-[10px] border-none bg-gray-100 px-4 py-3 md:py-4 outline-none focus:ring-2 ring-pink-500 text-gray-700"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            className=" resize-none z-1 w-full rounded-[10px] border-none bg-gray-100 px-4 py-3 md:py-4 outline-none focus:ring-2 ring-pink-500 text-gray-700"
            placeholder="leave a message"
            required
          />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
