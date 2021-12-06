import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

export default function Landing() {
  const history = useHistory()
  return (
    <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'left', margin: '100px' }}>
      <Typography variant='h2'>
        Matt Moyka
      </Typography>
      <Typography variant='h4'>
        I build web applications.
      </Typography>
      <Typography variant='body1'>
        I am a fullstack developer with a mechanical engineering degree. My goal is to help you turn your ideas into a reality.
      </Typography>
      <Button color='primary' onClick={() => (history.push('/Projects'))} variant='contained' sx={{ mt: '20px' }}>
        Check out my projects
      </Button>
    </Box>
  )
}
