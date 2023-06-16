import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classes from "./Layout.module.css";

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate("/");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          {location.pathname === "/" ? null : (
            <img
              src="/img/close-icon.svg"
              className={classes.closeIcon}
              onClick={handleClickBackButton}
            />
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
