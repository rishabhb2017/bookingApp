import Correct from '../../assets/correct.png';
import Wrong from '../../assets/wrong.png';

const ImageIdicator = ({isVisible,isAvaialble}) =>{
 return isVisible ? <img src={isAvaialble ? Correct : Wrong} width={30} height={30} /> : null
} 

export default ImageIdicator;