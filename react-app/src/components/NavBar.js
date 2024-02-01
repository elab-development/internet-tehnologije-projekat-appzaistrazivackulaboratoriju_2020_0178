import React from 'react'


export default class NavBar extends React.Component {
    render() {
        return (
          <div className='nav-home'>
        
      <a href={"/"}><span  className='nav-span'>Home</span></a>
       <a href={"/about"}><span className='nav-span'>About</span></a>
     <a href={"/contact"}><span className='nav-span'>Contact</span></a>
         </div>
         
         
        );
  }
}