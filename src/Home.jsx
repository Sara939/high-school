import Student from "./Student.component";

function Home(props){
    let mydate=new Date("1987-08-02")
    return(
    <div>
        <h2>
            Welcome {props.Fname}
        </h2>
        <Student fname= "lala" lname="lik" date= {mydate.getFullYear()} pic="mypic.webp"/>
        
    </div>
    )
}
export default Home;