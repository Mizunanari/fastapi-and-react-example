import { Box, Button } from '@mui/material';
import axios from 'axios';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import './FindItem.css';
import InputId from './InputId';
import SelectType from './SelectType';

interface FindItemProps {
  setError: Dispatch<SetStateAction<boolean>>;
}

const FindItem: FC<FindItemProps> = ({ setError }) => {
  const [type, setType] = useState<string>('pokedex');
  const [id, setId] = useState<string>('1');
  const [data, setData] = useState<string>('');

  const idSend = () => {
    axios
      .get(`http://localhost:8000/${type}/${id}`)
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
      <SelectType setType={setType} type={type} types={false} />
      <InputId setId={setId} id={id} />
      <Button variant="contained" onClick={idSend}>
        取得
      </Button>
      <p>
        {type}:{id}
      </p>
      <p className="text">{data}</p>
    </Box>
  );
};

export default FindItem;
