export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':"a40443527amsh720f5ddbdf25229p1aa2fdjsn0c3d073823af",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData= async(url,options)=>{
const response= await fetch(url,options);
const data=await response.json();
return data;
}