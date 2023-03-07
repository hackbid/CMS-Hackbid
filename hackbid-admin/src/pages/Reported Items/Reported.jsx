import PageHeader from "../../components/PageHeader.jsx";
import confirmationNotification from "../../util/confirmationNotification.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { reportsUrl } from "../../api/baseUrl.js";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import ReportedTable from "./components/ReportedTable.jsx";

export default function Reported() {
  const { data, isLoading, isError } = useQuery(["report"], async () => {
    const { data } = await axios.get(reportsUrl);
    return data;
  });
  const title = "Reported Items";
  const description =
    "This is the reported items page, please read carefully before proceeding to the next step.";

  const handleDeletePost = async (id) => {
    const deletePostAction = await confirmationNotification(
      "Are you sure you want to delete this post?",
      "Delete Post"
    );
    if (deletePostAction.isConfirmed) {
      console.log("Deleted");
    } else if (deletePostAction.isDismissed) {
      console.log("Not Deleted");
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={title} description={description} />
      {isLoading ? (
        <HackbidLoading />
      ) : (
        <ReportedTable data={data} handleDeletePost={handleDeletePost} />
      )}
    </div>
  );
}
