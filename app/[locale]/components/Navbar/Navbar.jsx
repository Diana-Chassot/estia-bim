"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "../../../../navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import { socialLinks } from "../../utils/socialLinks";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = React.useState(false);
  const navigation = [
    { name: t("home"), href: "/#home-section", current: false },
    { name: t("features"), href: "/#features-section", current: false },
    { name: t("openbim"), href: "/open-bim", current: false },
    { name: t("pourQui"), href: "/pour-qui", current: false },
    { name: t("contact"), href: "/contact", current: false },
    { name: t("faq"), href: "/#faq-section", current: false },
  ];
  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              <Link
                href="/"
                className="flex flex-shrink-0 items-center opacity-95 hover:opacity-100"
              >
                <img
                  className="block h-10 w-20px lg:hidden"
                  src={"/images/Logo/logo-full.png"}
                  alt="EstiaBim Logo"
                />
                <img
                  className="hidden h-[74px] ] lg:block"
                  src={"/images/Logo/logo-full.png"}
                  alt="EstiaBim Logo"
                />
              </Link>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks text-white hover:text-offwhite hover-underline",
                        "px-3 py-4 rounded-md text-md font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="gap-4 hidden lg:flex justify-end ">
                {socialLinks.map((items, i) => (
                  <a href={items.href} key={i} target="_blank">
                    <img
                      src={items.imgsrc}
                      alt="social icon"
                      className="footer-icons"
                    />
                  </a>
                ))}
                <LanguageChanger />
              </div>
            </div>

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
