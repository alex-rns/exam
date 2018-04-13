import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import './Settings.css'

//components
import LeftFormSettings from '../../molecules/FormSettings/LeftFormSettings'
import RightFormSettings from "../../molecules/FormSettings/RightFormSettings";

const Settings = () => {
  return(
    <div className="Settings">
      <h2>Settings</h2>
      <Grid fluid>
        <Row>

          <Col md={6}>
            <LeftFormSettings/>
          </Col>


          <Col md={6}>
            <RightFormSettings/>
          </Col>

        </Row>
      </Grid>


    </div>

  )
};

export default Settings;