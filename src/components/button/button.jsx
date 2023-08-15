import styles from './button.module.css'

export default function Button({ childre, ...props }) {
    return (
        <Button className={styles.input} {...props}>{children}</Button>
    )
}