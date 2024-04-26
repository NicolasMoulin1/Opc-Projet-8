import React, { useState } from "react";
import { useParams } from "react-router-dom";
import apartment from "../data/fichier.json";
import Tags from "./tags";
import Collaps from "./Collaps";


const findApartmentID = (id) => {
  return apartment.find((apartment) => apartment.id === id);
};

const Apartment = () => {
  const { id } = useParams();
  const apartmentData = findApartmentID(id);
  const tags = apartmentData.tags;
  const description = apartmentData.description;
  const equipements = apartmentData.equipements;
  return (
    <div className="fiche_logement">
      <div className="carrousel">
        <img src={apartmentData.cover} alt={apartmentData.title} />
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
      </Tags>
     
      <div className="title">
        <Collaps title={"Description"}>{description}</Collaps>
        <Collaps title={"Equipement"}>
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
