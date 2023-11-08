import {useForm} from 'react-hook-form'
import {DevTool, Devtool} from '@hookform/devtools'

let renderCount= 0 

type FormValues={
  name: string;
  email: string;
  information: string;
  wishlist: string;
};
function App() {
  const form= useForm<FormValues>({});
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;
  const onSubmit = (data: FormValues) => {
        console.log('Form sent to Santa!', data)
  }
  
renderCount ++
  return (
    <div>
      <h1>Join Actionstep&#39;s 2023 Secret Santa!({renderCount/2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

 <div className='form-control'>
       <label htmlFor="Name"> Name </label>
       <input type="Text" 
              id="Name" 
              autoComplete="given-name"
              {...register("name",{ required:{
                value: true,
                message:"Name is required",} })} 
               />
               <p className='error'>{errors.name?.message}</p>
               </div>

            <br/>
<div className='form-control'>
        <label htmlFor="Email"> Email </label>
        <input type="email" 
               id="Email" 
               autoComplete= "on"
               {...register("email", {
                pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email Format",
               },
               validate: {
                notAccounts: (fieldValue) => {
                return (
                  fieldValue !== "accounts@actionstep.com" ||
                  "Enter a different email address"
                
                );
               },
               notSupport: (fieldValue) => {
                return (
                  fieldValue !== "support@actionstep.com" ||
                  "Enter a different email address"
                
                );
               },
                notPartnerships: (fieldValue) => {
                return (
                  fieldValue !== "partnerships@actionstep.com" ||
                  "Enter a different email address"
                );            
               },
                  },         
                       })}

               />
               <p className='error'>{errors.email?.message}</p>
               </div>

            <br/>
<div className='form-control'>
        <label htmlFor="Information"> Information: </label>
        <textarea id="Information" 
                  rows= {4} 
                  cols= {30}
                  placeholder="Tell us all about yourself! Likes, Dislikes and allergies"
                  {...register("information",{ required:{
                    value: true,
                    message:"Information is required",}                
                  })} />

                  <p className='error'>{errors.information?.message}</p>

                  </div>

 <div className='form-control'>
          <label htmlFor="wishlist"> Wishlist: </label>
        <textarea id="wishlist"
                  rows= {1} 
                  cols= {50}
                  placeholder="Got a wishlist? Link it here! (this is optional)" 
                  {...register("wishlist")} />
                 
                  </div>

                
            <br/>
     
        <button>Submit</button>
            <br/>
        <input type="reset"/>
              </form>
              
              <DevTool control={control} />
    </div>
  )
}

export default App 
