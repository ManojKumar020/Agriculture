import "./cerealtype.css";
import { Link } from "react-router-dom";

function Cerealtype({img, Name1, Name2}) {
  return (
      <div className="post">
           <img
      className="postImg"
      src={img}
      alt=""
    />
          <div className="postInfo">
            <Link className=" link " to="/paddy">
            <span className="postTitle">{Name1}</span>
            </Link>
            <Link className=" link " to="/ragi">
            <span className="postTitle">{Name2}</span>
            </Link>
         
          </div>  
      </div>
      
  )
}

export default Cerealtype