import React from 'react'


const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <ul>
                <li><a>Home</a></li>
                <li><a>WatchList</a></li>   
                <li><a>Latest</a></li>
                <li><a>Login</a></li>
            </ul>
            <div className="homepage-content">
                <div className="text1"> movie suggestions?</div>
                <div className="text2"><span>MovieBOX</span> iS here</div>
            </div>
        </div>
    </>
  )
}

export default Navbar