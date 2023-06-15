import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, handleEmailVerification, updateUser, emailVerificationSent } = useContext(AuthContext)
    const [signupError, setSignupError] = useState(' ')

    // const handleSignup = data => {
    //     setSignupError('')
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;

    //             sendVerificationEmail(user)
    //                 .then(() => {
    //                     toast.success('User Created Successfully. Please check your email for verification.');
    //                 })

    //             // toast('User Created Succesfully')

    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(() => { })
    //                 .catch(err => console.log(err))
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //             setSignupError(err.message)
    //         });
    // };
    const handleSignup = (data) => {
        setSignupError('');
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                handleEmailVerification(user)
                    .then(() => {
                        toast.success('User Created Successfully. Please check your email for verification.');
                    })
                    .catch((err) => {
                        console.log(err.message);
                        setSignupError(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
                setSignupError(err.message);
            });
    };

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-97 p-7'>
                <h2 className="text-xl text-center">Signup</h2>
                {emailVerificationSent ? (
                    <p className="text-center text-primary">A verification email has been sent. Please check your email.</p>
                ) : (
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Name </span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: 'Name is required'
                            })} />
                        {errors.name && <p className='text-red-600' >{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Email </span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: 'Email Address is required'
                            })} />
                        {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"> Password </span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be atleast 6 character' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, message: 'Password Must be Strong' }
                            })} />
                        {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}

                        <label className="label"> <span className="label-text"> Forget Password? </span></label>

                    </div>

                    <input className='btn btn-accent w-full' value='Signup' type="submit" />
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </form>)}
                <p>Already Have an Accoount? <Link className='text-secondary' to='/signup'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">GOOGLE SIGNUP</button>
            </div>
        </div>
    )
}

export default SignUp;
