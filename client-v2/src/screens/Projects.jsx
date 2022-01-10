import { Box } from "@mui/system"
import { List, ListItem, ListItemText, Typography } from "@mui/material"
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
                18 Bogeys is a golf round tracker that records various info about your golf game. It will record the course name and par, your name, handicap an the other players you are playing with as well as the date played. In addition you will fill in the scorecard as you play and at the end of the game you will submit it to a global feed.
              </Typography>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://18bogeys.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/18-Bogeys' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>
            <List sx={{ mt: '30px' }}>
              <h4>Tech Stack</h4>
              <ListItem >
                <ListItemText>React</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Tailwind CSS</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Airtable</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>React Router</ListItemText>
              </ListItem>
            </List>
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
                The docks aims to help help you experience another world or solve a problem you may have.We achieve this through peer to peer renting.Take items that you don't use very often around your house and start making money with them by renting them to others. On the other you can be the renter yourself and test out a new hobby or get some work done while avoiding the high cost barrier to entry created by buying the items new.
              </Typography>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://thedocks.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/The-Dock' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>
            <List sx={{ mt: '30px' }}>
              <h4>Tech Stack</h4>
              <ListItem >
                <ListItemText>React</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Express</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>MongoDB</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>React Router</ListItemText>
              </ListItem>
            </List>
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
              <Typography variant='body1' sx={{ ml: '30px' }}>
                SalesVerse is the small business sales coordinator that will get your team on track and up to date.This program will hold all the info on the items you sell as well as displaying margin and other important info needed when deciding a price.In addition it will display over all stats based on revenue and percent growth.You can invite everyone on your team so that everyone can see how eachother are doing.
              </Typography>
              <Grid container spacing={2} sx={{ margin: '30px' }}>
                <Grid item>
                  <Button variant='contained'><a href='https://salesverse.netlify.app/' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Website</a></Button>
                </Grid>
                <Grid item>
                  <Button variant='contained'><a href='https://github.com/MattMoyka/SalesVerse' target='_blank' rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Github</a></Button>
                </Grid>
              </Grid>
            </Box>
            <List sx={{ mt: '30px' }}>
              <h4>Tech Stack</h4>
              <ListItem >
                <ListItemText>React</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Ruby on Rails</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Material UI</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>React Router</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Luxon</ListItemText>
              </ListItem>
            </List>
          </Box>

        </Box>
      </Box>
      <div style={{ height: '200px' }}></div>
    </Box >
  )
}
