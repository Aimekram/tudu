import { Button, Container, Typography } from '@mui/material';
import { Link } from '../components/Link';
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
          <Typography variant='h2' component='h1' role='heading' gutterBottom>
            Hello world, tudu tudu
          </Typography>
          <Button variant='contained' component={Link} noLinkStyle href='/todo'>
            Go to todos
          </Button>
        </Container>
      </main>
    </div>
  );
};

export default Home;
