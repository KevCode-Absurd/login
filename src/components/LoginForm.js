import React, {useState} from 'react'

function LoginForm({ Login,error }) {
    const [details,setDetails] = useState({name:'', email:'',password:''});
    
    const submitHandler = e => {
        e.preventDefault(); 

        Login(details);
    }
    
    
    return (

        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                {(error != '') ? ( <div className='error'>{error}</div>) : ''}
                <div className = 'form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value= {details.Name} /> 
                </div>
                <div className = 'form-group'>
                    <label htmlFor='email'>Email ID:</label>
                    <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value= {details.EMail}/> 
                </div>
                <div className = 'form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value= {details.Password}/> 
                </div>
                <input type ='submit' value='login' />
            </div>
        </form>    

    )
}

export default LoginForm
