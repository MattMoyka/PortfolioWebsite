import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar } from '@mui/material';
import headshot from '../assets/headshot.jpg'
import resume from '../assets/resume.pdf'


export default function Landing() {
  const history = useHistory()
  return (
    <Box>
      <Box sx={{ height: '70vh', width: '100vw', backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Box sx={{ height: '70vh', width: '100vw', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(3px)', position: 'absolute', top: '-10' }}>
          <Box sx={{ width: '60vw', textAlign: 'center', margin: '100px auto', height: '45vh', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ background: '#1976d2', width: { xs: '175px', sm: '225px' }, position: 'relative', height: { xs: '170px', sm: '220px' }, display: 'flex', justifyContent: 'center', borderRadius: '10px', marginTop: '100px' }}>
              <Avatar src={headshot} alt="matt moyka" sx={{ width: { xs: '150px', sm: '200px' }, height: { xs: '150px', sm: '200px' }, border: "solid 3px #1976d2", position: 'absolute', top: { xs: '-75px', sm: '-100px' } }} />
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


      <Box sx={{ textAlign: 'left', width: '90vw', m: '20px auto' }}>
        <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mb: '20px' }}>
          About Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: '40vw' }}>
            <Typography variant='body1' sx={{ fontSize: { xs: '.7rem', sm: '1rem' } }}>
              I am a junior software developer with a mechanical engineering degree breaking into the tech space. I enjoy solving problems that will help others and turning ideas into tangible products. When I am not working, I enjoy traveling, fishing and golfing.
            </Typography>
            <a href={resume} download style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ mt: '30px', fontSize: { xs: '.7rem', sm: '1rem' } }}>Download My Resume Here</Button></a>
            <Button color='primary' onClick={() => (history.push('/Projects'))} variant='contained' sx={{ mt: '20px', fontSize: { xs: '.7rem', sm: '1rem' } }}>
              Check out my projects
            </Button>
          </Box>
          <Box sx={{ width: '40vw' }}>
            <Typography>My Interests</Typography>


          </Box>
        </Box>
      </Box>



    </Box>

  )
}
