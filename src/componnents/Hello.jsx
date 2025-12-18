import "./Hello.css";
function Hello(props) {
  const name=  props.name;
  return <p className='Fateme'>salam be {name}</p>
}
export default Hello;