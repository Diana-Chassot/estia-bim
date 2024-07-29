import Image from "next/image";

import { getTranslations } from "next-intl/server";

const Advantages = async () => {
  const t = await getTranslations("advantages");

  const advantagesdata = [
    {
      imgSrc: "/images/Table/centre.png",
      heading: t("adv1-title"),
      subheading: t("adv1-description"),
    },
    {
      imgSrc: "/images/Table/table.png",
      heading: t("adv2-title"),
      subheading: t("adv2-description"),
    },
    {
      imgSrc: "/images/Table/convert.png",
      heading: t("adv3-title"),
      subheading: t("adv3-description"),
    },
    {
      imgSrc: "/images/Table/fast.png",
      heading: t("adv4-title"),
      subheading: t("adv4-description"),
    },
    {
      imgSrc: "/images/Table/web.png",
      heading: t("adv5-title"),
      subheading: t("adv5-description"),
    },
    {
      imgSrc: "/images/Table/license.png",
      heading: t("adv6-title"),
      subheading: t("adv6-description"),
    },
  ];
  return (

    <div className="mx-auto max-w-7xl my-0 md:my-24  pt-6 px-6 relative">
      <div className="radial-bg  hidden lg:block"></div>
      <div className="radial-banner hidden lg:block "></div>

      <div>
        <div>
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <div>
                <h3 className=" text-lg font-semibold mb-4 text-center md:text-start text-white">
                  {t("section-title")}
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-red">
                  {t("title")}
                </h2>
                <p className="mt-4 text-bluish">{t("description")}</p>
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg sm:h-[470px]  ">
                <img
                  src="/images/Advantages/adv.png"
                  alt={t("title")}
                  className="object-contain w-full h-full object-center  "
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {advantagesdata.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-14 w-14  "
                      src={incentive.imgSrc}
                      alt={incentive.heading}
                    />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-lg font-semibold text-red">
                      {incentive.heading}
                    </h3>
                    <p className="mt-2 text-sm text-bluish">
                      {incentive.subheading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Advantages;
