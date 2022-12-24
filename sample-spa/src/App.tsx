import Alert from '@mui/material/Alert';
import { useState } from 'react';
import './App.css';
import AllItem from './components/AllItem';
import FindItem from './components/FindItem';

const App = () => {
  const [error, setError] = useState<boolean>(false);

  return (
    <>
      {error && <Alert severity="error">通信に失敗しました</Alert>}
      <FindItem setError={setError} />
      <AllItem setError={setError} />
    </>
  );
};

export default App;
