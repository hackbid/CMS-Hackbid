import CardTotal from "./components/CardTotal.jsx";
import OverviewAuctionToday from "./components/OverviewAuctionToday.jsx";

const SummaryDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <OverviewAuctionToday />
      <div className="bg-blue-100 max-w-6xl rounded-lg mx-4 my-4 py-2 sm:py-10">
        <div className="px-4 py-3">
          <h1 className="text-2xl sm:text-4xl text-center font-bold">
            Auction Status
          </h1>
          <h2 className="text-4xl sm:text-6xl text-center font-bold">OPEN</h2>
        </div>
      </div>
    </div>
  );
};

export default SummaryDashboard;
