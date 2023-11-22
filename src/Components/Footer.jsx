import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";


export default function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaYoutube /> },
    { icon: <FaPinterest /> },
  ];

  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto py-[10rem]">
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
            {/* Logo and Description */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <img
                src="../assets/Images/Newcomers-Logo.png"
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                Welcome to the Newcomer`s Guide, your ultimate resource for
                getting started in a new place. Discover valuable insights and
                information to make your transition smoother.
              </p>
              {/* Social Icons */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => (
                  <div
                    key={index}
                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white transition-all duration-300"
                  >
                    {icon}
                  </div>
                ))}
              </div>
              {/* Copyright and Credits */}
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Newcomer`s Guide
                <br />
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.your-website.com/"
                >
                  Newcomer`s Guide
                  </a>
              </p>
            </div>

            {/* Explore the site */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Explore</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Guides
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Integration Tips
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Language Courses
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Local Services
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Community
              </p>
            </div>

            {/* Join us */}

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Join Us</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              <p className="text-[16px] text-[#646464] font-bold">Sign In</p>
              <p className="text-[16px] text-[#646464] font-medium">
                contact@newcomersguide.com
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Subscribe to our Newsletter</p>
              <p className="text-[16px] text-[#646464] font-medium"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
