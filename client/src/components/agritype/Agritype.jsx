import "./agritype.css";
import { Link } from "react-router-dom";


function Agritype({img, Name1,Name2}) {
  return (
      <div className="agri">
           <img
      className="agriImg"
      src={img}
      alt=""
    />
          <div className="agriInfo">
           <Link className="Link" to="/cereal">
           <span className="agriTitle">{Name1}</span>
           </Link>

           <Link className="Link" to="/pulses">
           <span className="agriTitle">{Name2}</span>
           </Link>
            
          </div>  
      </div>
      
  )
}

export default Agritype
