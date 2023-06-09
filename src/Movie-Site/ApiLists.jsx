import{React, useEffect, useState} from "react";
import Cards from "./Cards";

function ApiLists() {
    const [searchbr,setSearchbr]=useState("");
    const [show,setshow] = useState([]);
    const handleChange = (e) =>{
        setSearchbr(e.target.value);
    }
    const handleSearch = async() =>{
        await fetch(`http://www.omdbapi.com/?s=${searchbr}&apikey=23290865`,{
            method:"GET"
        }).then((res)=>res.json())
        .then((data)=>{
            setshow(data.Search);
        });
    }

//   useEffect(()=>{
//     handleSearch();
//   },[searchbr])
    return(
        <div>
            <input type="text" placeholder="Search" 
            value={searchbr}
            onChange={(e)=>handleChange(e)}/>
            <button onClick={handleSearch}>Search</button>
            {
             (searchbr !== "") ? (
                (show.length>0 )?(
                    show.map((item)=>{
                        return(
                            <Cards poster={item.Poster} title={item.Title} type={item.Type} year={item.Year}/>
                        )
                    })
                ):(<h1>No data Found</h1>)): (<h1>Search For Results</h1>)
            }
        </div>
    )
}
export default ApiLists;