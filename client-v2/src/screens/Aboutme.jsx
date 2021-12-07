import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import headshot from '../assets/headshot.jpg'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from 'react';
import resume from '../assets/resume.pdf'
export default function Aboutme() {

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box  >
      <Paper elevation={10} sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        height: '50vh',
        alignItems: 'center'
      }}>
        <Box sx={{ textAlign: 'left', width: '40vw', fontSize: '50%' }}>
          <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            About Me
          </Typography>
          <Typography variant='body1' sx={{ fontSize: { xs: '.7rem', sm: '1rem' } }}>
            I am a junior software developer with a mechanical engineering degree breaking into the tech space. I enjoy solving problems that will help others and turning ideas into tangible products. When I am not working, I enjoy traveling, fishing and golfing.
          </Typography>
        </Box>
        <Avatar src={headshot} alt="matt moyka" sx={{ width: { xs: '100px', sm: '200px' }, height: { xs: '100px', sm: '200px' } }} />
      </Paper >
      <Paper elevation={10} sx={{ margin: '0 auto', width: { xs: '100vw', sm: '70vw' }, mt: '50px' }}>
        <Document file={resume} style={{ overflow: 'auto' }}>
          <Page pageNumber={page} />
        </Document>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <Typography>Page: {page}</Typography>
          <Pagination count={2} page={page} onChange={handleChange} />
        </Stack>


      </Paper>
      <div style={{ height: '200px' }}></div>
    </Box >
  )
}
