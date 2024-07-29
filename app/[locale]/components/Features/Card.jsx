import { useState } from "react";
import PlayBtn from "./PlayBtn";
import Image from "next/image";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ModalVideoContext } from "./VideoContext";
function Card({ items}) {
  /*   const [isOpen, setOpen] = useState(false);
   */
  const [cardOpen, setCardOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { updateState } = useContext(ModalVideoContext);
  return (
    <div
      className="card-b p-6 flex flex-col align-middle relative"

      onClick={() => setCardOpen(!cardOpen)}
    >
      {items.imgSrc === "/images/Banner/playbutton.svg" ? (
        <PlayBtn items={items} onClick={() => updateState(true)} />
      ) : (
        <div className="work-img-bg  rounded-full flex justify-center absolute p-6">
          <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
        </div>
      )}

      <div>
        <Image
          src={"/images/Work/bg-arrow.svg"}
          alt="arrow-bg"
          width={85}
          height={35}
        />
      </div>
      <h3 className="text-2xl  font-semibold text-center mt-8 text-red">
        {items.heading}
      </h3>
      <div onClick={() => setExpanded(!expanded)} role="button">
        {items.subheading && items.subheading.length > 100 ? (
          <div className="flex flex-col md:text-center mt-auto items-center">
            <p className="text-base font-normal text-bluish mt-2 mb-4">
              {expanded
                ? items.subheading
                : items.subheading.slice(0, 320) + "..."}
            </p>
            <div className="mt-auto text-center">
              <ChevronUpIcon
                className={`${
                  expanded ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500  text-sm opacity-80 hover:opacity-100  text-white   block `}
              />
            </div>
          </div>
        ) : (
          <p className="text-base font-normal text-bluish mt-2">
            {items.subheading}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
