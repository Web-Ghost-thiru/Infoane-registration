import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

interface CheckAuthProps {
  children: ReactNode;
}

function CheckAuth({ children }: CheckAuthProps) {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user);
  if (location.pathname === "/candidate-list" && !user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (
    location.pathname === "/candidate-registration-page" &&
    user.isAuthenticated
  ) {
    return <Navigate to="/candidate-list" replace />;
  }
  if (location.pathname === "/" && user.isAuthenticated) {
    return <Navigate to="/candidate-list" replace />;
  }
  return <>{children}</>;
}

export default CheckAuth;
