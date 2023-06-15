import { Outlet, useLocation } from "react-router-dom";
import classes from ".App.module.css";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          {location.pathname === "/" ? null : "close button"}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
