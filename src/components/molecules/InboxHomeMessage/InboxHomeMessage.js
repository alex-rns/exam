import React from 'react';



class InboxHomeMessage extends React.Component {
  render(){
    return(
      <div>
        {this.props.data.map((item, index)=>{
           return(
             <div className="InboxHomeMessage" key={index}>
               {item.name}

             </div>
           )
         })}
    </div>
    )
  }
}

export default InboxHomeMessage;