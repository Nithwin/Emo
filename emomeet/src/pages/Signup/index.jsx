import { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import { motion } from 'framer-motion';
import Group from '../../components/Group'
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.message === 'User created successfully') {
                alert('Signup successful');
                // Redirect or perform other actions
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return (
        <section className="min-h-dvh flex flex-col">
            <Header />
            <div className="px-[0.5rem] flex-1 flex flex-col justify-center">
                <div className="lg:flex lg:justify-between lg:items-center h-full ">
                    <div className="lg:w-1/2 flex justify-center">
                    <motion.div className="h-full w-full"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                         <Group className="w-full h-full " />
                         </motion.div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                    <div className="p-[2rem] max-w-[38rem]">
                        <div className="bg-grey px-[2rem] pb-[1.5rem] rounded-4xl overflow-hidden flex flex-col gap-3 lg:gap-5">
                            <div className="flex justify-center">
                                <div className="bg-lightblue px-[3rem] py-[1rem] rounded-b-3xl relative ">
                                    <span className="absolute h-5 w-5 bg-transparent top-0 -left-5 rounded-tr-full shadow-topleft"></span>
                                    <p className="uppercase text-white font-bold text-2xl font-audiowide tracking-wider lg:text-4xl">emo</p>
                                    <span className="absolute h-5 w-5 bg-transparent top-0 -right-5 rounded-tl-full shadow-topright"></span>
                                </div>
                            </div>
                            <p className="text-center font-semibold text-xl uppercase lg:text-2xl">Signup</p>
                            <div className="bg-darkblue text-white p-4 lg:p-6 py-[1.5rem] lg:py-[2rem] flex flex-col gap-6 rounded-3xl lg:gap-9">
                                <div className="border-1 rounded-full flex items-center px-[0.5rem] lg:px-[1rem]">
                                    <IoPerson className="size-4 lg:size-6" />
                                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="w-full placeholder:text-gray-400 p-2 focus:border-0 focus:outline-0 lg:text-2xl" placeholder="Email" />
                                </div>
                                <div className="border-1 rounded-full flex items-center px-[0.5rem] lg:px-[1rem]" >
                                    <FaLock className="size-4 lg:size-6" />
                                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="w-full placeholder:text-gray-400 p-2 focus:border-0 focus:outline-0 lg:text-2xl"  placeholder="Password"/>
                                </div>
                                <div className="border-1 rounded-full flex items-center px-[0.5rem] lg:px-[1rem]" >
                                    <FaLock className="size-4 lg:size-6" />
                                    <input type="password" name="password" id="password"  onChange={(e) => setConfirmPassword(e.target.value)} className="w-full placeholder:text-gray-400 p-2 focus:border-0 focus:outline-0 lg:text-2xl"  placeholder="Confirm-Password"/>
                                </div>
                                <div>
                                    <button onClick={handleSubmit} className="bg-lightblue w-full px-[2rem] py-[0.5rem] rounded-full font-semibold text-lg uppercase lg:text-2xl">Verify</button>
                                </div>
                            </div>
                            <p className="uppercase text-sm text-center font-semibold lg:text-xl">member at Emo ? <Link to={'/signin'} className="text-lightblue">sign in</Link> </p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup