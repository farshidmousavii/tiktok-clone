import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";
import "./skeletonelements.css";

const SkeletonDiscover = () => {
  return (
    <div className="skeletonWrapperDiscover">
      <SkeletonElements type="hashtag" />
      <SkeletonElements type="hashtag" />
      <Shimmer />
    </div>
  );
};

export default SkeletonDiscover;
