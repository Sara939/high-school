import Students from "./Students.component";
import { myArray} from "./Students.component"
function StudentsTable(){
    return(
        <table>
            <thead><th>fname</th><th>lname</th><th>date</th><th>pic</th></thead>
            <tbody>
            {myArray.map((stu)=>{
                        return(<tr>
                        <td>{stu.fname}</td>
                        <td>{stu.lname}</td>
                        <td>{stu.date}</td>
                        <td>{stu.pic}</td>
                    </tr>)}
                
                    )}
            </tbody>

        </table>
    )
}
export default StudentsTable;