import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";
import { classNames, teams } from "../../data/data.js";
import {
  ArchiveBoxIcon,
  Bars4Icon,
  ExclamationTriangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid/index.js";
import { ShoppingCartIcon } from "@heroicons/react/20/solid/index.js";
import { useNavigate } from "react-router-dom";

const SidebarMobile = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "#", icon: Bars4Icon, current: false, id: 1 },
    { name: "User", href: "#", icon: UserIcon, current: false, id: 2 },
    { name: "Item", href: "#", icon: ArchiveBoxIcon, current: false, id: 3 },
    {
      name: "Withdraw",
      href: "#",
      icon: ShoppingCartIcon,
      current: false,
      id: 4,
    },
    {
      name: "Reported",
      href: "#",
      icon: ExclamationTriangleIcon,
      current: false,
      id: 5,
    },
  ]);

  const handleClick = (item) => {
    const updatedNavigation = navigation.map((navItem) =>
      navItem.id === item.id
        ? { ...navItem, current: !navItem.current }
        : { ...navItem, current: false }
    );
    setNavigation(updatedNavigation);
    if (item.name !== "Dashboard") {
      navigate(item.name);
    } else {
      navigate("/");
    }
  };

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-20 w-auto"
                  src="https://i.imgur.com/KpZjtls.png"
                  alt="Your Company"
                />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => handleClick(item)}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 h-6 w-6 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SidebarMobile;
