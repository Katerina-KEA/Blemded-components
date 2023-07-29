import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ data }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {data.length > 0 &&
          data.map(({ id, name, capital, avatar, isIncrease }) => (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
