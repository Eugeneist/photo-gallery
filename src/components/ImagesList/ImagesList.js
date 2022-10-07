import { useEffect, useState } from "react";
import { axios } from "../../helpers";
import styled from "styled-components";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { List } from "../List";
import { ImageCard } from "../ImageCard";

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
  const [imageParams, setImageParams] = useState({});

  const [modalActive, setModalActive] = useState(false);

  const openModal = (image) => () => {
    setImageParams(image);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`/list`, { params: { page, limit: 10 } }).then((data) => {
      setImages((prevImages) => [...prevImages, ...data]);
      setLoading(false);
    });
  }, [page]);

  const handleClick = () => {
    setPage((page) => page + 1);
  };

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
        <Button color="primary" size="large" onClick={handleClick}>
          Show More
        </Button>
      )}
    </Container>
  );
};

export default ImagesList;
