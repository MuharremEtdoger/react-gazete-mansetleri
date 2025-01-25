import Gazete from "./Gazete/Gazete";
import gazeteMansetleri from '../../public/gazete-mansetleri-v2.json';
export default function GazeteListesi() {
    const gazeteMansetleriObjArray=[];
    for (var key in gazeteMansetleri) {
        gazeteMansetleriObjArray.push(gazeteMansetleri[key]);       
    }
    return (
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4'>
        {
            gazeteMansetleriObjArray.map((g) => (             
                <Gazete gObj={g} key={g.title} />
            ))
        }
      </div>
    )
  }