import PropTypes from "prop-types";

const Thumb = ({gallery}) => {
    return (
        gallery.map((gallery)=>(
            <div className="thumb" key={gallery.id}>
                <img src={gallery.cover} alt={gallery.title} />
                <h3>{gallery.title}</h3>          
            </div>
        ))    
    );
};

Thumb.PropTypes ={
    gallery: PropTypes.array.isRequired
}

export default Thumb;
