import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ key, name, capital, avatar, isIncrease }) => {
  return (
    <ForbesItem key={key}>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        35.7 <BiDollarCircle color={theme.colors.accent} size={22} />
        {capital}
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};
