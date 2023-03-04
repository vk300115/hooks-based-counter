import Button from '@mui/material/Button';

import { Counter } from './components/Counter';
import { Banner } from './components/Banner';

export const App = () => {
  return (
    <div>
      <Banner />
      <Counter />
    </div>
  );
}; 