import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import bogeys from '../assets/18bogeys.png'
import thedocks from '../assets/thedocks.png'
import salesverse from '../assets/salesverse.png'
import { Button } from "@mui/material"
import { Grid } from "@mui/material"


export default function Projects() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
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
      <div style={{ height: '200px' }}></div>
    </Box >
  )
}
