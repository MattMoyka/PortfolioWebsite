import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Landing() {
  const history = useHistory()
  return (
    <Box sx={{ height: '110vh', width: '100vw', position: 'absolute', top: '-10', backgroundColor: '#e3f2fd' }}>
      <Box sx={{ width: { xs: '60vw', sm: '100vw' }, textAlign: { xs: 'center', md: 'left' }, margin: { xs: '100px auto', md: '100px' }, height: '45vh', display: { md: 'flex' }, justifyContent: { md: 'space-around', gap: { md: '300px' } } }}>
        <Box>
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
      </Box>
    </Box>

  )
}
