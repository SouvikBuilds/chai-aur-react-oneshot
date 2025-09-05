import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { use } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    return <div>Please Login</div>;
  } else {
    return <div>Welcome {user.username}</div>;
  }
};

export default Profile;
