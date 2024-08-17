
import '../button/style.css'
import { useNavigate } from 'react-router-dom';
const Button = ({content}) => {
    const navigate = useNavigate()
    function goTo(e){
        let con = content.toLowerCase()
        if(con==="dashboard"){
            navigate('/dashboard')
        }
        
    }
  return (
    <>
      <button className="landingBtn" onClick={goTo}>{content}</button>
    </>
  );
}
export default Button;
