import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <div>
               <div style={{ marginTop: "2%", marginLeft: "5%" }}>
                    <Link to='/'><Button variant='primary'>Back</Button></Link>
               </div>
               <h1 style={{ textAlign: 'center', color: "red", marginTop: "5%" }}>Route Not Found!</h1>
          </div>
     );
};

export default NotFound;