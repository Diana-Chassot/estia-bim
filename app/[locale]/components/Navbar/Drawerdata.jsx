import React from "react";
import { Link } from "../../../../navigation";
import { useTranslations } from "next-intl";
import { socialLinks } from "../../utils/socialLinks";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Data() {
  const t = useTranslations("nav");
  const navigation = [
    { name: t("home"), href: "/#home-section", current: false },
    { name: t("features"), href: "/#features-section", current: false },
    { name: t("pourQui"), href: "/pour-qui", current: false },
    { name: t("openbim"), href: "/open-bim", current: false },
    { name: t("contact"), href: "/contact", current: false },
    { name: t("faq"), href: "/#faq-section", current: false },
  ];
  
  return (
    <div className="rounded-md max-w-sm w-full">



      <div className="flex-1 space-y-4 py-1">

        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-white hover:bg-gray-700 hover:text-red",
                  'block  py-2 rounded-md text-base font-medium text-white "'
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <div className="gap-4 flex justify-end ">
              {socialLinks.map((items, i) => (
                <a href={items.href} key={i} target="_blank">
                  <img
                    src={items.imgsrc}
                    alt="social icon"
                    className="footer-icons"
                  />
                </a>
              ))}
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
