import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Login.module.css'

import LoginCard from "../../src/components/loginCard/LoginCard"
import Input from '../../src/components/input/input'
import Button from '../../src/components/button/button'

export default function CadastroPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {
        
        try {
            event.preventDefault()
            const response = await fetch(`/api/user/cadastro`, {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            const json = await response.json()
            console.log(response.status)
            console.log(json)
        } catch (err) {

        }
        
        
    }

    return (
        <div className={styles.background}>
            <LoginCard title="Crie sua conta">
                <form onSubmit={handleForm} className={styles.form}>
                    <Input type="text" placeholder="Seu nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}} />
                    <Input type="email" placeholder="Seu e-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}} />
                    <Input type="password" placeholder="Sua senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}} />
                    <Button>Cadastrar</Button>
                    <Link href="/login">Ja possui conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}