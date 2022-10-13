function Salamu(props){
    return(
        <div>
    
        <h2>Hello {props.name} a.k.a {props.heroName}</h2>
        {props.children}
        </div>

    )
    }

    export default Salamu;
