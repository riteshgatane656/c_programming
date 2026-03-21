const { useState, useEffect } = React;

function PrintShopManagement(){

const [currentView,setCurrentView] = useState("dashboard");

return (

<div>

<h1>PrintShop Manager</h1>

<button onclick={()=>setCurrentView("dashboard")}>
Dashboard
</button>

</div>

);

}

ReactDOM.render(
React.createElement(PrintShopManagement),
document.getElementById("root")
);