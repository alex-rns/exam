import React from 'react';
import './HomeProjectBlock.css'

import DropdownButton from '../../atoms/buttons/DropdownButton/DropdownButton'


class HomeProjectBlock extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
          return (
            <div className="HomeProjectBlock" key={index}>
              <div className="home-project-wrap">
                <img src={item.userImg} alt={item.name}/>
                <div>
                  <div className={"home-project-header"}>
                    <p>{item.type}</p>

                  </div>
                  <p className="home-project-text">{item.company} &middot; {item.price}</p>
                </div>
              </div>
              <DropdownButton/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HomeProjectBlock;