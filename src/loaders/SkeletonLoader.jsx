import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = () => {
  return (
    <div className="max-w-[386px] w-full mx-auto">
      <div className="w-full h-[272px] rounded-[10px] bg-contain bg-center bg-no-repeat">
        <Skeleton height={272} />
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Skeleton circle width={40} height={40} />
          <p className="tracking-[0.4px]">
            <Skeleton width={100} height={20} />
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Skeleton width={120} height={20} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
