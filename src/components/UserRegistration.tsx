import { useEffect, useRef, useState } from 'react'

const UserRegistration = () => {

    const [state, setState] = useState<Promise | undefined>(undefined)

    const refEmail = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)

    const bodyReq = {
        email: refEmail.current,
        password: refPassword.current
    }

    useEffect(() => {
        const register = async () => {
            const post = await fetch('http://localhost:3000/api/auth/register',
                {
                    method: 'POST',
                    headers: { authorization: "test-token" },
                    body: JSON.stringify(bodyReq)
                })

            if (post.ok) {
                const response = post.json()
                setState(response)
            }

        }
        register()
    }, [state]
    )

    return (
        <div>
            <input placeholder='Email' ref={refEmail}></input>
            <input placeholder='Password' ref={refPassword}></input>
            <button onClick={() => useEffect} >Login</button>
        </div>
    )
}

export default UserRegistration