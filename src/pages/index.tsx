import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Typography,
} from '@mui/material';
import Link from '../components/Link';
import type { NextPage } from 'next';
import Head from 'next/head';

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tudu</title>
        <meta name='description' content='Tudu app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container maxWidth='lg'>
          <Typography variant='h2' component='h1'>
            Hello world, tudu tudu
          </Typography>

          <Button variant='contained' component={Link} noLinkStyle href='/'>
            Button
          </Button>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>List of my tudus</FormLabel>
            <FormGroup aria-label='position' row>
              <Paper>
                <FormControlLabel value='top' control={<Checkbox />} label='TBA' />
              </Paper>
            </FormGroup>
          </FormControl>
        </Container>
      </main>
    </div>
  );
};

export default Home;
