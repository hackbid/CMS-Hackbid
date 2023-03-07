import {
  Bars4Icon,
  UserIcon,
  ArchiveBoxIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid/index.js";
import { ShoppingCartIcon } from "@heroicons/react/20/solid/index.js";

const CardTotal = ({ item, count }) => {
  const mantap = () => {
    switch (item) {
      case "User":
        return <UserIcon className="h-10 w-10 text-slate-400" />;
      case "Category":
        return <ArchiveBoxIcon className="h-10 w-10 text-slate-400" />;
      case "Reported":
        return <ExclamationTriangleIcon className="h-10 w-10 text-slate-400" />;
      default:
        return <ShoppingCartIcon className="h-10 w-10 text-red-400" />;
    }
  };
  const bgColorClass = () => {
    switch (item) {
      case "User":
        return "bg-slate-100";
      case "Category":
        return "bg-slate-200";
      case "Reported":
        return "bg-slate-300";
      default:
        return "bg-red-400";
    }
  };
  return (
    <div
      className={`${bgColorClass()} shadow-lg hover:scale-105 duration-300 hover:2xl:scale-105 rounded-lg w-xs`}
    >
      <div className="p-3 flex lg:block justify-between items-center ">
        <div>
          <header>
            <h1 className="font-bold text-4xl text-slate-600">{count}</h1>
          </header>
          <main>
            <p className="text-slate-500">Total {item}</p>
          </main>
        </div>
        {mantap()}
      </div>
    </div>
  );
};
export default CardTotal;
