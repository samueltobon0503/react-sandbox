import { UserContext } from "../auth/contexts/UserContext";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Homepage from "../events/pages/Homepage";

export const AppRouter = () => {
  const {
    userState: { logged },
  } = useContext(UserContext);

  if(!logged){
    return (
      <>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/Login" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};