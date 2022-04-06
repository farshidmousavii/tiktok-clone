import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgHashtag, CgMusic } from "react-icons/cg";
import "./discover.css";
import { getDiscover } from "../../../services/APIServices";
import SkeletonDiscover from "../../../skeletons/SkeletonDiscover";
const Discover = () => {
  const [discover, setDiscover] = useState(null);
  const getHashtag = async () => {
    try {
      const { data } = await getDiscover();
      const filtered = data.category_list.filter(
        (item) => item.category_type !== 3
      );
      setDiscover(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHashtag();
  }, []);

  const renderHashtag = () => {
    return discover.map((item) => {
      return (
        <Link to="/">
          <div className="discover-itemContaier">
            {item.desc === "Trending hashtag" ? <CgHashtag /> : <CgMusic />}
            <p>
              {item.category_type === 0
                ? item.challenge_info.cha_name
                : item.music_info.title}
            </p>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="discover-list">
      {discover && renderHashtag()} {!discover && <SkeletonDiscover />}
    </div>
  );
};

export default Discover;
