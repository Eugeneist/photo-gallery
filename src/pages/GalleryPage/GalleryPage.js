import styled from "styled-components";
import { ImagesList } from "../../components";

const Container = styled.div`
  max-width: 1500px;
  padding: 30px 15px;
  margin: 0 auto;
  background: #d7c9c6;
`;

const GalleryPage = () => {
  return (
    <Container>
      <ImagesList />
    </Container>
  );
};

export default GalleryPage;
