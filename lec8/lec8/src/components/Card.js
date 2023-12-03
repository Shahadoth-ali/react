import React from "react";


const abc="goodbye";

function Card(props){
    const{titleText,descText}=props;
  return   (<div className="card">
  <h1 className='cardtitle'>{titleText}</h1>
  <h1 className='description'>{descText}</h1>
<h1 className='footer'>{abc}</h1>
</div>)
}
export default Card;