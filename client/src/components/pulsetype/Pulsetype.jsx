import "./pulsetype.css";
import { Link } from "react-router-dom";

function Pulsetype({img, Name1, Name2}) {
  return (
      <div className="post">
           <img
      className="postImg"
      src={img}
      alt=""
    />
          <div className="postInfo">
            <Link className=" link " to="/Redgram">
            <span className="postTitle">{Name1}</span>
            </Link>
            <Link className=" link " to="/Greengram">
            <span className="postTitle">{Name2}</span>
            </Link>
         
          </div>  
      </div>
      
  )
}

export default Pulsetype