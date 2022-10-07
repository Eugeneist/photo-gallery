import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #2b2d42;
  padding: 15px 65px 15px 65px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 1500px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Logo = styled.strong`
  z-index: 5;
`;

const LogoLink = styled.a`
  font: 20px/24px "Trebuchet MS", sans-serif;
  font-weight: 400;
  color: #edf2f4;
  text-decoration: none;
  z-index: 5;
`;

const Menu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 0 10px 5px 0;
  padding: 0;
`;

const MenuLink = styled.a`
  font: 15px/20px "Trebuchet MS", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  color: #edf2f4;
  margin-left: 30px;
  &:hover {
    color: #8d99ae;
    opacity: [0.9, 0.8, 0.7];
  },
`;

const Header = () => {
  const favorite = useSelector((state) => state.favoriteReducer);

  return (
    <Container>
      <HeaderInner>
        <Logo>
          <LogoLink href="/">Photo Gallery</LogoLink>
        </Logo>
        <Menu>
          <MenuList>
            <MenuItem>
              <MenuLink href="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/gallery">Gallery</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/favorite">Favorite ({favorite.length})</MenuLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </HeaderInner>
    </Container>
  );
};

export default Header;
