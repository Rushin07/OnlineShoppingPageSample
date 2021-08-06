import React from 'react';

import classes from './TopBar.module.css';



const TopBar = (props) => {
return(
    <header className= "App-header">
<nav className={classes.Topbar}>
 <img src= 'https://i.dlpng.com/static/png/197684_preview.png' 
     alt="Amazon Logo"/>
 </nav>
 </header>
);

}
export default TopBar;