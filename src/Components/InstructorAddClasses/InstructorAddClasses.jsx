import { useContext } from "react";
import { authContext } from "../../Shared/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";




const InstructorAddClasses = () => {


    const { darkmod,user } = useContext(authContext)

    const handleSubmit = (event)=>{
        event.preventDefault();
        const class_name = event.target.Class_name.value;
        const class_image = event.target.url.value;
        const instructor_name = user?.displayName;
        const instructor_email = user?.email;
        const instructor_image = user?.photoURL;
        const available_seats = event.target.seat.value;
        const price = event.target.price.value;
        const enrolled = 0;
        const syllabus = [event.target.feature1.value,event.target.feature2.value,event.target.feature3.value];
        const status = 'pending'

        const classData = {class_name,class_image,instructor_name,instructor_email,instructor_image,available_seats,price,enrolled,syllabus,status}



        fetch('https://sports-server-nafisofficial.vercel.app/addedClass',{
                        method:'POST',
                        headers: {'content-type':'application/json'},
                        body:JSON.stringify(classData)
                    })
                    .then(res=>res.json())
                    .then(toast.success("Class Added successfully"))
                    
                    event.target.reset();
    }


    return (
        <div className={`w-10/12 mx-auto  my-12 ${darkmod ? 'text-white' : ''}`}>
            <h1 className='text-4xl text-center my-6 text-[#37B34A]'>Provide your class details</h1>
            <form onSubmit={handleSubmit} action="" className='border border-1 p-6 rounded bg-[#85e793] text-auto '>
                <div>
                    <label htmlFor="Class_name">Class Name:</label><br />
                    <input  className='input input-bordered w-11/12 input-md' type="text" name="Class_name" placeholder='add a class name' id="Class_name" />
                </div>
                <div>
                    <label htmlFor="url">Image url:</label><br />
                    <input  className='input input-bordered w-11/12 input-md' type="text" name="url" placeholder='photo url' id="photo_url" />
                </div>
                <div>
                    <label htmlFor="name">Available Seat:</label><br />
                    <input  className='input input-bordered w-11/12 input-md' type="number" name="seat" placeholder='available seat' id="seat" />
                </div>
                <div>
                    <label htmlFor="name">Price:</label><br />
                    <input  className='input input-bordered w-11/12 input-md' type="number" name="price" placeholder='price' id="name" />
                </div>
                <div>
                    <label htmlFor="name">Add here three topic what will you teach:</label><br />
                    <div className="w-11/12 flex gap-4">
                        <input  className='input input-bordered  input-md' type="text" name="feature1" placeholder='feature1' id="feature1" />
                        <input  className='input input-bordered  input-md' type="text" name="feature2" placeholder='feature2' id="feature2" />
                        <input  className='input input-bordered  input-md' type="text" name="feature3" placeholder='feature3' id="feature3" />
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <button className='btn btn-md bg-[#37B34A] text-white hover:bg-[#41bd53] hover' type="submit">Submit</button>
                </div>
            </form>


        </div>
    );
};

export default InstructorAddClasses;