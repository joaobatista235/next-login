import LoginCard from "../src/components/loginCard/LoginCard"
import styles from '../styles/Login.module.css'


export default function CadastroPage() {
    return (
        <div className={styles.background}>
            <LoginCard title="Crie sua conta">
                ABCD
            </LoginCard>
        </div>
    )
}