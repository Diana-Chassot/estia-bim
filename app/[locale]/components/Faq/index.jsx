"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const t = useTranslations("faq");
  const faqdata = [
    {
      heading: t("faq1-title"),
      subheading: t("faq1-description"),
    },
    {
      heading: t("faq2-title"),
      subheading: t("faq2-description"),
    },
    {
      heading: t("faq3-title"),
      subheading: t("faq3-description"),
    },
    {
      heading: t("faq4-title"),
      subheading: t("faq4-description"),
    },
    {
      heading: t("faq5-title"),
      subheading: t("faq5-description"),
      link: "https://github.com/buildingSMART/IDS/tree/master/Documentation",
    },
    {
      heading: t("faq6-title"),
      subheading: t("faq6-description"),
    },
    {
      heading: t("faq7-title"),
      subheading: t("faq7-description"),
    },
  ];

  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        {t("title")}
      </h3>
      <div className="text-center lg:text-lg font-normal text-bluish">
        <span> {t("description")}</span>
        <Link
          href="/contact"
          className="font-semibold text-red hover:text-white"
        >
          <span> {t("link")} </span>
        </Link>
      </div>
      <div className="mt-4 flex items-center justify-center lg:hidden ">
        <Image
          src={"/images/Faq/faq2.svg"}
          alt="faq-image"
          width={332}
          height={379}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-3 px-3 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-xl font-medium">
                          <span>{items.heading}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-md text-bluish font-normal opacity-50">
                         
                          {items.subheading}
                          {items.link && (
                            <a
                              className="font-semibold   text-mobile-gradients2 underline hover:text-white"
                              href={items.link}
                              target="_blank"
                            >
                              <span> {t("faq5-link")} <ArrowUpRightIcon className="w-4 h-4 inline-block"/></span>
                              
                            </a>
                          )}
                          
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div className="mt-32 lg:block hidden">
            <Image
              src={"/images/Faq/faq2.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
