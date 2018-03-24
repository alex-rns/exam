import React from 'react';
import {Row, Col} from 'react-bootstrap/lib';
import './YourProjects.css'

class YourProjects extends React.Component {

  constructor() {
    super();
    this.state = {
      dataYourProject: []
    }
  }

  componentWillMount() {
    fetch('/api/user/projects', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataYourProject: res
        });
        console.log('123 ', res)

      })
  }



  render(){
    return(
      <Col className="YourProjects" md={3}>
        <div className="your-project-header">
          <p>Your projects</p>
        </div>
      </Col>
    )
  }
}

export default YourProjects;