import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/girl.jpg";

export default function Hero() {
  return (
    <main
      className="w-full h-screen relative bg-cover bg-center flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32"
      style={{ backgroundImage: "url(/personal.png)" }}
    >
      {/* Heading Section */}
      <div className="mt-12">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
          I m Shifa
        </h1>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mt-2 md:mt-4">
          I m a Developer
        </h2>
      </div>

      {/* Intro Paragraph */}
      <p className="mt-6 text-black text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 text-justify">
        Hi  I m Shifa  a passionate web developer from Karachi Pakistan. Currently I m focused on honing my skills to become a successful full-stack developer. Creativity drives me  and I enjoy building unique projects especially in the e-commerce space. My goal is to push the boundaries of what I can create while delivering high-quality, innovative solutions.
      </p>

      {/* Buttons Section */}
      <div className="flex gap-4 mt-8">
        <Link href="/portfolio">
          <button className="bg-pink-300 hover:bg-pink-400 text-black font-medium text-base sm:text-lg rounded-lg w-32 h-10 sm:w-36 sm:h-12 lg:w-40 lg:h-12 transition duration-200 shadow-md">
            Portfolio
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-pink-300 hover:bg-pink-400 text-black font-medium text-base sm:text-lg rounded-lg w-32 h-10 sm:w-36 sm:h-12 lg:w-40 lg:h-12 transition duration-200 shadow-md">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Profile Image */}
      <div className="absolute top-8 right-8 lg:right-32 lg:top-16">
        <Image
          src={profile}
          alt="Developer"
          width={400}
          height={400} // Ensure the height is set proportionally
          className="rounded-full shadow-lg w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
        />
      </div>
    </main>
  );
}
