import LoginCard from "../src/components/loginCard/LoginCard"
import styles from '../styles/Login.module.css'

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <LoginCard title="Entre em sua conta">
                ABCD
            </LoginCard>
        </div>
    )
}