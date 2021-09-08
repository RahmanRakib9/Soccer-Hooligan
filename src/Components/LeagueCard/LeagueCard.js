import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './LeagueCard.css'
import { useHistory } from 'react-router';

const LeagueCard = (props) => {
     const { strSport, strTeamBadge, strTeam, idTeam } = props.x;
     const history = useHistory();
     const handleClick = (detailsId) => {
          history.push(`/about/${detailsId}`)
     }

     return (
          <div className='d-flex justify-content-center align-items-center mt-5' >
               <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={strTeamBadge} style={{ height: "150px", width: "150px" }} className='imgCenter' />
                    <Card.Body>
                         <h2 >{strTeam}</h2>
                         <h5>Sports Type: {strSport}</h5>
                         <Button variant="primary" className='btnCenter' onClick={() => handleClick(idTeam)}>Learn More <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
               </Card>
          </div>
     );
};

export default LeagueCard;


