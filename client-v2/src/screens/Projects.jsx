import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import bogeys from '../assets/18bogeys.png'
import thedocks from '../assets/thedocks.png'
import salesverse from '../assets/salesverse.png'
import cryptmo from '../assets/cryptmo.png'
import spotifyclone from '../assets/spotifyclone.png'
import { Button } from "@mui/material"
import { Grid } from "@mui/material"


export default function Projects() {
  // function componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  // componentDidMount()
  return (
    <Box sx={{ background: "#3A3B3C", width: '100%' }}>
      {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <img src={bogeys} alt='18 bogeys' style={{ height: '300px', margin: '30px' }} />
        <Box sx={{ textAlign: 'left' }} >
          <Box style={{ display: 'flex', gap: '30px', width: 'auto', margin: '30px' }}>
            <Box>
              <Typography variant='h4' sx={{ mt: '30px', ml: '30px' }}>
                18 Bogeys
              </Typography>

              <Typography variant='body1' sx={{ ml: '30px' }}>
                18 Bogeys is a golf round tracker that records various info about your golf game. It will record the course name and par, your name, handicap an the other players you are playing with as well as the date played.
              </Typography>
              <Box sx={{ m: '30px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Built with:
                </Typography>
                <Typography>
                  React, Tailwind CSS, React Router and Airtable.
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://18bogeys.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/18-Bogeys' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>

          </Box>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

        <img src={thedocks} alt='The Docks' style={{ height: '300px', margin: '30px' }} />
        <Box sx={{ textAlign: 'left' }} >

          <Box style={{ display: 'flex', gap: '30px', width: 'auto', margin: '30px' }}>
            <Box>
              <Typography variant='h4' sx={{ mt: '30px', ml: '30px' }}>
                The Docks
              </Typography>
              <Typography variant='body1' sx={{ ml: '30px' }}>
                The docks aims to help help you experience another world or solve a problem you may have.We achieve this through peer to peer renting.
              </Typography>

              <Box sx={{ m: '30px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Built with:
                </Typography>
                <Typography>
                  React, Express, MongoDB, React Router, nodemon and morgan.
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://thedocks.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/The-Dock' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>

          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

        <img src={salesverse} alt='Salesverse' style={{ height: '300px', margin: '30px' }} />
        <Box sx={{ textAlign: 'left' }} >

          <Box style={{ display: 'flex', gap: '30px', width: 'auto', margin: '30px' }}>
            <Box>
              <Typography variant='h4' sx={{ mt: '30px', ml: '30px' }} xs={9}>
                Salesverse
              </Typography>
              <Typography variant='body1' sx={{ ml: '30px', width: '40vw' }}>
                SalesVerse is the small business sales coordinator that will get your team on track and up to date.
              </Typography>
              <Box sx={{ m: '30px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Built with:
                </Typography>
                <Typography>
                  React, Ruby on Rails, Material UI, Luxon.
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://salesverse.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/SalesVerse' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>

        <img src={cryptmo} alt='Cryptmo' style={{ height: '300px', margin: '30px' }} />
        <Box sx={{ textAlign: 'left' }} >

          <Box style={{ display: 'flex', gap: '30px', width: 'auto', margin: '30px' }}>
            <Box>
              <Typography variant='h4' sx={{ mt: '30px', ml: '30px' }} xs={9}>
                Salesverse
              </Typography>
              <Typography variant='body1' sx={{ ml: '30px', width: '40vw' }}>
                SalesVerse is the small business sales coordinator that will get your team on track and up to date.
              </Typography>
              <Box sx={{ m: '30px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Built with:
                </Typography>
                <Typography>
                  React, Ruby on Rails, Material UI, Luxon.
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://salesverse.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/SalesVerse' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <div style={{ height: '200px' }}></div> */}

      <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mb: '20px', color: 'white', pt: '20px' }}>
        Projects
      </Typography>
      <Grid container spacing={3} sx={{}}>
        <Grid item md={6} sx={{}} >
          <img src={cryptmo} alt='Cryptmo' style={{ width: '70%', margin: '10px' }} />

          <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Cryptmo</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>A Web 3.0 application that uses a smart contract to allow users to send ethereum to others and view all of their past transactions. To use this site you must be connected to metamask and have a Ropsten text network wallet set up. </Typography>
          <div style={{ border: '1px solid gray', height: '.5px', width: '7 . 0%', margin: '10px 100px' }}></div>
          <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Built With:</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Vite, Solidity and Tailwind CSS</Typography>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Button variant='contained'><a href='https://cryptmo.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>

            <Button variant='contained'><a href='https://github.com/MattMoyka/Web3-venmo' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
          </Grid>
        </Grid>


        <Grid item md={6}>
          <img src={spotifyclone} alt='The Docks' style={{ width: '70%', margin: '30px' }} />
          <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Spotify Clone</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>A clone of the spotify player that uses spotifys api to provide user log in, access to a users playlists and the ability to play songs and change volume. </Typography>
          <div style={{ border: '1px solid gray', height: '.5px', width: '7 . 0%', margin: '10px 100px' }}></div>
          <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Built With:</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Next.js, Recoil, Spotify Api, Tailwind CSS. </Typography>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Button variant='contained'><a href='https://spotify-clone-2-nine.vercel.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>

            <Button variant='contained'><a href='https://github.com/MattMoyka/spotify-clone' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
          </Grid>
        </Grid>


        <Grid item md={6}>
          <img src={bogeys} alt='18 bogeys' style={{ width: '70%', margin: '30px' }} />
          <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>18 Bogeys</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}> A golf round tracker that records various info about your golf game. It will record the course name and par, your name, handicap an the other players you are playing with as well as the date played.</Typography>
          <div style={{ border: '1px solid gray', height: '.5px', width: '7 . 0%', margin: '10px 100px' }}></div>
          <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Built With:</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>React, Tailwind CSS, React Router and Airtable. </Typography>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Button variant='contained'><a href='https://18bogeys.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>

            <Button variant='contained'><a href='https://github.com/MattMoyka/18-Bogeys' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
          </Grid>
        </Grid>


        <Grid item md={6}>
          <img src={salesverse} alt='Salesverse' style={{ width: '70%', margin: '30px' }} />
          <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Salesverse</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}> SalesVerse is the small business sales coordinator that will get your team on track and up to date.</Typography>
          <div style={{ border: '1px solid gray', height: '.5px', width: '7 . 0%', margin: '10px 100px' }}></div>
          <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Built With:</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>React, Ruby on Rails, Material UI, Luxon. </Typography>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Button variant='contained'><a href='https://salesverse.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>

            <Button variant='contained'><a href='https://github.com/MattMoyka/SalesVerse' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
          </Grid>
        </Grid>


        <Grid item md={6}>
          <img src={thedocks} alt='The Docks' style={{ width: '30%', margin: '30px' }} />
          <Typography sx={{ fontSize: '2rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>The Docks</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}> The docks aims to help help you experience another world or solve a problem you may have.We achieve this through peer to peer renting.
          </Typography>
          <div style={{ border: '1px solid gray', height: '.5px', width: '7 . 0%', margin: '10px 100px' }}></div>
          <Typography sx={{ fontSize: '1.5rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>Built With:</Typography>
          <Typography sx={{ fontSize: '1rem', color: 'white', textAlign: 'left', padding: '0 100px' }}>React, Express, MongoDB, React Router, nodemon and morgan. </Typography>
          <Grid item sx={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
            <Button variant='contained'><a href='https://thedocks.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>

            <Button variant='contained'><a href='https://github.com/MattMoyka/The-Dock' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ height: '200px' }}></div>
    </Box >
  )
}
