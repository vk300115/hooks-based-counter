import Container from '@mui/material/Container';


import { Counter } from './components/Counter';
import { Banner } from './components/Banner';



export const App = () => {
  return (
    <Container maxWidth="lg">
      <Banner />
      <Counter />
    </Container>
  );
}; 