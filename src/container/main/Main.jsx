import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeed } from "../../services/APIServices";

const Main = () => {
  const [feeds, setFeeds] = useState(null);

  const getAllFeeds = async () => {
    try {
      const { data } = await getFeed();
      setFeeds(data.aweme_list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFeeds();
  }, []);
  const renderFeed = () => {
    return feeds.map((feed) => {
      return (
        <div className="tiktok__main-item-Container" key={feed.aweme_id}>
          <Link to="/">
            <span className="avatarContainer">
              <img
                src={
                  feed.author.avatar_thumb.url_list[
                    Math.floor(
                      Math.random() * feed.author.avatar_thumb.url_list.length
                    )
                  ]
                }
                alt="pic"
              />
            </span>
          </Link>
          <div className="tiktok__main-item">
            <div className="titleContainer">
              <div className="authorContainer">
                <Link to="/">{feed.author.unique_id}</Link>
                <Link to="/">{feed.author.nickname}</Link>
              </div>
              <button>Follow</button>
              <div className="videoDesc">
                <span>{feed.desc}</span>
              </div>
              <div className="videoMusic">
                <span>{feed.music.title}</span>
              </div>
            </div>
            <div className="videoWrapper"></div>
          </div>
        </div>
      );
    });
  };
  return <>{feeds && renderFeed()}</>;
};

export default Main;
