import { useState } from "react";

const Form = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        isChecked: false
    });

    function change(event){
        const{name, value, checked, type} = event.target;
        setFormData(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked :value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("Login success");
        } else{
            console.log('Passwords do not match');
        }

        if(formData.isChecked){
            console.log("thanks for subscribbing");
        }
        
    }
    return (
        <form onSubmit={handleSubmit} className="p-64">
            <input onChange={change} className="border block mb-2 border-black " type="email" placeholder="Email" name="email" value={formData.email}/>  
            <input onChange={change} className="border block mb-2 border-black" type="password" placeholder="Password" name="password" value={formData.password}/>
            <input onChange={change} className="border block border-black" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword}/>
            <input type="checkbox" className="mb-2" checked={formData.isChecked} id="isChecked" name="isChecked" onChange={change}/>
            <label className="ml-2" htmlFor="isChecked">I want to Join the NewsLetter</label>
            <button className="bg-blue-400 p-2 block">Sign Up</button>
        </form>
    )
}

export default Form;