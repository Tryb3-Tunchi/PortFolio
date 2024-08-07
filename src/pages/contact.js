import { Link } from "react-router-dom";
import ContactMe from "./contactme";

const Contact = () => {
    return ( <div className=" mt-28 w-5/6 m-auto">
        <h2 className="font-semibold text-4xl text-center">Whats Next</h2>
        <p className=" text-center my-4">Contact me here <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus architecto ducimus, error quis tempora impedit.</p>
        <div className="text-center my-4"><button className=" p-2 rounded-lg hover:shadow-lg hover:scale-y-110 border-2"><Link to="./contactme">contact</Link> </button></div>
        
    </div> );
}
 
export default Contact;