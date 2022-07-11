import React from 'react'
import HotItemCard from  "./HotItemCard.js"
import "../styles/HotAccess.css"

const HotAccess = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className="HotAccess">
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
        </div>



        <div>
           {music && music.map((item,index)=>(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} link={item.url} />

           ))} 
           {smartDevice && smartDevice.map((item,index)=>(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} link={item.url}/>

           ))}
           {home && home.map((item,index)=>(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} link={item.url}/>

           ))}
           {lifeStyle && lifeStyle.map((item,index)=>(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} link={item.url}/>

           ))} 
           {mobileAccessories && mobileAccessories.map((item,index)=>(
              <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} link={item.url}/>

           ))}   
            {(music || smartDevice || home || mobileAccessories) &&
               <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" link={"https://www.mi.com/in/products"}/>
            }
            

        </div>
    </div>
  )
}

export default HotAccess