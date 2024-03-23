import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import Button from '@mui/material/Button'; 


const AboutUs = () => {

  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([])

  const submitMessage = () =>{
    setMessages([...messages,message])
    setMessage('')
  }

  return (
    <div>
      <Typography variant="h4" color="text.secondary">
        <h2>About Us</h2>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Cupidatat minim non tempor enim magna dolore nulla aliqua aliqua.
        Exercitation enim eu aliquip esse est laborum tempor adipisicing dolor
        dolor. Ullamco veniam ullamco qui elit aliqua dolor deserunt.
        Consectetur aute aliqua proident labore sunt proident labore in ullamco
        aute aute in. Voluptate ex occaecat et proident sunt magna Lorem non
        irure.
      </Typography>

      <br/>
      <Typography variant="h6" color="text.secondary">
        <p style={{textAlign:'left'}}>
        Comments :
        </p>
      </Typography>

        {messages.map((msg, id) => (
      <Grid container key={id}>
      <Grid xs={1} item></Grid>
          <Grid xs={11} item>
            <p className='comment'>{msg}</p>
          </Grid>
      </Grid>
        ))}

<br/>
<br/>
      <Grid container>
        <Grid xs={1} item></Grid>
        <Grid xs={8} item>
          <input
          className='input'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Feedback Here"
          />
        </Grid>
        <Grid xs={2} item>
          <Button variant='contained' onClick={submitMessage}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs