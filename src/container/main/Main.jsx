import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeed } from "../../services/APIServices";
import { CgMusic } from "react-icons/cg";
import Video from "../../components/video/Video";
import badge from "../../assets/images/tiktok_ver.png";
import "./main.css";

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
              <div className="titleContainer__top">
                <Link to="/" style={{ display: "block", flex: 1 }}>
                  <div className="authorContainer">
                    <h3>{feed.author.unique_id}</h3>
                    <div className="user-bluev">
                      {feed.author.custom_verify === "Verified account" && (
                        <img src={badge} alt="" />
                      )}
                    </div>

                    <h4>{feed.author.nickname}</h4>
                  </div>
                </Link>
                <button>Follow</button>
              </div>
              <div className="videoDesc">
                <span>{feed.desc}</span>
              </div>
              <div className="videoMusic">
                <Link to="/">
                  <CgMusic />
                  <h4>{feed.music.title}</h4>
                </Link>
              </div>
            </div>
            <div className="videoWrapper">
              <div className="feed__video">
                <Video
                  src={
                    feed.video.download_addr.url_list[
                      Math.floor(
                        Math.random() * feed.video.download_addr.url_list.length
                      )
                    ]
                  }
                />
              </div>
              <div className="feed_video-actions"></div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      {feeds && renderFeed()} {!feeds && <h1>Loading</h1>}{" "}
    </>
  );
};

export default Main;
