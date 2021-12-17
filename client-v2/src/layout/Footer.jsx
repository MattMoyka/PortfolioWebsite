
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';


export default function Footer() {
  return (

    <Box sx={{ flexGrow: 1 }}>

      <div style={{ background: '#1976d2', height: 'auto', padding: '20px', width: '100vw', display: 'flex', flexDirection: 'column', color: 'white' }} >
        <Typography variant='body1'>
          Check me out on github and linked in!
        </Typography>
        <Box>
          <a href='https://github.com/MattMoyka' target='_blank' rel="noreferrer" style={{ color: 'black' }}><GitHubIcon sx={{ fontSize: '50px', mr: '50px' }} /></a>
          <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target='_blank' rel="noreferrer" style={{ color: 'black' }}><LinkedInIcon sx={{ fontSize: '50px' }} /></a>
        </Box>
      </div>
    </Box >

  )
}
