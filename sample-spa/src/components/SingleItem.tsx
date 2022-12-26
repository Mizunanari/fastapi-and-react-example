import {
  Box,
  Button,
  FormControl,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useState } from 'react';
// テキストフィールドを表示するために、InputIdコンポーネントを流用する。
import InputId from './InputId';

const Items = () => {
  const [imageType, setImageType] = useState('images');
  // テキストフィールドに入力されたポケモン画像のIDを格納する変数とそれを変更するメソッド？
  const [id, setId] = useState<string>('');
  // 表示するポケモン画像のIDを格納する変数とそれを変更するメソッド？
  const [imageId, setImageId] = useState<string>('');

  const createImageList = () => {
    const url = `http://localhost:8000/${imageType}/`;
    const list = [];
    for (let i = 1; i <= 809; i += 1) {
      // imageIdと一致したポケモン画像だけリストに追加する。
      if (`${i}` === imageId) {
        let pngName = '';
        if (imageType === 'images') {
          if (i === 740) {
            pngName = 'le.png';
          } else if (i === 662) {
            pngName = 'r.png';
          } else {
            pngName = '.png';
          }
        } else if (imageType === 'sprites') {
          pngName = 'MS.png';
        }
        const name = `${`000${i}`.slice(-3)}${pngName}`;
        const path = url + name;
        const obj = {
          img: path,
          title: name,
        };
        list.push(obj);
      }
    }

    return list;
  };
  const itemData = createImageList();
  // 「取得」ボタンが押されたタイミングで、TextFieldの値をimageIdに設定する。
  const idSend = () => {
    setImageId(id);
  };

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <FormControl>
        <Select
          sx={{ width: 150 }}
          id="select-type"
          label="type"
          value={imageType}
          onChange={(e) => setImageType(e.target.value)}
        >
          <MenuItem value="images">画像</MenuItem>
          <MenuItem value="sprites">スプライト</MenuItem>
        </Select>
        <InputLabel htmlFor="my-input">表示項目</InputLabel>
        {/* ID入力と取得ボタンを表示 */}
        <InputLabel htmlFor="my-input">表示項目</InputLabel>
        <InputId setId={setId} id={id} />
        <Button variant="contained" onClick={idSend}>
          取得
        </Button>
      </FormControl>

      <ImageList sx={{ width: 500, height: 800 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Items;
