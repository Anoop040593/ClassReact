import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Friend = ({ isAdmin }) => {
  //   console.log(useParams);
  const [friend, setFriend] = useState(null);
  const { id: friendId } = useParams();

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://fakestoreapi.com/users/${friendId}`,
      );

      const friendData = await response.json();
      console.log(friend);
      setFriend(friendData);
    })();
  }, []);

  if (friend === null) {
    return <h3>...Loading</h3>;
  }
  return (
    <div>
      <p>
        Friend Name - {friend.name.firstname} {friend.name.lastname}
      </p>
      {/* <p>isAdmin = {isAdmin ? "yes" : "no"}</p> */}
      <p>Email - {friend.email}</p>
    </div>
  );
};

export default Friend;
