export default function Button(props){
    return (
        <button className="btn" onClick={props.func}>{props.text}</button>
    )
}