import axios from "axios";
const baseURL = "http://localhost:8035/courseregis/api/v1/material"
export const getCourseMaterial = async ()=>{
    try{
        const response = await axios.get(`${baseURL}`);
        return response.data
        console.log("Course Material Response:", response)
    }catch(err){
        console.error(err)
    }
}