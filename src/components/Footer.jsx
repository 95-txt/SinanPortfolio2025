import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const links = [
    { href: "https://github.com/95-txt", icon: FaGithub },
    { href: "https://linkedin.com/in/sinanmuhammed95", icon: FaLinkedin },
    {
      href: "https://wa.me/7025938934?text=Hi,%20I'm%20from%20your%20portfolio",
      icon: FaWhatsapp,
    },
    { href: "https://behance.com/sinanmuhammed95", icon: FaBehance },
    {
      href: "https://www.instagram.com/95.eps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: FaInstagram,
    },
  ];
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6 ">
        <div className="max-w-6xl mx-auto px-4 text-center mt-5">
          {/* Contact */}
          <p className="text-lg font-medium">
            <a href="mailto:sinanlw95@gmail.com" className="hover:text-white">
              sinanlw95@gmail.com
            </a>
          </p>

          <div className="flex justify-center space-x-6 my-10">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {<link.icon className="w-8 h-8 md:w-14 md:h-14" />}
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-10 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="about" className="hover:text-white">
              About
            </a>
            <a href="projects" className="hover:text-white">
              Projects
            </a>
            <a href="contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-sm font-sans text-gray-500">
            &#169; {new Date().getFullYear()} MUHAMMED SINAN. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
