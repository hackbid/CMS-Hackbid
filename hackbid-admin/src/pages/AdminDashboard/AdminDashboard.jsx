import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";
import AdminSideBar from "./components/AdminSideBar.jsx";

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
];

import {
  navigation,
  classNames,
  projects,
  teams,
  pinnedProjects,
} from "../../data/data.js";
import Home from "../Home/Home.jsx";
import SidebarMobile from "./SidebarMobile.jsx";
import DropDownUser from "../../components/DropDownUser.jsx";
import MobileHeader from "./layout-components/MobileHeader.jsx";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <SidebarMobile
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <AdminSideBar />

        <div className="flex flex-col lg:pl-64">
          <MobileHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Home />
        </div>
      </div>
    </>
  );
}
