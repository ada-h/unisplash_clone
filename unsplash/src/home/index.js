import React, { useEffect, useState} from "react";
import Header from "./header";
import PhotoGallery from "./photogallery";
import Modal from "./modal";
import axios from "axios";

const accesskey = '13gmvia8k-c3R0BGJkW1qpOp8jjJb0T3Nr8tEqyzDhE'
const apiUrl = 'https://api.unsplash.com'


const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [onephoto, setPhoto] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searching, setStatus] = useState(0);
  const [modal, openModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${apiUrl}/search/photos/?client_id=${accesskey}`
      )
      .then((res) => {
        setPhotos(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch =(e)=>{
    if (e.key === 'Enter') {
      setStatus(1);
      setPhotos([])
      e.target.blur();
      axios
      .get(
        `${apiUrl}/search/photos/?client_id=${accesskey}&query=${searchText}`
      )
      .then((res) => {
        setStatus(2);
        setPhotos(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  const getImageDetail =(id)=>{
      setPhoto({});
      openModal(true);
      axios
      .get(
        `${apiUrl}/photos/${id}?client_id=${accesskey}`
      )
      .then((res) => {
        setPhoto(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  return (
    <div>
      {modal ? <Modal closebtn={openModal} photo={onephoto}/> : ""}
      <Header text={searchText} inputChange={setSearchText} status={searching} search={handleSearch}/>
      <PhotoGallery photos={photos} getImageDetail={getImageDetail} status={searching} /> 
    </div>
  );
};

export default Index;
