import axios from "axios";

export const getCourseMaterial = async ()=>{
    try{
        const response = await axios.get("");
        return response.data
        console.log("Course Material Response:", response)
    }catch(err){
        console.error(err)
    }
}