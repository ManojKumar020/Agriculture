import "./posts.css";
import  Post from "../post/Post";

export default function Posts() {
    return (
        <div className="posts">
           <Post img="https://www.bentoli.com/wp-content/uploads/2017/07/CommercialFarming-1.jpg" 
            Name="Agriculture"/>
           
            <Post img="https://krishijagran.com/media/8924/horticulture.jpg" 
             Name="Horticulture"/>
            <Post img="https://www.azernews.az/media/2018/12/05/sericulture.jpg"
             Name="Sericulture"/>
            <Post img="https://media.mehrnews.com/d/2019/05/20/3/3133936.jpg"
             Name="Fishery"/>
            <Post img="https://zirconiainc.com/wp-content/uploads/2019/04/biosec-photo-1000x600.jpg"
             Name="Animal Husbandry"/> 
            <Post img="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmfDL6u4qBAAFwYstjKdMtw4wjuQ32w7touVLgUzSNfPpZ/2804_maquinas_agricola_2-1.jpg" 
             Name="Farm Mechanism"/>

            
        </div>
    )
}


