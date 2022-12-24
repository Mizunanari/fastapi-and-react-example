import TextField from '@mui/material/TextField';
import { Dispatch, FC, SetStateAction } from 'react';

interface InputIdProps {
  setId: Dispatch<SetStateAction<string>>;
  id: string;
}

const InputId: FC<InputIdProps> = ({ setId, id }) => (
  <TextField
    value={id}
    onChange={(e) => setId(e.target.value)}
    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
  />
);

export default InputId;
