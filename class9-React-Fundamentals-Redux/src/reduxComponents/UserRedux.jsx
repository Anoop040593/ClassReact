import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserMiddleWare } from "./userMiddleWare";
const param = 2;
function User() {
  //   const [user, setUser] = useState(null);
  //   const [error, setError] = useState(false);
  //   const [loading, setLoading] = useState(true);
  const { loading, error, user } = useSelector((store) => store.userState);

  console.log({ loading, error, user });

  const [value, setValue] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (param != null) {
      dispatch(fetchUserMiddleWare(param));
    }
  }, [param]);

  //   const handleParam = () => {
  //     dispatch(action.getParam(value));
  //   };

  const heading = <h2>User Example</h2>;

  if (loading) {
    return (
      <div>
        {heading}
        <h3>Loading....</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {heading}
        <h3>Error Occured</h3>
      </div>
    );
  }

  return (
    <div>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
    </div>
  );
}

export default User;
