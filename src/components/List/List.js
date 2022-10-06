import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0 0 50px 0;
  text-align: center;
  list-style: none;
  background: #d7c9c6;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr;

  .imageslist__image {
    width: 80%;
  }
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
