import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WorkerReg = () => {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    job: '',
    experience: '',
    location: '',
    username: '',
    password: ''
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    inputs.image1 = file;
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('phone', inputs.phone);
    formData.append('job', inputs.job);
    formData.append('experience', inputs.experience);
    formData.append('location', inputs.location);
    formData.append('username', inputs.username);
    formData.append('password', inputs.password);
    formData.append('image1', selectedImage);

    fetch('http://localhost:3006/wsignup', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Record saved');
      })
      .catch((err) => {
        console.log('error');
      });
  };

  return (
    <div>
      <div>
        <div className='navbar'>
          <h1 className='navhead'>workers connect</h1>
          <ul className='nav-list'>
            <li>
              <Link to='/Home'>Home</Link>
              <Link to='/Workerdetails'>All Workers</Link>
            </li>
          </ul>
        </div>
        <div className='back'>
          <form>
            <label>Add your profile pic</label>
            <input type='file' onChange={handleImage} />
            <br />
            <br />
            <TextField
              label='Full Name'
              name='name'
              variant='outlined'
              value={inputs.name}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Phone number'
              name='phone'
              variant='outlined'
              value={inputs.phone}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Applying for Position'
              name='job'
              variant='outlined'
              value={inputs.job}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Experience'
              name='experience'
              variant='outlined'
              value={inputs.experience}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Location'
              name='location'
              variant='outlined'
              value={inputs.location}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Username'
              name='username'
              variant='outlined'
              value={inputs.username}
              onChange={inputHandler}
            />
            <br />
            <TextField
              id='outlined-basic'
              label='Password'
              name='password'
              variant='outlined'
              type='password'
              value={inputs.password}
              onChange={inputHandler}
            />
            <br />
            <Button variant='contained' onClick={saveData}>
              OK
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkerReg;
