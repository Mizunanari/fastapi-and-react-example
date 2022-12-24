import { Box, Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import './App.css';
import AllItem from './components/AllItem';
import FindItem from './components/FindItem';
import Items from './components/Items';

const App = () => {
  const [error, setError] = useState<boolean>(false);

  return (
    <Box sx={{ m: 2 }}>
      {error && (
        <Alert severity="error" sx={{ m: 2 }}>
          通信に失敗しました
        </Alert>
      )}

      <Grid2 container spacing={2} sx={{ m: 2 }}>
        <Grid>
          <>
            <FindItem setError={setError} />
            <AllItem setError={setError} />
          </>
        </Grid>
        <Grid>
          <Items />
        </Grid>
      </Grid2>
    </Box>
  );
};

export default App;
