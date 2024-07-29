"use client";
import { Link } from "../../../../navigation";
import { useLocale } from "next-intl";
import { usePathname } from "../../../../navigation";
import { Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import Flag from 'react-world-flags'
export default function LanguageChanger() {
const locale = useLocale();
const path = usePathname();
  return (
 
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center font-bold bg-gray/30 hover:bg-gray/50 rounded-full  p-2  text-sm uppercase text-white">
          {locale}
          </Menu.Button>
    
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute  bg-navyblue z-10 mt-2 right-0 min-w-max w-28 rounded-md  text-white shadow-lg ring-1 ring-black 
            text-zinc-800
            ring-opacity-5 focus:outline-none">
             
              <Menu.Item>
                <Link locale="en" href={`/${path}`} className="flex items-center gap-2 p-2 w-full hover:bg-red text-sm cursor-pointer" >
                <Flag code="GB" className="h-5 w-5" />
                  EN
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link locale="fr" href={`/${path}`}className="flex items-center gap-2 p-2 w-full hover:bg-red text-sm cursor-pointer">
                <Flag code="FR"  className="h-5 w-5"/>
                  FR
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link locale="de" href={`/${path}`} className="flex items-center gap-2 p-2 w-full hover:bg-red text-sm cursor-pointer">
                <Flag code="DE"  className="h-5 w-5"/>
                  DE
                </Link>
              </Menu.Item>
              
            </Menu.Items>
          </Transition>
        </Menu>
  );
}