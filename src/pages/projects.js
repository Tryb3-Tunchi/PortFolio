import { CiUser } from "react-icons/ci";
const Projects = () => {
    return ( <div className=" mt-28 w-5/6 m-auto">
        <h2 className="font-semibold text-4xl text-center">Other Projects</h2>
        <p className="text-center">heres the Archive</p>
        <div className="grid lg:grid-cols- md:grid-cols-2 mx-16 md:mx-10 ">
        <div className="hover:scale-y-105 overflow-y-hidden bg-yellow-50 rounded-md m-1 p-4">
            <div className="flex justify-between px-2" > <CiUser /> <CiUser /> </div>
            <p className="font-semibold py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, excepturi.</p>
            <p className="text-sm pb-6  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veniam?</p>
        </div>
        <div className="hover:scale-y-105 overflow-y-hidden bg-yellow-50 rounded-md m-1 p-4">
            <div className="flex justify-between px-2" > <CiUser /> <CiUser /> </div>
            <p className="font-semibold py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, excepturi.</p>
            <p className="text-sm pb-6  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veniam?</p>
        </div>
        <div className="hover:scale-y-105 overflow-y-hidden bg-yellow-50 rounded-md m-1 p-4">
            <div className="flex justify-between px-2" > <CiUser /> <CiUser /> </div>
            <p className="font-semibold py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, excepturi.</p>
            <p className="text-sm pb-6  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veniam?</p>
        </div>
        <div className="hover:scale-y-105 overflow-y-hidden bg-yellow-50 rounded-md m-1 p-4">
            <div className="flex justify-between px-2" > <CiUser /> <CiUser /> </div>
            <p className="font-semibold py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, excepturi.</p>
            <p className="text-sm pb-6  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veniam?</p>
        </div>
        </div>
    </div>  );
}
 
export default Projects;