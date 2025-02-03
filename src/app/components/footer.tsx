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
            I am a Frontend Developer, I create engaging and responsive web interfaces using HTML, CSS, and JavaScript frameworks, ensuring a seamless and user-friendly experience.
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
              <FaLocationDot className="mr-2 text-xl" /> Model Colony, karachi, Pakistan
            </span>
            <span className="flex items-center">
              <FaPhoneAlt className="mr-2 text-xl" /> +92 1234567890
            </span>
            <span className="flex items-center">
              <IoMdMail className="mr-2 text-xl" /> awanfiza95@gmail.com
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