import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import headshot from '../assets/headshot.jpg'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import resume from '../assets/resume.pdf'
export default function Aboutme() {
  return (
    <Box  >
      <Paper elevation={10} sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        height: '50vh',
        alignItems: 'center'
      }}>
        <Box sx={{ textAlign: 'left', width: '40vw' }}>
          <Typography variant='h3'>
            About Me
          </Typography>
          <Typography variant='body1'>
            I am a junior software developer with a mechanical engineering degree breaking into the tech space. I enjoy solving problems that will help others and turning ideas into tangible products. When I am not working, I enjoy traveling, fishing and golfing.
          </Typography>
        </Box>
        <Avatar src={headshot} alt="matt moyka" sx={{ width: '200px', height: '200px' }} />
      </Paper>
      <Paper elevation={10} sx={{ margin: '0 auto', width: '70vw', mt: '50px' }}>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </Paper>
    </Box>
  )
}
