export default function index() {
  return (
    <div className="flex p-4 py-3 border-l border-r border-b border-opacity-20 border-gray-100">
      <div>
        <div className="p-6 rounded-full bg-white"></div>
      </div>
      <div className="flex-grow">
        <textarea
          type="text"
          placeholder="What's happening"
          className="mx-2 p-2 bg-transparent resize-none w-full focus:outline-none text-gray-200"
        />
        <div className="border-t border-gray-100 border-opacity-20 " />
        <div className="flex justify-between my-4">
          <div className="flex-grow"></div>
          <button className="px-4 py-2 bg-green-400 rounded-full text-white font-bold text-sm focus:outline-none">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
