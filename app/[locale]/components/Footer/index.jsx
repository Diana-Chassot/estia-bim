import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {socialLinks} from "../../utils/socialLinks"


const footer = async () => {
  const t = await getTranslations("footer");
  const t2 = await getTranslations("contact");
  const t3 = await getTranslations("nav");
  const links = {
    sectionName: t("section-title-for-links"),
    links: [
      { name: t3("home"), href: "/#home-section" },
      { name: t3("features"), href: "/#features-section" },
      { name: t3("openbim"), href: "/open-bim" },
      { name: t3("pourQui"), href: "/pour-qui" },
      { name: t3("contact"), href: "/contact" },
    ],
  };

  return (
    <div className="relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-24 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-4 sm:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6">
            <img
              className="block h-12 w-20px mb-4"
              src={"/images/Logo/logo-full.png"}
              alt="EstiaBim Logo"
            />
            <h3 className="text-lightblue text-sm font-bold leading-9 mb-4 lg:mb-16">
              {t("short-app-description")}
            </h3>
              <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <a href={items.href} key={i} target="_blank">
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </a>
              ))}
            </div>
            <div className="text-white mt-6 relative">
              <div className="text-xs leading-5">
                <span>&copy; 2024 </span>
                <Link href="/" className="hover:underline">
                  <span> EstiaBim</span>
                </Link>
                <span>. All rights reserved.</span>
              </div>

             {/*  <div className="mt-1  text-xs leading-5 ">
                <Link href={`/privacy-policy`} className="hover:text-red">
                  <span> Privacy Policy & Cookies</span>
                </Link>
              </div> */}
              <div className="mt-4 flex gap-1  text-sm text-red font-bold leading-5 ">
                <span> Built by </span>
                <a
                  href={`https://swissweb-development.ch`}
                  className="underline hover:text-white"
                >
                  <span>SwissWeb Development </span>
                </a>
              </div>
            </div>
          </div>
        
          <div className="group relative sm:col-span-2 col-span-6">
            <p className="text-white text-xl font-medium mb-9">
              {links.sectionName}
            </p>

            <ul>
              {links.links.map((link, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={link.href}
                    className="text-offwhite  text-sm font-normal mb-6 space-links"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4">
            <h3 className="text-white font-medium mb-9">
              {t2("contact-us")}
            </h3>
           
            {/* <a
              className="hover:opacity-100 opacity-80 text-offwhite md:text-sm text-xs font-normal mb-6 flex gap-2 items-center"
              href={`tel: ${t2("tel")}`}
            >
              <Image
                src={"/images/Contact/phone.png"}
                alt="number-icon"
                width={25}
                height={25}
              />
              {t2("tel")}
            </a> */}
            <a
              className="hover:opacity-100 opacity-80 text-offwhite md:text-sm text-xs font-normal mb-6 flex gap-2 items-center"
              href={`mailto: ${t2("email")}`}
            >
              <Image
                src={"/images/Contact/email2.png"}
                alt="email-icon"
                width={25}
                height={25}
              />
              {t2("email")}
            </a>
            
            <div className="mt-4">
              <Image
                src={"/images/Work/bg-arrow.svg"}
                alt="arrow-bg"
                width={85}
                height={35}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
