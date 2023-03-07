import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { categoriesUrl } from "../../api/baseUrl.js";
import ItemList from "./components/itemList.jsx";
import HackbidLoading from "../../components/HackbidLoading.jsx";

export default function ItemPage() {
  const { data, isLoading, error } = useQuery(["items"], () =>
    axios.get(categoriesUrl).then((res) => res.data)
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        {isLoading ? <HackbidLoading /> : <ItemList data={data} />}
      </div>
    </>
  );
}
