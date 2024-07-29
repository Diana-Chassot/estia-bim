import { CheckCircleIcon, CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";

import { baseUrl } from "../../utils/baseUrl.js";
import { localeDetect } from "../../utils/localeDetect";
export async function generateMetadata({ params }) {
  const locale = params.locale;
  const url = localeDetect(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(baseUrl),
    title: t("pourqui-meta-title"),
    description: t("pourqui-meta-description"),
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
        'fr': baseUrl
      }
    },
  };
}
async function PourQui() {
  const t = await getTranslations("pour-Qui-page");
  const list = [
    {
      itemTitle: t("list-item-title1"),
      itemDescription: t("list-item-description1"),
    },
    {
      itemTitle: t("list-item-title2"),
      itemDescription: t("list-item-description2"),
    },
    {
      itemTitle: t("list-item-title3"),
      itemDescription: t("list-item-description3"),
    },
    {
      itemTitle: t("list-item-title4"),
      itemDescription: t("list-item-description4"),
    },
    {
      itemTitle: t("list-item-title5"),
      itemDescription: t("list-item-description5"),
    },
    {
      itemTitle: t("list-item-title6"),
      itemDescription: t("list-item-description6"),
    },
  ];
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-0 text-white relative text-justify">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="radial-banner  lg:block hidden"></div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red">
                {t("section-title")}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-start  sm:text-4xl">
                {t("title")}
              </h1>

              <p className="mt-6 text-xl leading-8 text-red text-start">
                {t("description")}
              </p>
              <div className=" flex gap-4 flex-wrap my-4 ">
                {list.map((item, index) => (
                  <Link
                    href={`/pour-qui/#${item.itemTitle}`}
                    className=" border rounded-full p-2 bg-red/20 text-xs opacity-70 hover:opacity-100"
                    key={index}
                  >
                    <span>
                      <strong className="font-semibold text-start">
                        {item.itemTitle}
                      </strong>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sm:-ml-12 -mt-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden ">
          <img
            className="md:w-[48rem] w-full  object-cover h-auto md:max-w-none rounded-xl bg-gray-900 shadow-xl sm:ring-1  sm:bg-green ring-red-400/10 "
            src="/images/PourQui/pour_qui.png"
            alt={t("section-title")}
          />
        </div>
        <main className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>{t("content")}</p>
              <ul role="list" className="mt-8 space-y-8 ">
                {list.map((item, index) => (
                  <li
                    className="flex gap-x-3  text-white/70"
                    key={index}
                    id={item.itemTitle}
                  >
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-red"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-red text-start ">
                        {item.itemTitle}
                        {". "}
                      </strong>
                      {item.itemDescription}
                    </span>
                  </li>
                ))}
              </ul>
              <figure className="mt-10 border-l border-red pl-4">
                <blockquote className="font-semibold text-gray-900 text-red">
                  <p>{t("content2")}</p>
                </blockquote>
              </figure>
              {/*               <p className="mt-8 text-red">{t("content2")}</p>
               */}{" "}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red ">
                {t("summary-title")}
              </h2>
              <p className="mt-6 ">{t("summary-description")}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PourQui;
