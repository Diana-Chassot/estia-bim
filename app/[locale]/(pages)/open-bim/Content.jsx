import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
async function Content() {
  const t = await getTranslations("open-bim");
  return (
    <div className=" px-6 py-12 lg:px-4 text-white">
      <div className="mx-auto max-w-5xl text-base leading-7 ">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {t("section-title")}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight  sm:text-5xl text-red">
          {t("title")}
        </h1>

        <p className="mt-6 text-xl leading-8">{t("description")}</p>
        <div className="mt-10 max-w-4xl text-justify text-white/80">
          <p>{t("content1")}</p>
          <ul role="list" className="mt-8 max-w-2xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <Image
                className="w-10 h-10"
                src="/images/Logo/ifc.png"
                width={120}
                height={120}
                alt={t("list-title1")}
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  {t("list-title1")}
                </strong>{" "}
                {t("list-description1")}
              </span>
            </li>
            <li className="flex gap-x-3">
              <Image
                className="w-10 h-10"
                src="/images/Logo/bcf.png"
                width={120}
                height={120}
                alt={t("list-title2")}
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  {t("list-title2")}
                </strong>{" "}
                {t("list-description2")}
              </span>
            </li>
            <li className="flex gap-x-3">
              <Image
                className="w-10 h-10"
                src="/images/Logo/idc.png"
                width={120}
                height={120}
                alt={t("list-title3")}
              />
              <span>
                <strong className="font-semibold text-цпш">
                  {t("list-title3")}
                </strong>{" "}
                {t("list-description3")}
              </span>
            </li>
          </ul>
          <p className="mt-8">{t("content2")}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-red">
            {t("paragraph-title1")}
          </h2>
          <p className="mt-6">{t("paragraph-description1")}</p>
        </div>
        <figure className="mt-16">
          <Image
            className="aspect-video shadow-xl sm:ring-1 ring-red-400/10 rounded-xl bg-gray-50 object-cover w-[700px] "
            src="/images/Bim/bim-str.png"
            width={700}
            height={400}
            alt={t("image-description")}
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {t("image-description")}
          </figcaption>
        </figure>
        <div className="mt-16 max-w-4xl  text-justify">
          <h2 className="text-2xl font-bold tracking-tight text-red">
            {t("paragraph-title2")}
          </h2>
          <p className="mt-6 text-white/80">{t("paragraph-description2")}</p>
        </div>
        <div className="mt-16 max-w-4xl text-justify ">
          <h2 className="text-2xl font-bold tracking-tight text-red">
            {t("paragraph-title3")}
          </h2>
          <p className="mt-6 text-white/80">{t("paragraph-description3")}</p>
        </div>
        <div className="mt-16 max-w-4xl text-justify ">
          <h2 className="text-2xl font-bold tracking-tight text-red">
            {t("paragraph-title4")}
          </h2>
          <p className="mt-6 text-white/80">{t("paragraph-description4")}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
