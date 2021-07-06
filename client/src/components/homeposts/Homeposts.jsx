import "./homeposts.css";
import  Homepost from "../homepost/Homepost";

export default function Homeposts() {
    return (
        <div className="homeposts">
            <Homepost img="https://www.bentoli.com/wp-content/uploads/2017/07/CommercialFarming-1.jpg" 
            Name1="Agriculture"/>
            <Homepost img="https://krishijagran.com/media/8924/horticulture.jpg" 
             Name2="Horticulture"/>
            <Homepost img="https://www.azernews.az/media/2018/12/05/sericulture.jpg"
             Name3="Sericulture"/>
            <Homepost img="https://media.mehrnews.com/d/2019/05/20/3/3133936.jpg"
             Name4="Fishery"/>
            <Homepost img="https://zirconiainc.com/wp-content/uploads/2019/04/biosec-photo-1000x600.jpg"
             Name5="Animal Husbandry"/> 
            <Homepost img="https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmfDL6u4qBAAFwYstjKdMtw4wjuQ32w7touVLgUzSNfPpZ/2804_maquinas_agricola_2-1.jpg" 
             Name6="Farm Mechanism"/>
        </div>
    )
}


