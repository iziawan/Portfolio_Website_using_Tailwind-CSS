import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

        <div>
          <h3 className="text-xl font-semibold mb-4">ABOUT ME</h3>
          <p>
            I am a passionate web developer specializing in front-end development.
            I create modern and responsive designs, bringing ideas to life on the web.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
          <div className="space-y-2">
            <span className="flex items-center">
              <FaLocationDot className="mr-2 text-xl" /> 123 Street Name, City, Country
            </span>
            <span className="flex items-center">
              <FaPhoneAlt className="mr-2 text-xl" /> +1 123 456 7890
            </span>
            <span className="flex items-center">
              <IoMdMail className="mr-2 text-xl" /> myemail@example.com
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">FOLLOW ME</h3>
          <div className="flex gap-4 text-2xl cursor-pointer">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;