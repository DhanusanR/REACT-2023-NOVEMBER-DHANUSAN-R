import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AppNavBar from './AppNavBar';
import Grid from '@mui/material/Grid';

import Footer from './Footer';

const Home = () => {
  const images = [
    {
      url: 'https://thumbnails.production.thenounproject.com/F-a6yE8kXo8JLet576Gqnc0oKvs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/man_getting_facial_treatment-scopio-a9cfb63b-2b3c-420b-a736-33681d94090b.jpg',
      title: 'SKIN CARE',
      width: '40%',
    },
    {
      url: 'https://thumbnails.production.thenounproject.com/e6vFtbJwM5IDuObBLntTV_F3YCw=/fit-in/1000x1000/photos.production.thenounproject.com/photos/3BCD0230-C1A4-4F6B-B3A9-D11AD07FCDB6.jpg',
      title: 'HAIR CARE',
      width: '30%',
    },
    {
      url: 'https://thumbnails.production.thenounproject.com/LWq9wgIT1h7F5qrzRh_zw_INA3Y=/fit-in/1000x1000/photos.production.thenounproject.com/photos/A07F7C3E-A0BA-4FCC-B4FA-3473626A3E1A.jpg',
      title: 'HEALTH & HYGIENE CARE',
      width: '30%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {

      
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  const image = [
    {
      url: 'https://thumbnails.production.thenounproject.com/MGooM9Qm6YigKVQ0ogj7rCdiTb0=/fit-in/1000x1000/photos.production.thenounproject.com/photos/5048FED8-872D-4892-AA41-6E4BEF94EAC7.jpg',
      title: 'FRAGRANCE',
      width: '34%',
    },
    {
      url: 'https://thumbnails.production.thenounproject.com/tVFFBMih8mrQ3Qyi16TZpQYKCMA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/1FBE8770-57EC-4AE1-97C8-93B4E500ABCF.jpg',
      title: 'MAKEUP',
      width: '32%',
    },
    {
      url: 'https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229756.jpg?w=1060&t=st=1700557378~exp=1700557978~hmac=4f2a86c666ad38ef703f52bba1d5340e5f0061781f9c03cc2f5f6f407b90fc57',
      title: 'ACCESSORIES',
      width: '34%',
    },
  ];
  
  const Imagebutton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const Imagesrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const ImageP = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const Imagebackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const Imagemarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  return (
    <div>
      <AppNavBar />
      <br></br>
      <Typography variant="h4" style={{color:"#a7beae"}} textAlign={'center'}><b>Category</b></Typography><br></br>
        <TextField label="Search for products" variant="filled" fullWidth margin="none" color='secondary' /><br></br>
      <br></br><br></br>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' ,color:'secondary'}}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 150, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
        {image.map((image) => (
          <Imagebutton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Imagesrc style={{ backgroundImage: `url(${image.url})` }} />
            <Imagebackdrop className="MuiImageBackdrop-root" />
            <ImageP>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <Imagemarked className="MuiImageMarked-root" />
              </Typography>
            </ImageP>
          </Imagebutton>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
