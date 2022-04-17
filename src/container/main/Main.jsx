import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeed } from "../../services/APIServices";
import { CgMusic } from "react-icons/cg";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import Video from "../../components/video/Video";
import badge from "../../assets/images/tiktok_ver.png";
import "./main.css";
import NumberFormatter from "../../utils/numberFormatter";

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
          <Link to={`/${feed.author.unique_id}`}>
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
                <Link to={`/${feed.author.unique_id}`} style={{ flex: 1 }}>
                  <div className="authorContainer">
                    <div className="authorContainer__author">
                      <h3>{feed.author.unique_id}</h3>
                      <div className="user-bluev">
                        {feed.author.custom_verify === "Verified account" && (
                          <img src={badge} alt="" />
                        )}
                      </div>
                    </div>

                    <h4>{feed.author.nickname}</h4>
                  </div>
                </Link>
                <div>
                  <button>Follow</button>
                </div>
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
              <div className="feed_video-actions">
                <button className="video__sideBar-actionItem">
                  <span>
                    <BsHeartFill />
                  </span>
                  <strong className="like-count">
                    {NumberFormatter(feed.statistics.digg_count)}
                  </strong>
                </button>
                <button className="video__sideBar-actionItem">
                  <span>
                    <FaCommentDots />
                  </span>
                  <strong className="comment-count">
                    {NumberFormatter(feed.statistics.comment_count)}
                  </strong>
                </button>
                <button className="video__sideBar-actionItem">
                  <span>
                    <RiShareForwardFill style={{ fontSize: "25px" }} />
                  </span>
                  <strong className="share-count">
                    {NumberFormatter(feed.statistics.share_count)}
                  </strong>
                </button>
              </div>
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
