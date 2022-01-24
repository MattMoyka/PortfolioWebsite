import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar } from '@mui/material';
import headshot from '../assets/headshot.jpg'


export default function Landing() {
  const history = useHistory()
  return (
    <Box sx={{ height: '110vh', width: '100vw', position: 'absolute', top: '-10', backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")', backgroundSize: 'cover' }}>
      <Box sx={{ height: '110vh', width: '100vw', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(3px)', position: 'absolute', top: '-10' }}>
        <Box sx={{ width: '60vw', textAlign: 'center', margin: '100px auto', height: '45vh', display: 'flex', justifyContent: 'center' }}>
          {/* <Box>
          <Typography variant='h2'  >
            Matt Moyka
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>
            I am a fullstack developer/mechanical engineer.
          </Typography>
          <Button color='primary' onClick={() => (history.push('/Projects'))} variant='contained' sx={{ mt: '20px' }}>
            Check out my projects
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '30vw', md: '20vw' }, margin: '0 auto' }}>

          <Typography sx={{ marginTop: '50px', fontSize: '1.5rem' }}>Get in touch!</Typography>
          <Box sx={{ display: 'flex', width: { xs: '30vw', md: '20vw' }, gap: '20px', justifyContent: 'space-around' }}>
            <a href='https://github.com/MattMoyka' target='_blank' rel="noreferrer" style={{ color: 'black' }}><Button color='primary' variant='contained' sx={{ mt: '20px' }}>
              <GitHubIcon sx={{ fontSize: '50px' }} />
            </Button></a>
            <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target='_blank' rel="noreferrer" style={{ color: 'black' }}><Button color='primary' variant='contained' sx={{ mt: '20px' }}>
              <LinkedInIcon sx={{ fontSize: '50px' }} />
            </Button></a></Box>
        </Box>
      */}

          <Box sx={{ background: 'gray', width: { xs: '175px', sm: '225px' }, position: 'relative', height: { xs: '170px', sm: '220px' }, display: 'flex', justifyContent: 'center', borderRadius: '10px', marginTop: '100px' }}>
            <Avatar src={headshot} alt="matt moyka" sx={{ width: { xs: '150px', sm: '200px' }, height: { xs: '150px', sm: '200px' }, border: "solid 3px green", position: 'absolute', top: { xs: '-75px', sm: '-100px' } }} />
            <Box sx={{ margin: { xs: '90px auto', sm: '125px auto' }, color: 'white' }}>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', lineHeight: '15px' }}  > Matt Moyka </Typography>
              <Typography > Software Engineer </Typography>
              <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'center', padding: '10px' }}>
                <a href='https://github.com/MattMoyka' target='_blank' rel="noreferrer" style={{ color: 'white' }}>  <GitHubIcon /></a>
                <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target='_blank' rel="noreferrer" style={{ color: 'white' }}> <LinkedInIcon /></a>
              </Box>


            </Box>
          </Box>


        </Box>
      </Box>
    </Box >

  )
}
