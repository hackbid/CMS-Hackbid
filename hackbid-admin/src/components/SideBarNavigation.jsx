import { classNames, navigation } from "../data/data.js";

const SideBarNavigation = () => {
  return (
    <nav className="mt-6 px-3">
      <div className="space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
              "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "mr-3 h-6 w-6 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default SideBarNavigation;