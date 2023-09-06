import { useRef } from 'react'


const UserLogin = () => {


    const refEmail = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)

    fetch('http://localhost:3000/api/login')


    return (
        <div>
            <input placeholder='Email' ref={refEmail}></input>
            <input placeholder='Password' ref={refPassword}></input>
            <button>Login</button>
        </div>
    )
}

export default UserLogin