export interface CourseMaterialodel {
     materialId : string;
     fileName:string;
     materialType :string;
     material : File | null;
    uploadAt : string
    courseId :string
}