import confirmationNotification from "../../../util/confirmationNotification.js";

const people = [
  {
    id: 1,
    name: "Gagang Garpu",
    title: "Gagange elek mas e",
    email: "mitrasurya@gmail.com",
  },
];
const TableRefunds = () => {
  const handleApproveRefund = async (id) => {
    const refundAction = await confirmationNotification(
      "Are you sure you want to approve this refund?",
      "Approve Refund"
    );
    if (refundAction.isConfirmed) {
      console.log("Approved");
    } else if (refundAction.isDismissed) {
      console.log("Not Approved");
    }
  };

  const handleRejectRefund = async (id) => {
    const refundAction = await confirmationNotification(
      "Are you sure you want to reject this refund?",
      "Reject Refund"
    );
    if (refundAction.isConfirmed) {
      console.log("Approved");
    } else if (refundAction.isDismissed) {
      console.log("Not Approved");
    }
  };

  return (
    <div className="mt-4 flow-root">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                      <button
                        type="button"
                        className="rounded-md bg-hackbid-secondary py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mr-2"
                        onClick={() => handleApproveRefund(person.id)}
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-red-700 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
                        onClick={() => handleRejectRefund(person.id)}
                      >
                        Reject
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
  );
};
export default TableRefunds;
