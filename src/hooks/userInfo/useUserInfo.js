import axios from "axios";
import { useEffect, useState } from "react";
import {
  getUserFollowerTotal,
  getUserFollowingTotal,
  getUserInfo,
  getUserVideos,
} from "../../services/APIServices";
import NumberFormatter from "../../utils/numberFormatter";

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState(null);
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  const [videos, setVideos] = useState([]);
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const getUserStatistics = async () => {
      try {
        await axios
          .all([
            getUserInfo(id),
            getUserFollowerTotal(id),
            getUserFollowingTotal(id),
            getUserVideos(id),
          ])
          .then(
            axios.spread((response1, response2, response3, response4) => {
              const singleUser = response1.data.user_info;
              const userFollower = response2.data.total;
              const userFollowing = response3.data.total;
              const userVideos = response4.data.aweme_list;
              setUserInfo(singleUser);
              setFollower(NumberFormatter(userFollower));
              setFollowing(NumberFormatter(userFollowing));
              setVideos([]);
              userVideos.map((video) => {
                setVideos((prevVideos) => {
                  return [
                    ...prevVideos,
                    video.video.download_addr.url_list[
                      Math.floor(
                        Math.random() *
                          video.video.download_addr.url_list.length
                      )
                    ],
                  ];
                });
              });
              const totalLikes = userVideos.reduce(
                (previousValue, currenValue) => {
                  return previousValue + currenValue.statistics.digg_count;
                },
                0
              );
              setLikes(NumberFormatter(totalLikes));
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getUserStatistics();
    // const getSingleUser = async () => {
    //   try {
    //     const { data } = await getUserInfo(id);
    //     setUserInfo(data.user_info);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const getUserFollower = async () => {
    //   try {
    //     const { data } = await getUserFollowerTotal(id);
    //     setFollower(NumberFormatter(data.total));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const getUserFollowing = async () => {
    //   try {
    //     const { data } = await getUserFollowingTotal(id);
    //     setFollowing(NumberFormatter(data.total));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const getVideos = async () => {
    //   try {
    //     const { data } = await getUserVideos(id);
    //     setVideos([]);

    //     data.aweme_list.map((v) =>
    //       setVideos((prevVideos) => {
    //         return [
    //           ...prevVideos,
    //           v.video.download_addr.url_list[
    //             Math.floor(
    //               Math.random() * v.video.download_addr.url_list.length
    //             )
    //           ],
    //         ];
    //       })
    //     );
    //     const totalLikes = data.aweme_list.reduce((a, b) => {
    //       return a + b.statistics.digg_count;
    //     }, 0);
    //     setLikes(NumberFormatter(totalLikes));
    //   } catch (error) {}
    // };
    // getSingleUser();
    // getUserFollower();
    // getUserFollowing();
    // getVideos();
  }, [id]);

  return {
    userInfo,
    follower,
    following,
    videos,
    likes,
  };
};
export default useUserInfo;
