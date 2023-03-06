import CardTotal from "./CardTotal.jsx";

const OverviewAuctionToday = () => {
  return (
    <div className="w-full xl:max-w-6xl">
      <div className="px-4 py-3">
        <div className="pb-2">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 ">
            Hackbid Admin Dashboard
          </h1>
          <p className="text-slate-500 text-sm md:text-lg">
            Today auction overview
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CardTotal />
          <CardTotal />
          <CardTotal />
          <CardTotal />
        </div>
      </div>
    </div>
  );
};

export default OverviewAuctionToday;
