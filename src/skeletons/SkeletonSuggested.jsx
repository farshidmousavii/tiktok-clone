import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";

const SkeletonSuggested = () => {
  return (
    <div className="skeletonWrapper">
      <div className="skeleton-avatar">
        <SkeletonElements type="avatar" />
      </div>
      <div className="skeleton-text">
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonSuggested;
