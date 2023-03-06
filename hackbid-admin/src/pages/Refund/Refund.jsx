import PageHeader from "../../components/PageHeader.jsx";
import TableRefunds from "./components/TableRefunds.jsx";

export default function Refund() {
  const title = "Refund";
  const description =
    "this is the description page, please be careful and read it carefully before approving the refund";
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={title} description={description} />
      <TableRefunds />
    </div>
  );
}
