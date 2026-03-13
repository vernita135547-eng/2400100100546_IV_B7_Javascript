function Students(props){
    return(
        <div>
            <h2>!!Hello This is my Student Component!!</h2>
            <h3>{props.name}</h3>
            <h3>{props.rollno}</h3>
            <h3>{props.course}</h3>
        </div>
    )

}
export default Students