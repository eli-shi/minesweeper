import { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log(email, password)

    }


    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3> Sign Up</h3>
            <label>Name:</label>
            <input type="name" onChange={(e) => setName(e.target.value)} value={name} />
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

            <button> Sign Up </button>
        </form>
    )
}

export { Signup }