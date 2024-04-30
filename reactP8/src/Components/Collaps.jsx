import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collaps = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className={title}>
      <FontAwesomeIcon icon={faAngleDown} onClick={toggleOpen} className={`svg-inline--fa fa-angle-down icon ${open ? 'rotate' : ''}`}/>
      <button>{title}</button>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Collaps;