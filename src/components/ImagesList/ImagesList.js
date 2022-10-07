import { useEffect, useState } from "react";
import { axios } from "../../helpers";
import styled from "styled-components";
import { Modal } from "../Modal";
import { List } from "../List";
import { ImageCard } from "../ImageCard";
import { Pagination } from "../Pagination";

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  background: #d7c9c6;
`;

const Typography = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [imgPerPage, setImgPerPage] = useState(10);
  const [imageParams, setImageParams] = useState({});

  const [modalActive, setModalActive] = useState(false);

  const openModal = (image) => () => {
    setImageParams(image);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const incrementPerPage = () => {
    setImgPerPage((imgPerPage) => imgPerPage + 1);
  };

  const decrementPerPage = () => {
    setImgPerPage((imgPerPage) => imgPerPage - 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/list`, { params: { page, limit: `${imgPerPage}` } })
      .then((data) => {
        setImages(() => [...data]);
        setLoading(false);
      });
  }, [page, imgPerPage]);

  return (
    <Container>
      <List>
        {images.map((image) => (
          <ImageCard image={image} openModal={openModal} key={image.id} />
        ))}
      </List>
      <Modal
        modalActive={modalActive}
        closeModal={closeModal}
        imageParams={imageParams}
      />
      {isLoading ? (
        <Container>
          <Typography>Loading...</Typography>
        </Container>
      ) : (
        <Pagination
          imgPerPage={imgPerPage}
          setPage={setPage}
          incrementPerPage={incrementPerPage}
          decrementPerPage={decrementPerPage}
        />
      )}
    </Container>
  );
};

export default ImagesList;
