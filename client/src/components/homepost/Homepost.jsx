import "./homepost.css";
import { Link } from "react-router-dom";

function Homepost({img, Name1, Name2, Name3, Name4, Name5, Name6}) {
  return (
      <div className="post">
           <img
      className="postImg"
      src={img}
      alt=""
    />
          <div className="postInfo">
            <Link className=" link " to="/agriculture">
            <span className="postTitle">{Name1}</span>
            </Link>
            <Link className=" link " to="/horticulture">
            <span className="postTitle">{Name2}</span>
            </Link>
            <Link className=" link " to="/sericulture">
            <span className="postTitle">{Name3}</span>
            </Link>
            <Link className=" link " to="/fishery">
            <span className="postTitle">{Name4}</span>
            </Link>
            <Link className=" link " to="/animal husbandary">
            <span className="postTitle">{Name5}</span>
            </Link>
            <Link className=" link " to="/farm mechanism">
            <span className="postTitle">{Name6}</span>
            </Link>
          </div>  
      </div>
      
  )
}

export default Homepost
