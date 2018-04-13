import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap/lib';
import './Settings.css'

const Settings = () => {
  return(
    <div className="Settings">
      <h2>Settings</h2>
      <Grid fluid>
        <Row>
          <Col md={6}>
            <form className="settings-form">
              <label>Change name
                <input type="text"/>
              </label>
              <label>Change passworda
                <input type="password"/>
              </label>
              <label>Repeat new password
                <input type="password"/>
              </label>
            </form>

          </Col>
          <Col md={6}>123</Col>
        </Row>
      </Grid>


    </div>

  )
};

export default Settings;