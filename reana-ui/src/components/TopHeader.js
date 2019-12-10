/*
	-*- coding: utf-8 -*-

	This file is part of REANA.
	Copyright (C) 2018 CERN.

  REANA is free software; you can redistribute it and/or modify it
  under the terms of the MIT License; see LICENSE file for more details.
*/

import React from "react";
import { Segment, Image, Menu, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import LogoImg from "../images/logo-reana.svg";
import Cookies from "universal-cookie";
import { userLogout } from "../actions";
import "./TopHeader.scss";

const cookies = new Cookies();

const REANA_DOCS_URL = "https://reana.readthedocs.io/en/latest/";
const REANA_SITE_URL = "http://www.reana.io";

export default function TopHeader() {
  const dispatch = useDispatch();

  /**
   * Logs out the current session
   */
  const logOut = () => {
    cookies.remove("user_token");
    cookies.remove("jwt_token");
    cookies.remove("workflow-id");
    cookies.remove("workflow-name");
    cookies.remove("workflow-run");
    cookies.remove("workflow-created");
    cookies.remove("workflow-status");
    dispatch(userLogout());
  };

  return (
    <Segment secondary clearing attached="top" padded>
      <Image
        src={LogoImg}
        size="small"
        floated="left"
        style={{ margin: "0px" }}
      />
      <Menu size="large" floated="right">
        <Menu.Item href={REANA_SITE_URL} target="_blank">
          About
        </Menu.Item>
        <Menu.Item href={REANA_DOCS_URL} target="_blank">
          Documentation
        </Menu.Item>
        <Menu.Item
          className="logout-button"
          onClick={logOut}
          style={{ backgroundColor: "#0088CB", color: "white" }}
        >
          <Icon inverted name="user" />
          Log out
        </Menu.Item>
      </Menu>
    </Segment>
  );
}