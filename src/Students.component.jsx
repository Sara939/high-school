import { Component } from "react";
import Student from "./Student.component";

class Students extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>

                {
                    myArray.map((stu)=>{
                        return(
                        <Student fname={stu.fname} lname={stu.lname} date={stu.date} pic={stu.pic}/>)
                    })
                }
{/* 
                <Student  fname= "srara" lname="hghg" date= "fjf" pic="mypic.webp"/>
                <Student  fname= "srara" lname="hghg" date= "fjf" pic="mypic.webp"/> */}
            </div>
        )
    }
}
export const myArray= [
{fname:"srara", lname:"hghg", date:"fjf", pic:"mypic.webp"},
{fname:"srara", lname:"hghg", date:"fjf", pic:"mypic.webp"},
{fname:"srara", lname:"hghg", date:"fjf", pic:"mypic.webp"}

]
export default Students;