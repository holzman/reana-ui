/*
	-*- coding: utf-8 -*-

	This file is part of REANA.
	Copyright (C) 2018 CERN.

	REANA is free software; you can redistribute it and/or modify it under the
	terms of the GNU General Public License as published by the Free Software
	Foundation; either version 2 of the License, or (at your option) any later
	version.

	REANA is distributed in the hope that it will be useful, but WITHOUT ANY
	WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
	A PARTICULAR PURPOSE. See the GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with REANA; if not, see <http://www.gnu.org/licenses>.

	In applying this license, CERN does not waive the privileges and immunities
	granted to it by virtue of its status as an Intergovernmental Organization or
	submit itself to any jurisdiction.
*/

import React, { Component } from "react";
import { Segment, Image, Button, Menu, Icon } from "semantic-ui-react";
import LogoImg from "../images/logo-reana.svg";

export default class Header extends Component {
  render() {
    return (
      <Segment secondary clearing attached="top" padded>
        <Image src={LogoImg} size="medium" floated="left" />
        <Button size="huge" icon primary floated="right">
          <Icon name="user" />
        </Button>
        <Menu size="huge" floated="right">
          <Menu.Item href="http://www.reana.io" target="_blank">
            About
          </Menu.Item>
          <Menu.Item
            href="https://reana.readthedocs.io/en/latest/"
            target="_blank"
          >
            Documentation
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}