export default function Item(props){
 const {number, freezed, id} =  props.obj
 const classnames = freezed ? 'dice-item freezed' : 'dice-item';
    return (
        <>
         
          <div className={classnames}  id={id} onClick={props.clickFunc}>
            {number}
          </div>
        
        </>
    )
}