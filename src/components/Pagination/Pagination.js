import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PagesList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const PagesNumbers = styled.li`
  margin-left: 10px;
  padding: 0;
`;

const PageButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

const SizeBox = styled.div`
  padding-bottom: 15px;
`;

const LimitButton = styled.button`
  width: 35px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #2b2d42;
  &:hover {
    background-color: #2b2d42;
    color: #fff;
  }
  &:active {
    background-color: #2b2d42;
    color: #fff;
  }
`;

const Display = styled.p`
  display: inline-flex;
  margin: 0 10px;
  padding: 0;
`;

const Pagination = ({
  imgPerPage,
  setPage,
  incrementPerPage,
  decrementPerPage,
}) => {
  const numbersOfPage = [];

  for (let i = 1; i <= 30; i++) {
    numbersOfPage.push(i);
  }

  return (
    <Container>
      <SizeBox>
        Page size: <LimitButton onClick={decrementPerPage}> - </LimitButton>
        <Display>{imgPerPage}</Display>
        <LimitButton onClick={incrementPerPage}> + </LimitButton>
      </SizeBox>
      <PagesList>
        {numbersOfPage.map((number) => (
          <PagesNumbers key={number} onClick={() => setPage(number)}>
            <PageButton>{number}</PageButton>
          </PagesNumbers>
        ))}
      </PagesList>
    </Container>
  );
};

export default Pagination;
