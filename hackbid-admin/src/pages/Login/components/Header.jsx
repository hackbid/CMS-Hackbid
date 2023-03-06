const Header = ({ title }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-12 w-auto sm:h-20"
        src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/5332400363489/Hacktiv8-1a3839af-310a-4509-8a9b-bcf7bc3203e7.png?_src=imagekit&tr=c-at_max,h-400,q-60,w-1280"
        alt="HackBid Logo"
      />
      <h2 className="text-hackbid-primary mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default Header;
