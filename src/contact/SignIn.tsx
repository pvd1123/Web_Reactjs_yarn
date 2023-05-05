import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";


const loginSchema = Yup.object({
    username: Yup.string().min(4).max(255).required(),
    usernumber: Yup.number().required(),
    useremail: Yup.string().required().email()
  });
  
  type FormData = Yup.InferType<typeof loginSchema>;
  
  
  const SignIn = () => {
  
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(loginSchema)
    });
    const onSubmit = (data: FormData) => {
      console.log(data)
    };
  
   
  
    return (
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          
           <input {...register("username")} type="text"  name='username' placeholder='username' />
           <p>{errors.username?.message}</p>
           <input {...register("usernumber")} type="number"  name='usernumber' placeholder='usernumber' />
           <p>{errors.usernumber?.message}</p>
           <input {...register("useremail")} type="email"  name='useremail' placeholder='useremail'/>
           <p>{errors.useremail?.message}</p>
           <button type='submit'>Login</button>
        </form>
      </div>
    )
  }

export default SignIn