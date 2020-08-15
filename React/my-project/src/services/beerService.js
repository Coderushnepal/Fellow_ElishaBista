import http from "../utils/http";
// import {dummyBeersData} from '../constants/dummyData';

export const fetchBeers=async ()=>{
      const {data} =await http.get("/beers");
    
      return data;
  
};
export const fetchBeerById=async (id)=>{
      const { data }=await http.get(`/beers/${id}`);
      return data[0];
}
