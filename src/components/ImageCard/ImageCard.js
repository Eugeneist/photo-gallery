import styled from "styled-components";
import "..//../App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../actions/favoriteActions";

const Image = styled.img`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const CardContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-x: hidden;
`;

const FavoriteBox = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 7px;
  right: 55px;
  color: #fca311;
  z-index: 9;
  border: 1px solid transparent;
`;

const FavoriteButton = styled.button`
  .favorite-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: transparent;
    margin: 0px;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 11px;
    position: absolute;
    top: -6px;
    right: 0;
    height: 30px;
    width: 30px;
    color: rgb(252, 163, 17);
    z-index: 9;
    border: 1px solid transparent;
    background-image: url("https://i.ibb.co/PW6PYTM/icons8-heart-30.png");
    background-repeat: no-repeat;
  }

  .active {
    content: "";
    background-image: url("https://i.ibb.co/rF6DxKY/icons8-heart-30-1.png");
    background-repeat: no-repeat;
  }
`;

const ImageCard = ({ openModal, image }) => {
  const dispatch = useDispatch();

  const [favoriteProduct, setFavoriteProduct] = useState(false);

  const addFavoriteProduct = (image) => {
    if (favoriteProduct) {
      dispatch(removeFromFavorite(image));
      setFavoriteProduct(false);
    } else {
      dispatch(addToFavorite(image));
      setFavoriteProduct(true);
    }
  };

  const favorite = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    if (favorite.find((fav) => fav.id === image.id)) {
      setFavoriteProduct(true);
    }
  }, [favorite, image]);

  return (
    <CardContainer className="imageslist__item" key={image.id}>
      <ImageContainer>
        <Image
          onClick={openModal(image)}
          className="imageslist__image"
          src={image.download_url}
          alt={image.download_url}
        />
        <FavoriteBox>
          <FavoriteButton
            className={
              favoriteProduct ? "favorite-button active" : "favorite-button"
            }
            onClick={() => addFavoriteProduct(image)}
          />
        </FavoriteBox>
      </ImageContainer>
    </CardContainer>
  );
};

export default ImageCard;
