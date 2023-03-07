import PageHeader from "../../components/PageHeader.jsx";
import confirmationNotification from "../../util/confirmationNotification.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { reportsUrl } from "../../api/baseUrl.js";

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function Reported() {
  const { data, isLoading, isError } = useQuery(["report"], async () => {
    const { data } = await axios.get("http://localhost:4000/items/report");
    return data;
  });
  const title = "Reported Items";
  const description =
    "This is the reported items page, please read carefully before proceeding to the next step.";

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Reason
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((d) => (
                    <tr key={d.UserId}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {d.username}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {d.itemName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {d.reason}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {d.date}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          className="rounded-md bg-red-700 py-2 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          onClick={() => handleDeletePost(d.id)}
                        >
                          Delete Post
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
