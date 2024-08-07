import { useEffect } from "react";

const Worked = () => {

    const showFiiro = () =>{
        const shFirro = document.getElementById("Fiiro")
        if (shFirro.classList.contains("hidden")) { shFirro.classList.remove("hidden");
            shFirro.classList.add("block");
        }else{ shFirro.classList.remove("block");
            shFirro.classList.add("hidden")
        }
    };
    useEffect(() => {
        showFiiro()
    },[])

    const showMira = () =>{
        const shMira = document.getElementById("Mira")
        if (shMira.classList.contains("hidden")) { shMira.classList.remove("hidden");
            shMira.classList.add("block");
        }else{ shMira.classList.remove("block");
            shMira.classList.add("hidden")
        }
    };

    const showPulse = () =>{
        const shMira2 = document.querySelector(".Pulse")
        if (shMira2) {
            console.log("yse e work");
            
        }
    }


    return ( <div className="mt-20 w-10/12 m-auto">
        <div className="flex items-end mb-6 "><p>02.</p> <p className="ml-2  text-4xl font-extrabold "> Where I've Worked</p></div>
        <ul className="flex justify-between  border-b-2 my-4">
            <li className="cursor-pointer hover:scale-110" onClick={showFiiro} >FIIRO</li>
            <li className="cursor-pointer hover:scale-110" onClick={showMira}>Mira Tech</li>
            <li className="cursor-pointer hover:scale-110" onClick={showPulse}>Intern Pulse</li>
        </ul>
    </div> );
}
 
export default Worked;