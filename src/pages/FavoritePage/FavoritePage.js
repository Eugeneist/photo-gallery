import styled from "styled-components";
import { useSelector } from "react-redux";
import { List } from "../../components";

const Container = styled.div`
  max-width: 1500px;
  padding: 30px 15px;
  margin: 0 auto;
`;

const Typography = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Image = styled.img`
  cursor: pointer;
`;

const FavoritePage = () => {
  const state = useSelector((state) => state.favoriteReducer);

  if (state.length === 0) {
    return (
      <Container>
        <Typography>You don't have favorite pictures!</Typography>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <List>
          {state.map((image) => (
            <li className="imageslist__item" key={image.id}>
              <Image
                className="imageslist__image"
                src={image.download_url}
                alt={image.download_url}
              />
            </li>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default FavoritePage;
