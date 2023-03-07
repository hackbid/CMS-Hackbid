import CardTotal from "./components/CardTotal.jsx";
import OverviewAuctionToday from "./components/OverviewAuctionToday.jsx";

const SummaryDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="pb-2">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 ">
          Hackbid Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm md:text-lg">
          Today auction overview
        </p>
      </div>
      <div className="bg-slate-500 max-w-6xl rounded-lg mx-4 my-4 py-2 sm:py-10">
        <div className="px-4 py-3">
          <h1 className="text-2xl sm:text-4xl text-center font-bold text-slate-50">
            Auction Status
          </h1>
          <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mt-4">
            OPEN
          </h2>
        </div>
      </div>
      <OverviewAuctionToday />
    </div>
  );
};

export default SummaryDashboard;
