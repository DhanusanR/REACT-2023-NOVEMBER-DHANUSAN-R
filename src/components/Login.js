import React from 'react'
import {Grid,Paper,Avatar, TextField,Button,Typography} from '@mui/material'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


const Login =()=>{
    const paperstyle={height:'0vh',width:400,margin:"48px auto",color:"#9c27b0",align:"left"}
    const avatarstyle={background:"#9c27b0"}
    return (
        <div className='login'>
        <Grid >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <Paper elevation={15} style={paperstyle} align="left">
                <Grid align='center'>
                <Avatar style={avatarstyle} ><AccountBoxOutlinedIcon /></Avatar>
                <Typography  style={{color:"rgb(165, 21, 187)"}}><h1>LOG-IN</h1></Typography>
                </Grid>
                <TextField margin='normal'  label='email/Username' placeholder='Enter here' fullWidth required color="secondary" align="center"/>
                <TextField margin='normal' type="password" label='Password'  placeholder='Enter Password' fullWidth required color="secondary" align="center"/>
                <FormControlLabel
        control={
          <Checkbox name="checkedB" color="secondary" align="left"/>
               }
              label="Remember me"
               /><br></br>
               <Button type="submit" color="secondary" variant='contained' fullWidth component={RouterLink} to="/HomePage">Log In</Button><br></br><br></br>
               <Typography>
               <Grid container justifyContent="flex-end" component={RouterLink} to="/Registration">
              <Grid item>
                <Link href="#" variant="body2" style={{color:"rgb(165, 21, 187)"}} textAlign="left">
                  Don't have an account? Register!!
                </Link>
              </Grid>
              </Grid>
                </Typography>
            </Paper>
        </Grid>
        </div>        
    );
}

export default Login;