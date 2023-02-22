import styled from "styled-components";

const Container = styled.div`
  background-color: #2b2d42;
  text-align: center;
  padding: 25px 15px 25px 15px;
  bottom: 0;
`;

const FooterInner = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 14px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Typography = styled.p`
  font: 14px/18px "Trebuchet MS", sans-serif;
  font-weight: 400;
  margin: 0 auto;
  color: #edf2f4;
`;

const Footer = () => {
  let currentYear = new Date().getFullYear();
  
  return (
    <Container>
      <FooterInner>
        <Typography>Copyright © {currentYear}, Yevhen Rudofylov</Typography>
      </FooterInner>
    </Container>
  );
};

export default Footer;
