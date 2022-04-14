import React from "react";

export const Score = () => {
  return (
    <div className="w-100 flex-row content-space-between">
      <div>
        <span className="text-xl font-bold">3</span>
        <span className="text-lg font-bold">/5</span>
      </div>
      <div className="text-lg font-bold">
        Score: <span className="text-xl font-bold">10</span>
      </div>
    </div>
  );
};
