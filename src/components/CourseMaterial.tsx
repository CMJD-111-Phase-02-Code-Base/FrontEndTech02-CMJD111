import { Table } from "react-bootstrap";

export const CourseMaterial = () =>{
    const tblHeaders : string [] = [
        "Material ID",
        "File Name",
        "Material Name",
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
        </>
    );
} 