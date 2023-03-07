import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usersUrl } from "../../api/baseUrl.js";
import PageHeader from "../../components/PageHeader.jsx";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import TableUsers from "./components/TableUsers.jsx";

export default function User() {
  const { data, isLoading, error } = useQuery(["users"], () =>
    axios.get(usersUrl).then((res) => res.data)
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader description={"This is the user page"} title={"User"} />
      {isLoading ? <HackbidLoading /> : <TableUsers data={data} />}
    </div>
  );
}
