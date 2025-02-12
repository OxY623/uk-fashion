import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-darkPink text-2xl font-semibold">
      <div className="animate-pulse font-poppins text-white">Loading...</div>
      <div className="flex gap-4">
        <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
        <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
        <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
        <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export { Loading };
