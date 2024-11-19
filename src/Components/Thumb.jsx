import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Thumb = ({gallery}) => {
    return (
        gallery.map((housing)=>(
            <Link to ={`/apartment/${housing.id}`} className="thumb" key={housing.id}>
                <img src={housing.cover} alt="" />
                <h3><span>{housing.title}</span></h3>         
            </Link>
        ))    
    );
};

Thumb.propTypes ={
    gallery: PropTypes.array.isRequired
}

export default Thumb;
