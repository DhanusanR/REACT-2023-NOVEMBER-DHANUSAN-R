import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from 'react-router-dom';
const theme = createTheme();
export default function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <div className="reg">
        <CssBaseline />  
        <Box
          sx={{
            marginTop:"10",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} style={{color:"#f3e5f5)"}}>
            
          </Avatar>
          <Typography component="h1" variant="h5" color="secondary">
         
        <b>SIGN IN</b>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3}}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} style={{color: "rgb(165, 21, 187)"}}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="secondary" />
                  }
                  label="Receive all updates via email" 
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="Btn"
              color="secondary"
            >
              <label>Sign In</label>
            </Button>
            <Grid container justifyContent="flex-end" component={RouterLink} to="/Login">
              <Grid item>
                <Link href="#" variant="body2" style={{color:"rgb(165, 21, 187)"}} textAlign="left">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}