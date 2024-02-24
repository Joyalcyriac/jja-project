import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './landing.css';
import {  Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Buffer } from 'buffer';

const Landing = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3006/view")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleContact = (worker) => {
    console.log(`Contact ${worker.name}`);
    // Implement your logic for handling contact here
  };

  const renderWorkers = () => {
    return workers.map((worker) => (
      <div className='page-color'>
      <Card className="cards" key={worker._id} variant="outlined" style={{ marginTop: '10px', marginBottom: '10px', boxShadow: '20px 20px 30px rgba(0, 0, 0, 0.3)', width: '280px',height: '390px', marginLeft: '10px', borderRadius: '7%' }}>
        <img
          src={`data:image/jpeg;base64,${Buffer.from(worker.image1.data).toString('base64')}`}
          style={{ borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px', marginTop: '10px', marginLeft: '10px' }}
          alt="Worker"
        />
        <CardHeader
          title={worker.name}
          subheader={worker.job}
        />
        <CardContent>
          <Typography variant="body1">
            Phone: {worker.phone}
          </Typography>
          <Typography variant="body1">
            Experience: {worker.experience}
          </Typography>
          <Typography variant="body1">
            Location: {worker.location}
          </Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='contact' onClick={() => handleContact(worker)}>Contact</button>
        </CardContent>
      </Card>
      </div>
    ));
  };

  return (
    <>
     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderWorkers()}
      </div>
    </>
  );
};

export default Landing;
