import { Table } from "react-bootstrap";

export const CourseMaterial = () =>{
    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Material ID</th>
          <th>File Name</th>
          <th>Material Name</th>
          <th>Material</th>
          <th>Upload Time</th>
          <th>Course ID</th>
          <th>Option</th>
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