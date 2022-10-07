import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../actions/favoriteActions";

const ModalContainer = styled.div`
  ${(props) => {
    switch (props.active) {
      case "true":
        return `
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            transition: all 0.3s ease-in-out;
            opacity: 1;
            pointer-events: all;
            `;
      case "false":
        return `
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            pointer-events: none;
            `;
    }
  }};
`;

const ModalInner = styled.div`
  padding: 25px;
  border-radius: 12px;
  background-color: #fff;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow-y: scroll;
`;

const ButtomBox = styled.div`
  display: flex;
  margin: 0 auto;
  width: 300px;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 60%;
  margin-bottom: 15px;
`;

const Typography = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Modal = ({ modalActive, closeModal, imageParams }) => {
  const dispatch = useDispatch();

  const [favoriteProduct, setFavoriteProduct] = useState(false);

  const addFavoriteProduct = (imageParams) => {
    if (favoriteProduct) {
      dispatch(removeFromFavorite(imageParams));
      setFavoriteProduct(false);
    } else {
      dispatch(addToFavorite(imageParams));
      setFavoriteProduct(true);
    }
  };

  const favorite = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    if (favorite.includes(imageParams)) {
      setFavoriteProduct(true);
    }
  }, [favorite, imageParams]);

  return (
    <ModalContainer
      active={modalActive ? "true" : "false"}
      onClick={() => closeModal()}
    >
      <ModalInner onClick={(e) => e.stopPropagation()}>
        <Image src={imageParams.download_url} />
        <Typography>Author: {imageParams.author}</Typography>
        <ButtomBox>
          <Button
            color="primary"
            size="medium"
            onClick={() => addFavoriteProduct(imageParams)}
          >
            {favoriteProduct ? "Remove" : "Add to Favorites"}
          </Button>

          <Button color="primary" size="medium" onClick={() => closeModal()}>
            Close
          </Button>
        </ButtomBox>
      </ModalInner>
    </ModalContainer>
  );
};

export default Modal;
