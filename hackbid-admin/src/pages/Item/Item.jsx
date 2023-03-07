import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getItemsUrl } from "../../api/baseUrl.js";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import { converToRupiah } from "../../util/converToRupiah.js";
import HeaderMain from "../AdminDashboard/layout-components/HeaderMain.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import ItemList from "./components/itemList.jsx";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function ItemPage() {
  const { data, isLoading, error } = useQuery(["items"], async () => {
    const { data } = await axios.get(getItemsUrl);
    return data;
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={"Item"} description={"This is the item page"} />
      {isLoading ? <HackbidLoading /> : <ItemList data={data} />}
    </div>
  );
}
