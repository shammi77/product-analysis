import { useEffect, useState } from "react"

const showReview = () => {
   const [review, setReview]=useState([]);
   useEffect( () => {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res=>res.json())
            .then(data=>setReview(data));
},[]);
    return [review,setReview];
 }
export default showReview;
