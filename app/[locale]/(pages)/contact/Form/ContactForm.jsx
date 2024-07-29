"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
function Form() {
  const t = useTranslations("contact-form");
  const t2 = useTranslations("toast");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.target);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        toast.success(t2("success"));
      } 
    } catch (err) {
      toast.error(t2("error"));
    }
    setIsLoading(false);
    e.target.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className=" relative px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-14 bg-blue/40 opacity-90 hover:opacity-100 shadow-xl rounded-md  "
    >
      {isLoading && (
        <>
          <div className="loader-line top-0"></div>
          <div className="loader-line bottom-0"></div>
        </>
      )}

      <div className="radial-banner hidden lg:block"></div>
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("first-name")}
              <span className="text-redd ml-1 text-lg ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("last-name")}
              <span className="text-redd ml-1 text-lg ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("e-mail")}
              <span className="text-redd ml-1 text-lg ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("phone-number")}
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("company-name")}
              <span className="text-redd ml-1 text-lg ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="company-name"
                id="company-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company-size"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("company-size")}
              <span className="text-redd ml-1 text-lg ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <input
                required
                type="number"
                name="company-size"
                min="1"
                id="company-size"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              {t("message")}
              <span className="text-redd ml-1 text-lg  ">&#x2217; </span>
            </label>
            <div className="mt-2.5">
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className={`${isLoading && ("opacity-40 hover:opacity-40")} rounded-md flex gap-2 opacity-80 hover:opacity-100 border bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white 
            shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            disabled={isLoading}
          >
            {t("send-message-btn")}

            <Image
              src={"/images/Contact/send.svg"}
              alt="number-icon"
              width={18}
              height={18}
            />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
