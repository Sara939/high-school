import Students from "./Students.component";
// import { myArray } from "./Students.component";
// import Student from "./Student.component";
import StudentsTable from "./students-table";


function Home(props){
    let mydate=new Date("1987-08-02")
    return(
    <div>
        {/* <h2>
            Welcome {props.Fname}
        </h2> */}
        
        {/* <Student fname= "lala" lname="lik" date= {mydate.getFullYear()} pic="mypic.webp"/> */}

        {/* <Students/> */}
        <StudentsTable/>
    </div>
    )
}
export default Home;