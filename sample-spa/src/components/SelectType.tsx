import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';

interface SelectTypeProps {
  setType: Dispatch<SetStateAction<string>>;
  type: string;
  types: boolean;
}

const SelectType: FC<SelectTypeProps> = ({ setType, type, types }) => (
  <FormControl>
    <Select
      sx={{ width: 150 }}
      id="select-type"
      label="type"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <MenuItem value="pokedex">ポケモン</MenuItem>
      <MenuItem value="items">アイテム</MenuItem>
      <MenuItem value="moves">技</MenuItem>
      {types && <MenuItem value="moves">タイプ</MenuItem>}
    </Select>
    <InputLabel htmlFor="my-input">検索項目</InputLabel>
  </FormControl>
);

export default SelectType;
