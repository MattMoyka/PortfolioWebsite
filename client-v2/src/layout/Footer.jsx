import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BottomNavigation from '@mui/material/BottomNavigation';



export default function Footer() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <BottomNavigation sx={{ background: '#1976d2', height: 'auto', padding: '20px', position: 'sticky', width: '100vw', bottom: '0' }}>
        <a href='https://github.com/MattMoyka' target='_blank' style={{ color: 'black' }}><GitHubIcon sx={{ fontSize: '50px', mr: '50px' }} /></a>
        <a href='https://www.linkedin.com/in/matthew-moyka-952651111/' target='_blank' style={{ color: 'black' }}><LinkedInIcon sx={{ fontSize: '50px' }} /></a>
      </BottomNavigation>
    </Box >

  )
}
