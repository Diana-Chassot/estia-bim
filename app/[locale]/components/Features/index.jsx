"use client";
import { useTranslations } from "next-intl";
import ModalVideoReact from "./ModalVideoReact"
import Card from "./Card"

import { ModalProvider} from "./VideoContext";
const Features = () => {
  const t = useTranslations("features");

  const featuresData = [
    {
      imgSrc: "/images/Work/icon-one.svg",
      heading: t("f1-title"),
      subheading: t("f1-description")
    },
    {
      imgSrc: "/images/Banner/playbutton.svg",
      heading: t("f2-title"),
      subheading: t("f2-description")
    },
    {
      imgSrc: "/images/Work/icon-one.svg",
      heading: t("f3-title"),
      subheading: t("f3-description")
    },
    {
      imgSrc: "/images/Banner/playbutton.svg",
      heading: t("f4-title"),
      subheading: t("f4-description")
    },
    {
      imgSrc: "/images/Work/icon-one.svg",
      heading: t("f5-title"),
      subheading: t("f5-description")
    },
    {
      imgSrc: "/images/Work/icon-one.svg",
      heading: t("f6-title"),
      subheading: t("f6-description")
    },
  ];

  return (
    <ModalProvider>

    <div
      className=" mx-auto max-w-7xl mt-24 px-6 mb-20 relative "
      id="features-section"
    >
      <ModalVideoReact/>
   
    
      <div className="radial-bgone hidden lg:block"></div>
      <div className="text-center mb-14">
        <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
          {t("title")}
        </h3>
        <p className="text-bluish md:text-lg font-normal leading-8">
          {t("description")}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32 ">
        {featuresData.map((items, i) => (
         <Card key={i} items={items} />
        ))}
      </div>
    </div>
    </ModalProvider>

  );
};

export default Features;
