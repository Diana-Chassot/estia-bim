"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
const Banner = () => {
  const t = useTranslations("hero");
  const [isOpen, setOpen] = useState(false);
  const locale = useLocale();

  return (
    <div className="bg-image relative " id="home-section">
      <div className="radial-banner hidden lg:block"></div>
      <div className="arrowOne "></div>
      {
        locale === "fr" ? (
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="VGTEcx_tNYU"
            onClose={() => setOpen(false)}
          />
        ):(
           <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="I5hAQQEaY_4"
        onClose={() => setOpen(false)}
      />
        )
      }

      <div className="mx-auto max-w-7xl pt-16 lg:pt-20 sm:pb-24 px-6 relative overflow-hidden ">
        <div className="height-work ">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16 ">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-white md:4px md:text-start text-center">
                {t("title")}
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center max-w-2xl">
                {t("description")}
              </p>
              <div className="sm:flex-nowrap  flex-wrap  flex gap-4 md:gap-6 align-middle justify-center md:justify-start">
                <div className="center bg-red/80 sm:bg-red/10">
                  <Link className="btn flex justify-center items-center " href="/contact">
                    <svg
                      width="180px"
                      height="60px"
                      viewBox="0 0 180 60"
                      className="border"
                    >
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="bg-line"
                      />
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="hl-line"
                      />
                    </svg>
                    <span className="text-sm lg:text-base text-white">{t("contact-btn")}</span>
                  </Link>
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="text-sm md:text-base gap-2 md:gap-4 hover:opacity-100 hover:text-mobile-gradients2 opacity-100 mt-0  sm:opacity-80 text-red font-bold bg-transparent flex justify-center items-center "
                >
                  <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="pulse"
                    width={47}
                    height={47}
                  />
                  {t("how-it-work-video-btn")}
                </button>
              </div>
            </div>

            <div className="col-span-5 lg:-m-6  ">
              <div className="arrowThree lg:block hidden"></div>
              <div className="arrowFour lg:block hidden"></div>
              <div className="arrowFive lg:block hidden"></div>
              <div className=" sm:block hidden  mt-10 lg:mt-0">
                <img
                src="/images/Banner/banner3.png"
                alt="EstiaBim"
                className=" object-cover w-[65%]  lg:w-full"
            />
              </div>
              
              <div className="arrowSix lg:block hidden"></div>
              <div className="arrowSeven lg:block hidden"></div>
              <div className="arrowEight "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
