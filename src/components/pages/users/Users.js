import React from 'react';
import './Users.css'

//components
import AllUsers from "../../organisms/AllUsers/AllUsers";
import Select from "../../atoms/Select/Select";

class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userList: []
    }
  }

  componentWillMount() {
    fetch('/api/user/userList', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList: res
        });
      })
  }


  onSelectChange = (e) => {
    let select = e.target.value;
    fetch('/api/user/userList', {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        if(select === "Online only"){
          this.setState({
            userList: res.filter((e)=>{
              return e.online
            }),
          })
        }
        if(select === "All"){
          this.setState({
            userList: res.filter((e)=>{
              return e
            })
          })
        }
      })
  };

  render() {

    console.log('ul ', this.state.userList);

    const userActive = {
      list: ["All", "Online only"],
      label: 'Show users'
    };
    return (

      <div className="Users">
        <div className="users-header">
          <p>Users</p>
          <Select onChange={this.onSelectChange} data={userActive}/>
        </div>

        <div className="users-wrap">
          <AllUsers data={this.state.userList}/>
        </div>

      </div>
    )


  }
}

export default Users;