import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import '../LeagueCard/LeagueCard.css'
import './LeagueDetails.css';
import sideImg from '../../Img/photo-1618888215370-5d77f2492c20.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faDiscord, faYoutube, faTwitter, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faMarsStroke, faFlag, } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


const LeagueDetails = () => {
     const { teamId } = useParams()
     const [leagueDetails, setLeagueDetails] = useState([]);
     const { strTeamBanner, intFormedYear, strCountry, strGender, strLeague, strDescriptionEN, strTeam, strStadium } = leagueDetails;

     useEffect(() => {
          const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
          axios(url)
               .then(data => {
                    // console.log(data);
                    setLeagueDetails(data.data.teams[0])
               })
     }, [teamId])
     
     return (
          <Container>
               {/* <Link to='/'><Button>Back</Button></Link> */}
               <div>
                    <img src={strTeamBanner} alt="" className='imgCenter' />
               </div>
               <div className='parentDiv row mt-5 row-cols-1 pt-5 mx-1'>
                    <div className='col-md-6 centerDiv'>
                         <div>
                              <h1 style={{ color: "white" }}>{strTeam}</h1>
                              <h5 style={{ color: "white" }}><FontAwesomeIcon icon={faAtlassian} /> Founded: {intFormedYear}</h5>
                              <h5 style={{ color: "white" }}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                              <h5 style={{ color: "white" }}><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</h5>
                              <h5 style={{ color: "white" }}><FontAwesomeIcon icon={faMapMarkerAlt} /> vanue: {strStadium}</h5>
                              <h5 style={{ color: "white" }}> {strLeague}</h5>
                         </div>
                    </div>
                    <div className='col-md-6'>
                         <img src={sideImg} alt="" className='sideImg' />
                    </div>
               </div>
               <div style={{ marginTop: "1%" }}>
                    <p style={{ color: "white" }}>{strDescriptionEN}</p>
                    <div style={{ marginTop: "2%" }} className='d-flex justify-content-center'>
                         <h1 className='m-2'><a href="https://www.instagram.com/rahman_rakib9/" target='_blank' style={{ color: "white" }}><FontAwesomeIcon icon={faInstagram} /></a></h1>
                         <h1 className='m-2'><a href="https://www.youtube.com" target='_blank' style={{ color: "white" }}><FontAwesomeIcon icon={faYoutube} /></a></h1>
                         <h1 className='m-2'><a href="https://twitter.com/RahmanRakib10" target='_blank' style={{ color: "white" }}><FontAwesomeIcon icon={faTwitter} /></a></h1>

                    </div>
               </div>
          </Container>
     );
};

export default LeagueDetails;
//backgroundColor: ''