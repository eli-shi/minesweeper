import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { dispatch } = useAuthContext()

    const login = async (name: string, email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })

        })

        console.log('response: ', response)

        const json = await response.json()

        console.log('json: ', json)
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
            console.log('error: ', json.error)
        }

        if (response.ok) {
            //save to local storage
            localStorage.setItem('user', JSON.stringify(json))
            console.log('saved to local storage')
            //update authcontext
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}