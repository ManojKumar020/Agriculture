import "./post.css";

function Post({img, Name, id}) {
    return (
        <div className="post">
             <img
        className="postImg"
        src={img}
        alt=""
      />
            <div className="postInfo">
              <span className="postTitle">{Name}</span>
            </div>  
        </div>
        
    )
}

export default Post


