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
import Share from "../../components/share/Share";

const Main = () => {
  const [feeds, setFeeds] = useState(null);
  const [share, setShare] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = (e, id) => {
    if (e.target.id === id) {
      setShare(true);
      setShow(true);
    }
  };
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
          <Link
            to={`/${feed.author.unique_id}`}
            state={{ id: feed.author.uid }}
          >
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
                <Link
                  to={`/${feed.author.unique_id}`}
                  state={{ id: feed.author.uid }}
                  style={{ flex: 1 }}
                >
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
                  <span className="video_sideBar-actionItem_span">
                    <BsHeartFill />
                  </span>
                  <strong className="like-count">
                    {NumberFormatter(feed.statistics.digg_count)}
                  </strong>
                </button>
                <button className="video__sideBar-actionItem">
                  <span className="video_sideBar-actionItem_span">
                    <FaCommentDots />
                  </span>
                  <strong className="comment-count">
                    {NumberFormatter(feed.statistics.comment_count)}
                  </strong>
                </button>
                <button
                  className="video__sideBar-actionItem"
                  // onMouseOver={() => setShow(true)}
                  id={feed.aweme_id}
                  onClick={(e) => handleClick(e, feed.aweme_id)}
                >
                  <span
                    className="video_sideBar-actionItem_span"
                    id={feed.aweme_id}
                  >
                    <RiShareForwardFill
                      style={{ fontSize: "25px" }}
                      id={feed.aweme_id}
                    />
                  </span>
                  <strong className="share-count">
                    {NumberFormatter(feed.statistics.share_count)}
                  </strong>
                </button>
                {share && (
                  <Share show={show} handleShow={() => setShow(false)} />
                )}
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
