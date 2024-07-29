import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
const Simple = async () => {
   
    const t = await getTranslations("pour-Qui-page"); const t2 = await getTranslations("pourQui");
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
    <div className="simple-bg relative">
      <div className="simpleone"></div>
      <div className="simpletwo"></div>
      <div className="simplethree"></div>
      <div className="simplefour"></div>
      <div className="simplefive"></div>
      <div className="mx-auto max-w-5xl py-14 px-6">
        <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">
         {t2('title')}
        </h3>
        <div className=" max-w-2xl mx-auto">
        <div className="flex gap-4 flex-wrap my-4 text-white items-center justify-center text-center ">
                {list.map((item, index) => (
                  <Link href={`/pour-qui/#${item.itemTitle}`}
                    className=" border rounded-full p-2 bg-red/20 text-xs opacity-80 hover:opacity-100"
                    key={index}
                  >
                    <span>
                      <strong className="font-semibold">
                        {item.itemTitle}
                      </strong>
                    </span>
                  </Link>
                ))}
              </div>
              </div>
        <p className="md:text-center text-bluish text-lg font-normal mb-8">
          {t2('description')}
        </p>
        <div className="flex justify-center ">
          <div className="center sm:bg-red  text-white">
                  <Link className="btn flex justify-center items-center" href="/pour-qui">
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
                    <span>{t2("action-button")}</span>
                  </Link>
                </div>
        </div>
      </div>
      <div className="simplesix"></div>
      <div className="simpleseven"></div>
      <div className="simpleeight"></div>
      <div className="simplenine"></div>
      <div className="simpleten"></div>
    </div>
  );
};

export default Simple;
