import PageHeader from "../../components/PageHeader.jsx";
import confirmationNotification from "../../util/confirmationNotification.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { deleteItemUrl, reportsUrl } from "../../api/baseUrl.js";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import ReportedTable from "./components/ReportedTable.jsx";
import { triggerNotification } from "../../util/successNotification.js";

export default function Reported() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery(["report"], async () => {
    const { data } = await axios.get(reportsUrl);
    return data;
  });
  const title = "Reported Items";
  const description =
    "This is the reported items page, please read carefully before proceeding to the next step.";

  const useDeleteMutation = useMutation(
    async (id) => {
      console.log(id);
      await axios.delete(`${deleteItemUrl}/${id}`);
    },
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries(["report"])
          .then((r) => triggerNotification("Item Deleted", "info"));
      },
    }
  );
  const handleDeletePost = async (id) => {
    const deletePostAction = await confirmationNotification(
      "Are you sure you want to delete this post?",
      "Delete Post"
    );
    if (deletePostAction.isConfirmed) {
      useDeleteMutation.mutate(id);
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
