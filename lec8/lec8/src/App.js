import React from "react";
import Card from "./components/Card";
import data from "./data.json"



let items=[];
//<Card titleText={data[x].title} descText={data[x].desc}
items=data.map((item)=> <Card titleText={item.title} descText={item.desc} />)

function App(){

return <div>
{items}

</div>
}
export default App;