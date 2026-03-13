//function Welcome(props){
function Welcome({name}){
    return(
        <div>
            <h2>Welcome Component</h2>
            {/*<h3>{props.name}</h3>*/}
            <h3>{name}</h3>
            <h3>{props.greet}</h3>
            <p>This is our first reusable component</p>
        </div>
    )

}
export default Welcome