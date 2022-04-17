import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserInfo } from "../../services/APIServices";

const Profile = () => {
  const location = useLocation();
  const id = location.state.id;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getSingleUser = async () => {
      try {
        const { data } = await getUserInfo(id);
        setUserInfo(data.user_info);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleUser();
  }, [id]);
  return <div>Profile</div>;
};

export default Profile;
