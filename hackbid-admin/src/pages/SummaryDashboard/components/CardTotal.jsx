import { ArchiveBoxIcon } from "@heroicons/react/24/solid/index.js";

const CardTotal = () => {
  return (
    <div className="bg-red-200 shadow-lg hover:scale-110 duration-300 hover:2xl:scale-105 rounded-lg w-xs">
      <div className="p-3 flex lg:block justify-between items-center ">
        <div>
          <header>
            <h1 className="font-bold text-4xl">41</h1>
          </header>
          <main>
            <p className="text-slate-500">Total Product</p>
          </main>
        </div>
        <ArchiveBoxIcon className="h-10 text-red-800" />
      </div>
    </div>
  );
};
export default CardTotal;
