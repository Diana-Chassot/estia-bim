import ContactForm from "./Form/ContactForm";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Toast from "../../components/Toast/Toast";
import {baseUrl} from '../../utils/baseUrl';
import {localeDetect} from '../../utils/localeDetect';

export async function generateMetadata({ params }) {    
  const locale = params.locale;
  const url = localeDetect(locale);
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(baseUrl),
    title: t('contact-meta-title'),
    description: t('contact-meta-description'),
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
export default async function Contact({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("contact");
  return (
    <main className="relative isolate text-white ">
      <Toast />
      <div className="mx-auto grid max-w-6xl relative grid-cols-1 lg:grid-cols-2  ">
        <div className="sm:block opacity-90 hover:opacity-100 justify-center items-center md:flex lg:block relative px-6 pt-6 lg:static lg:px-8 lg:py-18   bg-contact-bg  z-10  ">
          <div className="hidden md:block">
            <Image
              src={"/images/Contact/contact.svg"}
              alt="contact-image"
              width={299}
              height={279}
            />
          </div>

          <div className="mx-auto  max-w-xl lg:mx-0 lg:max-w-lg mt-4">
            <div className="mt-4 flex gap-2">
              <Image
                src={"/images/Work/bg-arrow.svg"}
                alt="arrow-bg"
                width={85}
                height={35}
              />
              <h2 className="text-3xl font-bold tracking-tight text-red ">
                {t("title")}
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 max-w-sm ">{t("description")}</p>
            <dl className="mt-10 space-y-4 text-base leading-7 ">
            {/*   <div className="flex md:gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                </dt>
                <dd>
                  <a
                    className=" text-offwhite text-sm font-normal mb-6 flex gap-2 items-center"
                    href={`tel: ${t("tel")}`}
                  >
                    <Image
                      src={"/images/Contact/phone.png"}
                      alt="number-icon"
                      width={25}
                      height={25}
                    />
                    {t("tel")}
                  </a>
                </dd>
              </div> */}
              <div className="flex md:gap-x-4 ">
                <dt className="flex-none">
                  <span className="sr-only">E-mail</span>
                </dt>
                <dd>
                  <a
                    className="hover:opacity-100 opacity-80 text-offwhite text-sm font-normal mb-6 flex gap-2 items-center"
                    href={`mailto: ${t("email")}`}
                  >
                    <Image
                      src={"/images/Contact/email2.png"}
                      alt="email-icon"
                      width={25}
                      height={25}
                    />
                    {t("email")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
