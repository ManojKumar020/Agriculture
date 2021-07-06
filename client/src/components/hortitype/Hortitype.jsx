import "./hortitype.css";
import { Link } from "react-router-dom";


function Hortitype({img, Name1,Name2}) {
    return (
        <div className="horti">
        <img
   className="hortiImg"
   src={img}
   alt=""
 />
       <div className="hortiInfo">
        <Link className="Link" to="/cereal">
        <span className="hortiTitle">{Name1}</span>
        </Link>

        <Link className="Link" to="/pulses">
        <span className="hortiTitle">{Name2}</span>
        </Link>
         
       </div>  
   </div>
    )
}

export default Hortitype
