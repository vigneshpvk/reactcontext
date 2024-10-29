import { useContext } from "react";
import { AppContext, toggleColorMode } from "../appcontext";

const Profile = () => {
  const { firstValue, secondValue, toggleColorMode } = useContext(AppContext);
  console.log("profile page called");

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>
        This is Profile page with {firstValue} {secondValue}
      </h1>
      <button onClick={toggleColorMode}>Click me</button>
    </div>
  );
};

export default Profile;
