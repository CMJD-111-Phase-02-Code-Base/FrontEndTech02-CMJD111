import { Table } from "react-bootstrap";
import {useEffect, useState} from "react";
import {getCourseMaterial} from "../service/CourseMaterialService";
import {CourseMaterialodel} from "../model.CourseMaterialodel";


export const CourseMaterial = () =>{
    const [material,setMaterial] = useState<CourseMaterialodel[]>([]);

    useEffect(() => {
        const getCourseaterialData = async () =>{
           const courseMaterialData = await getCourseMaterial();
            console.log(courseMaterialData);
            setMaterial(courseMaterialData);
        }
            getCourseaterialData();
    }, []);

    const tblHeaders : string [] = [
        "Material ID",
        "File Name",
        "Material Type",
        "Material",
        "Upload Time",
        "Course ID",
        "Option",
    ];

    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
            {tblHeaders.map((headings,index)=>(
                   <th key={index}>{headings}</th>
            ))};
        </tr>
      </thead>
      <tbody>
      {material.map((mat,index)=>(
          <tr key={index}>
              <td>{mat.materialId}</td>
              <td>{mat.fileName}</td>
              <td>{mat.materialType}</td>
              <td>Test</td>
              <td>{mat.uploadAt}</td>
              <td>{mat.courseId}</td>
          </tr>
      ))}
      </tbody>
    </Table>
        </>
    );
} 