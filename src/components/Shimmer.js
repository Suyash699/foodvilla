const Shimmer = () => {
  return (
    <div className="flex">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key= {index} className="border flex-1 border-blue-300 bg-slate-500 shadow rounded-md p-4 max-w-sm w-full ml-20">
            <div className="animate-pulse flex-wrap space-x-4">
              <div className="rounded-full flex bg-slate-700 h-24 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className=" flex bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
