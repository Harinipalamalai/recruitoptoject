import React from 'react'
import './home.css';
import './Login';
import './Createac';
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <header class="headersd">
        <a href="#" class="logo">Recruito</a>
        <nav class="nav-items">
        <Link to="#"><a>Home</a></Link>
       <Link to="#"><a>About</a></Link> 
       <Link to="#"><a>Contact</a></Link>
        </nav>
        <nav class="nav-item">
        <Link to="/Login"><a>LOGIN</a></Link>
       <Link to="/createac"><a>SINGUP</a></Link> 
        </nav>
      </header>
      <main>
        <div class="intro">
          <h1>Latest Job Opportunity</h1>
          <p>Find the right job work without boders</p>
        </div>
      </main>
      <footer class="footer">
        <div class="copy">&copy; 2022 Employees</div>
        <div class="iconss">
      <Stack direction="row" alignItems="center" spacing={4}>
        <a href="#"><InstagramIcon fontSize="large" sx={{ color: "White" }} /></a>
        <a href="#"><YouTubeIcon fontSize="large"  sx={{ color: "White" }}/></a>
        <a href="#"><FacebookIcon fontSize="large" sx={{ color: "White" }}/></a>
        <a href="#"><TwitterIcon fontSize="large" sx={{ color: "White" }}/></a>
        <a href="#"><PinterestIcon fontSize="large" sx={{ color: "White" }} /></a>
        <a href="#"><LinkedInIcon fontSize="large" sx={{ color: "White" }}/></a>
      </Stack>
      </div>
    </footer>
      </div>
  )
}

export default Home