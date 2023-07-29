import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../Redux/Users/usersActions";
import { authContext } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useContext(authContext);

  //state userDetails
  const user = useSelector((state) => state.users.userDetails);

  // Fetch user data when the component mounts
  useEffect(() => {
    if (currentUser) {
      const uid = "87zC9kBasfRp7UvJcU9nqgHFEl12";
      dispatch(getUserById(uid));
    }
  }, [currentUser, dispatch]);

  console.log("user", user);

  const handleLogout = () => {
    navigate("/login");
    toast.success("Cerraste sesión con éxito.");
  };

  return (
    <div className="ml-10 mt-10">
      <h1>User Data</h1>
      {user && (
        <form className="space-x-4">
          <input type="text" value={user.name} readOnly />
          <input type="text" value={user.lastName} readOnly />
          <input type="text" value={user.email} readOnly />
          <input type="text" value={user.dateRecord} readOnly />
          {/* Add other inputs as needed */}
        </form>
      )}
    </div>
  );
};

export default UserDate;
