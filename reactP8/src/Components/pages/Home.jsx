import Thumb from "../Thumb";
import gallery from "../../data/fichier.json";

const Home = () => {
    return (
            <div className="home">
                <div className="banner">
                <img src="/src/assets/images/montagne.png" alt="image d'une montagne" />
                <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className="gallery">
                    <Thumb gallery={gallery}/>
                </div>
            </div>
    );
}

export default Home;
