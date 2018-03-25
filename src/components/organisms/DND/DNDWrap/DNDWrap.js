import React from 'react';
import {Grid, Row} from 'react-bootstrap/lib';

//component

import Quened from '../Quened/Quened'
import Planning from "../Planning/Planning";


const projects = [
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Wordpress theme",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyallRoach.png',
    id: "user3"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New Logo",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/ava.png',
    id: "user1"
  },
  {
    type: "Mobile App",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyallRoach.png',
    id: "user3"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyallRoach.png',
    id: "user3"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "Landing page",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  },
  {
    type: "New website",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/LyallRoach.png',
    id: "user3"
  },
  {
    type: "Dashboard",
    company: "Symu.co",
    price: "$1500",
    userImg: '/img/MichelleStewart.png',
    id: "user2"
  }

];




class DNDWrap extends React.Component {

  render() {

    return (
      <div className="Workflow">

        <Grid fluid>
          <Row>
            <Quened/>
            <Planning/>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default DNDWrap;