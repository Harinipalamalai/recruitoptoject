import React from 'react'
import './dash.css';
import './Login';
import './Profile';
import './Findjob';
import './applynow';
import {Link} from 'react-router-dom';
function Dashboard() {
  return (
    <div>
        <header>
            <div class="logosec">
                <Link to="/login"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bellw'></img></Link>
                <div class="logo"><img src="https://cdn-icons-png.flaticon.com/512/9631/9631083.png"className='bellws'></img>Recurito</div>
            </div>
        </header>
        <div class="main-container">
            <div class="navcontainer">
                <nav class="nav">
                    <div class="nav-upper-options">
                        <div class="nav-option option1">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img"
                                alt="dashboard"></img>
                            <h3> Dashboard</h3>
                        </div>

                        <div class="nav-option option9">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                class="nav-img"></img>
                           <Link to="/profile"> <h3 className='prof'> Profile</h3></Link>
                        </div>
                        <div class="option2 nav-option">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                class="nav-img"
                                alt="articles"></img>
                           <Link to="/findjob">  <h3 className='finds'> Find Jobs</h3></Link>
                        </div>
                        <div class="option2 nav-option">
                            <img src=
    "https://cdn-icons-png.flaticon.com/128/137/137932.png"
                                class="nav-img"
                                alt="articles"></img>
                           <Link to="/finall">  <h3 className='finds'> Applied</h3></Link>
                        </div>
                        <div class="nav-option logout">
                            <img src=
    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                class="nav-img"
                                alt="logout"></img>
                            <Link to="/Login"><h3>Logout</h3></Link>
                        </div>
    
                    </div>
                </nav>
            </div>
            <div class="mainty">
                <div class="report-containers">
                    <div class="report-header">
                        <h1 class="recent-Arti">Latest Job Oppourunity</h1>
                        <br></br>
                        <br></br>

                    </div>
                    <div class="report-body">
                    <div class="boxq-container">
                    <div class="boxq box1">
                        <div class="text">
                        <button class="button-34" role="button">Part Time</button>
                        <br></br>
                        <br></br>
                        <button class="button-34" role="button">Senior Level</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                        </div>
                    </div>
                       
    
                    <div class="boxq box2">
                        <div class="text">
                        <button class="button-35" role="button">Full Time</button>
                        <br></br>
                        <br></br>
                        <button class="button-35" role="button">Distant</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2>
                        </div>
                    </div>
    
                    <div class="boxq box3">
                        <div class="text">
                        <button class="button-36" role="button">Project Work</button>
                        <br></br>
                        <br></br>
                        <button class="button-36" role="button">Flexible Schedule</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Looking for Senior UI/UX designer</h2>
                        <br></br>
                        <img src=
    "https://www.freepnglogos.com/uploads/yahoo-logo-png/yahoo-logo-png-y-logo-yahoo-social-media-icons-2.png"
                            class="icn srchicn"></img>
                            <h2 class="topic-heading">Yahoo</h2>
                            <h2 class="topic">Graphic Designer</h2>
                        </div>
                    </div>
    
                    <div class="boxq box4">
                        <div class="text">
                        <button class="button-37" role="button">Full Day</button>
                        <br></br>
                        <br></br>
                        <button class="button-37" role="button">Shit Work</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Collabrate with product Marketing team</h2>
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                        </div>
                        </div>
                        <div class="boxq box4">
                        <div class="text">
                        <button class="button-38" role="button">Middle Level</button>
                        <br></br>
                        <br></br>
                        <button class="button-38" role="button">Senior Level</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Senior UI/UX designer</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10828/10828812.png"
                            class="icn srchicn"
                           ></img>
                            <h2 class="topic-heading">Accenture</h2>
                            <h2 class="topic">ctreative Director</h2>
                        </div>
                        </div>
                        <div class="boxq box4">
                        <div class="text">
                        <button class="button-39" role="button">Distant</button>
                        <br></br>
                        <br></br>
                        <button class="button-39" role="button">Shit Work</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-png.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Infosis</h2>
                            <h2 class="topic">Senior Motion Designer</h2>
                        </div>
                        </div>
                        <div class="boxq box6">
                        <div class="text">
                        <button class="button-40" role="button">Full Time</button>
                        <br></br>
                        <br></br>
                        <button class="button-40" role="button">Middle Level</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://www.freepnglogos.com/uploads/ford-car-logos-png-29.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Ford</h2>
                            <h2 class="topic">Senior Product Manager</h2>
                        </div>
                        </div>
                        <div class="boxq box7">
                        <div class="text">
                        <button class="button-41" role="button">Senior Level</button>
                        <br></br>
                        <br></br>
                        <button class="button-41" role="button">Part Time</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2 class="topic">Looking for full time worker</h2>
                        <br></br>
                        <img src=
    "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260"
                            class="icn srchicn"></img>
                            <h2 class="topic-heading">TCS</h2>
                            <h2 class="topic">Senior UI/UX designer</h2>
                        </div>
                        </div>
                    
                </div>
                
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Dashboard