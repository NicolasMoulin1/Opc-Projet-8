import React, { useState } from "react";
import { useParams } from "react-router-dom";
import apartment from "../data/fichier.json";
import Carousel from "./Slidshow";
import Tags from "./tags";
import Collaps from "./Collaps";
import StarRating from "./StarRating";


const findApartmentID = (id) => {
  return apartment.find((apartment) => apartment.id === id);
};

const Apartment = () => {
  const { id } = useParams();
  const apartmentData = findApartmentID(id);
  const tags = apartmentData.tags;
  const description = apartmentData.description;
  const equipements = apartmentData.equipements;
  const note = apartmentData.note;
  return (
    <div className="fiche_logement">
      <div className="carrousel">
        <Carousel>
      {apartmentData.photos.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </Carousel>
      </div>
      <div className="title">
        <div>
          <h1>{apartmentData.title}</h1>
          <p>{apartmentData.location}</p>
        </div>
        <div className="Author">
          <img src={apartmentData.hôte.photo} alt={apartmentData.hôte.name} />
          <p>{apartmentData.hôte.name}</p>
        </div>
      </div>

      <Tags title={""}>
        <ul>
          {tags.map((tag, index) => (
            <li key={"tags" + index} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="starRating">
        <StarRating totalStars={5} selectedStars={parseInt(apartmentData.note)} />
        </div>
      </Tags>
     
      <div className="title">
        <Collaps title="Description">{description}</Collaps>
        <Collaps title="Equipement">
          <ul>
            {equipements.map((equipement, index) => (
              <li key={"equipement" + index} className="equipement">
                {equipement}
              </li>
            ))}
          </ul>
        </Collaps>
      </div>
    </div>
  );
};

export default Apartment;
