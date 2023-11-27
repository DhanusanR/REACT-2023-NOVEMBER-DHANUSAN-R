import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#a7beae', color: 'white', mt: 5, p: 3 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>
              Email: glamourhub@gmail.com
              <br />
              Phone: +1 123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Link href="#" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit">
              Instagram
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" color="inherit">
              Terms of Service
            </Link>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Your Cosmetic Shop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

