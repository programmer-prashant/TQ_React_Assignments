// 1. Create a useForm custom hook to accept any number of input
// and handle and handle any callback

import React from 'react'
import useInput from './useInput'

function UserForm() {
   

    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,binLastName,resetLastName]=useInput('')
    const submithandler=e=>{
        e.preventDefault()
        alert(`welcome ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <div>
                    <label> first name</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label> Last name</label>
                    <input type="text" {...binLastName}/>
                </div>
                <button type="submit"> submit</button>
            </form>
        </div>
    )
}

export default UserForm
