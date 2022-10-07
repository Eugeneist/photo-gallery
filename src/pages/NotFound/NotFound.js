import styled from "styled-components";

const Container = styled.div`
  max-width: 1500px;
  padding: 30px 15px;
  margin: 0 auto;
  text-align: center;
`;

const Typography = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

const NotFound = () => {
  return (
    <Container>
      <Typography>Error 404. Page not found :(</Typography>
    </Container>
  );
};

export default NotFound;
