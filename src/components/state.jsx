import React from 'react'
import { useState } from 'react';
import Cards from './cards';

const State = () => {
    
    const data = [
        {
          image:
            "https://img.freepik.com/free-photo/leather-boots_1203-8146.jpg?size=626&ext=jpg&ga=GA1.2.39430223.1686065439&semt=sph",
          username: "CowBOY",
          price:"560$",
          about:"feels like a farm"
        },
        {
          image:
            "https://t4.ftcdn.net/jpg/00/56/81/35/240_F_56813558_hJutOrLUn7S7I1oRYkOmoEk91mQjirxG.jpg",
          username: "Leather",
          price:"340$",
          about:"could you wear more leather?"
        },
        {
          image:
            "https://as1.ftcdn.net/v2/jpg/04/14/29/72/1000_F_414297231_eXwIVL1HK9ICYzSvZZmBEkNx3kqTNGPs.jpg",
          username: "John Snow",
          price:"560$",
          about:"winter is coming"
        }
        
      ]
    const [change,setChange] = useState([]);
    const handleclick = ()=>{
        if(change.length==0)
        setChange(data);
        else
        setChange([]);
    }
  return (
    <div>
    {
        change.length === 0 ? <h1>Card Not Found</h1>
        :
        <div className="card-list">
        {
        data.map((el) => {
            return <Cards username={el.username} image={el.image} price={el.price} about={el.about}/>;
          })
        }
      </div>
 
        }

    <button onClick={handleclick}>click</button>
    </div>
  )
}

export default State