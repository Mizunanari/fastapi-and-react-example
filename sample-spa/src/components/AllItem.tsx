import { Box, Button } from '@mui/material';
import axios from 'axios';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import './FindItem.css';
import SelectType from './SelectType';

interface AllItemProps {
  setError: Dispatch<SetStateAction<boolean>>;
}

const AllItem: FC<AllItemProps> = ({ setError }) => {
  const [type, setType] = useState<string>('pokedex');
  const [data, setData] = useState<string>('');

  const idSend = () => {
    axios
      .get(`http://localhost:8000/${type}/all`)
      .then((res) => {
        setData(JSON.stringify(res.data, null, '  '));
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Box sx={{ p: 1, m: 1, border: 1, borderRadius: 1, width: 500 }}>
      <SelectType setType={setType} type={type} types />
      <Button variant="contained" onClick={idSend}>
        取得
      </Button>
      <p className="text">{data}</p>
    </Box>
  );
};

export default AllItem;
