// zink-portfolio/app/components/Sidebar.tsx

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-neutral-900 text-center p-20 hidden md:block rounded-2xl shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src="/icons/avatar.png"
          alt="Avatar"
          className="w-34 h-34 rounded-full border-2 border-white mb-4"
        />
        <h2 className="text-lg font-semibold mt-5">Yogananda K S</h2>
        <p className="text-sm text-gray-400 mt-3">Full Stack Developer</p>
        <div className="mt-16 space-y-6 text-left text-m">
          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-300 text-lg" />
            <a
              href="mailto:yogananda.1si22is405@gmail.org"
              className="text-gray-300 hover:text-white text-sm"
            >
              yogananda.1si22is....
            </a>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-300 text-lg" />
            <a
              href="tel:+9196861*****"
              className="text-gray-300 hover:text-white text-sm"
            >
              +91 96861*****
            </a>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-300 text-lg" />
            <span className="text-gray-300 text-sm">Karnataka, India</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-14">
          <a
            href="https://github.com/Yogi2084"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yogananda-ks-185579353/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-white text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
