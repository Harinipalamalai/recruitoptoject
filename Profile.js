import React,{useState} from 'react'
import './profile.css';
import './Dashboard';
import './Findjob';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Profile = () => {
    const [jobid, setjobid] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [citizenship, setcitizenship] = useState('');
    const [dob, setdob] = useState('');
    const [city, setcity] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [zip, setzip] = useState('');
	const [address, setaddress] = useState('');
    const [notification, setNotification] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        jobid:jobid,
		firstname:firstname,
		lastname:lastname,
		citizenship:citizenship,
		dob:dob,
		city:city,
		email:email,
		phone:phone,
		zip:zip,
		address:address,
      };
  
      // Get the JWT token from the local storage (assuming it's saved after login)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No JWT token found.');
        return;
      }
  
      try {
        // Replace 'http://example.com/api/concerts' with the actual endpoint URL
        const response = await axios.put('http://127.0.0.1:8080/put', formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token as a Bearer token
          },
        });
  
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form fields after successful submission:
        setjobid('');
        setfirstname('');
        setlastname('');
        setcitizenship('');
        setdob('');
        setemail('');
        setzip('');
        setaddress('');
        setphone('');
        setcity('');

      } catch (error) {
        console.error(error);
      }
    };
    


  return (
    <div>
    <header>
	<div class="logosec">
		<div class="logoss">Recurito</div>
	</div>
</header>
¯<div class="main-container">
	<div class="navcontainer">
		<nav class="nav">
			<div class="nav-upper-options">
				<div class="nav-option option10">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
						class="nav-img"
						alt="dashboard"></img>
					<Link to="/dashboard"><h3> Dashboard</h3></Link>
				</div>

				<div class="nav-option option5">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
						class="nav-img"
						alt="blog"></img>
				 <h3> Profile</h3>
				</div>


				<div class="option2 nav-option">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
						class="nav-img"
						alt="articles"></img>
					<Link to="/findjob"><h3 className="size"> Find Jobs</h3></Link>
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
            <div class="mainrt">
            <div class="">
<div class="row">
		<div class="col-12">
			<div class="my-5">
				<h3>My Profile</h3>
                <br>
                </br>
			</div>
			<form onSubmit={handleSubmit}class="file-upload">
				<div class="row mb-5 gx-5">
					<div class="col-xxl-8 mb-5 mb-xxl-0">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-41">Contact detail</h4>
                                <br></br>
                                <div className='hey'><div class="col-md-6">
									<label class="form-label">jobid </label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setjobid(e.target.value)}name="jobid" value={jobid}></input>
								</div>
								<br></br>
								<div class="col-md-6">
									<label class="form-label">First Name </label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setfirstname(e.target.value)}name="firstname" value={firstname}></input>
								</div>
								<br></br>
								<div class="col-md-6">
									<label class="form-label">Last Name </label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control"onChange={(e) => setlastname(e.target.value)} name="lastname" value={lastname}></input>
								</div>
                                <br></br>
								<br></br><div class="col-md-6">
									<label class="form-label">Citizenship</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control"onChange={(e) => setcitizenship(e.target.value)} name="citizenship"  value={citizenship}></input>
								</div>
								<br></br><div class="col-md-6">
									<label class="form-label">dob</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setdob(e.target.value)} name="dob" value={dob}></input>
								</div>
								<br></br><div class="col-md-6">
									<label class="form-label">city</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setcity(e.target.value)}name="city"value={city}></input>
								</div>
								<br></br><div class="col-md-6">
									<label class="form-label">email</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setemail(e.target.value)}name="email"value={email}></input>
								</div>
								<br></br><div class="col-md-6">
									<label class="form-label">phone</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setphone(e.target.value)}name="phone"value={phone}></input>
								</div>
								<br></br>
								<div class="col-md-6">
									<label class="form-label">zip</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setzip(e.target.value)}name="zip"value={zip}></input>
								</div>
                                <br></br>
								<div class="col-md-6">
									<label class="form-label">address</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" onChange={(e) => setaddress(e.target.value)}name="address" value={address}></input>
								</div>
                                <br></br>
					</div>
                    <br></br>
                    <div class="text-center">
					<button type="submit" class="lgr">Update profile</button>
				</div>
				</div> 
				</div>
				</div>
        </div>
			</form> 	
	</div>
	</div>
                    </div>
                </div>
            </div>
			</div>
           
)
}
export default Profile