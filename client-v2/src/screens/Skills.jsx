import { Icon } from '@iconify/react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';

export default function Skills() {
  return (
    <Box sx={{ flexGrow: 1, padding: '50px' }}>

      <Paper elevation={10} sx={{ padding: '10px' }}>
        <Typography variant='h2' sx={{ mb: '40px', color: '#1976d2', fontWeight: 'bold' }}>
          Skills
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:react" width="50" height="50" />
            <Typography>React</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:rails" width="50" height="50" />
            <Typography>Rails</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:javascript" width="50" height="50" />
            <Typography>Javascript</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:material-ui" width="50" height="50" />
            <Typography>Material UI</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="vscode-icons:file-type-mongo" width="50" height="50" />
            <Typography>Mongo DB</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="vscode-icons:file-type-html" width="50" height="50" />
            <Typography>HTML</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="vscode-icons:file-type-css" width="50" height="50" />
            <Typography>CSS</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="akar-icons:github-fill" width="50" height="50" />
            <Typography>Github</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:ruby" width="50" height="50" />
            <Typography>Ruby</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:nextjs" width="50" height="50" />
            <Typography>Next.js</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:tailwindcss-icon" width="50" height="50" />
            <Typography>Tailwind CSS</Typography>
          </Grid>
          <Grid item xs={4} sm={3}>
            <Icon icon="logos:aws-amplify" width="50" height="50" />
            <Typography>AWS Amplify</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
