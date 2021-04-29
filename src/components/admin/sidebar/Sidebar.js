import React from "react";
import "./Sidebar.css";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className='flex' id='side-bar'>
        <h2 className='side-bar__brand'>AdvenTour</h2>
        <ul className='side-bar-list'>
          <Link to={url}>
            <li className='side-bar-list-item'>
              <AddCircleOutlineIcon /> &nbsp; Add Package
            </li>
          </Link>

          <Link to={url + "/managePackage"}>
            <li className='side-bar-list-item'>
              <SettingsApplicationsIcon /> &nbsp; Manage Package
            </li>
          </Link>
          <Link to={url + "/manageOrder"}>
            <li className='side-bar-list-item'>
              <EditIcon /> &nbsp; Manage Order
            </li>
          </Link>
          <Link to='/'>
            <li className='side-bar-list-item'>
              <HomeIcon /> &nbsp;Back to Homepage
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
