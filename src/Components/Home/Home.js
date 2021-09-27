import React, { useEffect, useState } from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import NavImg from '../../Img/photo-1508098682722-e99c43a406b2.jpeg'
import '../LeagueCard/LeagueCard.css'
import { Spinner } from 'react-bootstrap';
import axios from 'axios';


const toggleSpinner = () => {
     const spinner = document.getElementById('spinner');
     spinner.classList.toggle('d-none')
}

const Home = () => {
     const [leagues, setLeagues] = useState([]);

     useEffect(() => {
          toggleSpinner();
          const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
          axios(url)
               .then(data => {
                    // console.log(data);
                    setLeagues(data.data.teams)
               })
          toggleSpinner();
     }, [])

     return (
          <div>
               <div>
                    <img src={NavImg} alt="" style={{ height: "600px", width: "1000px" }} className='imgCenter w-100' />
                    {/* <h1>This is Home {leagues.length}</h1> */}
                    <div className='d-flex justify-content-center d-none' id='spinner'>
                         <Spinner animation="border" variant="primary" />
                    </div>
               </div>
               <div className='row row-cols-1 row-cols-md-4 pt-5 mx-1'>

                    {
                         leagues.map(x => <LeagueCard x={x} key={x.idTeam}></LeagueCard>)
                    }
               </div>
          </div>
     );
};

export default Home;

