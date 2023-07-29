import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
 
import formatDate from 'helpers/formateDate';


export const BlogCard = ({article}) => {
  return (
    <Card key={article.id}>
      <CardHeader>
        <CardPoster src={article.poster} alt={article.name} />
      </CardHeader>
      <CardBody>
        <Tag>{article.tag}</Tag>
        <CardTitle>{article.title}</CardTitle>
        <CardText>{article.description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={article.avatar} alt={article.name} />
          <UserInfo>
            <UserName>{article.name}</UserName>
            <Date>{formatDate(article.postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
