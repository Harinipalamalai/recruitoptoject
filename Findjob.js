import React from 'react'
import './findjob.css';
import './applynow';
import './Profile';
import './Login';
import {Link,useNavigate} from 'react-router-dom';
function Findjob() {
    const navigate=useNavigate();
  return (
    <div>
	<header>
		<div class="logosec">
			<div class="logo">Recruito</div>
		</div>
	</header>
	<div class="main-container">
		<div class="navcontainer">
			<nav class="nav">
				<div class="nav-upper-options">
					<div class="nav-option option91">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
							class="nav-img"
							alt="dashboard"></img>
						<Link to="/dashboard"><h3> Dashboard</h3></Link>
					</div>

					<div class="nav-option option59">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
							class="nav-img"
							alt="blog"></img>
						<Link to="/profile"><h3> Profile</h3></Link>
					</div>
					<div class=" nav-option option16">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
							class="nav-img"
							alt="articles"></img>
						<h3> Find Job</h3>
					</div>
                    <div class="option2 nav-option">
                            <img src=
    "https://cdn-icons-png.flaticon.com/128/137/137932.png"
                                class="nav-img"
                                alt="articles"></img>
                           <Link to="/finall"> <h3 className='finds'> Applied</h3></Link>
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
		<div class="mainhh">
          
			<div class="boxw-container">
            <div class="report-container">

                    <div class="report-body">
                    <div class="boxw-container">
                    <div class="boxw box1">
                        <div class="text">
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                         <Link to="/App"><button class="button-34" role="button">Details</button>
                         </Link><br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="boxw box2">
                        <div class="text">
                     
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                
                            <Link to="/App"><button class="button-34">Details</button></Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="boxw box3">
                        <div class="text">
                       
                        <h2 class="topic">Looking for Senior UI/UX designer</h2>
                        <br></br>
                        <img src=
    "https://www.freepnglogos.com/uploads/yahoo-logo-png/yahoo-logo-png-y-logo-yahoo-social-media-icons-2.png"
                            class="icn srchicn"></img>
                            <h2 class="topic-heading">Yahoo</h2>
                            <h2 class="topic">Graphic Designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
    
                    <div class="boxw box4">
                        <div class="text">
                    
                        <h2 class="topic">Collabrate with product Marketing team</h2>
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>      <div class="boxw box4">
                        <div class="text">
                    
                        <h2 class="topic">Collabrate with product Marketing team</h2>
                        <br></br>
                        <img src=
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Zoho-logo.png"
                            class="icn srchicn"
                            ></img>
                            <h2 class="topic-heading">Zoho</h2>
                            <h2 class="topic">Product Manager</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                        </div>        <div class="boxw box2">
                        <div class="text">
                     
                        <h2 class="topic">Collabrate with Marketing team</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/300/300221.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h2 class="topic-heading">Google</h2>
                            <h2 class="topic">Senior Motion Designer</h2><br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>
                    <div class="boxw box1">
                        <div class="text">
                        
                        <h2 class="topic">Responsible for desigining,planning.</h2>
                        <br></br>
                        <img src=
    "https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
                            class="icn srchicn"
                            alt="search-button"></img>
                            <h6 class="topic-heading">Amazon</h6>
                            <h2 class="topic">Senior UI/UX designer</h2>
                            <br></br>
                            <br></br>
                        <button class="button-34" role="button">Details</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>
                    </div>

                    
                </div>
</div>
</div>
</div>
            </div>
            </div></div>
           
)
}
export default Findjob