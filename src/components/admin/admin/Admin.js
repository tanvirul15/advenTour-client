import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AddPackage from "../addPackage/AddPackage";
import ManageOrder from "../manageOrder/ManageOrder";
import ManagePackage from "../managePackage/ManagePackage";

const Admin = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <Switch>
            <Route path='/admin/managePackage'>
              <ManagePackage />
            </Route>
            <Route path='/admin/manageOrder'>
              <ManageOrder />
            </Route>
            <Route exact path='/admin'>
              <AddPackage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
