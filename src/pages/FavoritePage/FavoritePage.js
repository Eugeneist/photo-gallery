import styled from "styled-components";
import { useSelector } from "react-redux";
import { List } from "../../components";
import { ImageCard } from "../../components";

const Container = styled.div`
  max-width: 1500px;
  padding: 30px 15px;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
`;

const Typography = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000;
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
            <ImageCard
              image={image}
              openModal={() => console.log("")}
              key={image.id}
            />
          ))}
        </List>
      </Container>
    </div>
  );
};

export default FavoritePage;
