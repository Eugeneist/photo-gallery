import styled from "styled-components";

const Container = styled.div`
  background-image: url(https://i.ibb.co/h8YG8NV/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 30px 15px 30px 15px;
  overflow: hidden;
  position: relative;
`;

const Box = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  color: #f8f4f2;
  text-shadow: 1px 1px 1px #000;
  text-align: center;
`;

const Subtitle = styled.h1`
  font-size: 25px;
  color: #f8f4f2;
  text-shadow: 1px 1px 1px #000;
  text-align: center;
  margin-bottom: 30px;
`;

const Button = styled.a`
  padding: 10px 35px;
  border-radius: 15px;
  border: 1px solid #2b2d42;
  background: #2b2d42;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  &:hover {
    background: #232538;
    opacity: [0.9, 0.8, 0.7];
  },
`;

const HeroPage = () => {
  return (
    <div>
      <Container>
        <Box>
          <Title>Photo Gallery</Title>
          <Subtitle>Let's watch some photo!</Subtitle>
          <Button href="/gallery">WATCH</Button>
        </Box>
      </Container>
    </div>
  );
};

export default HeroPage;
