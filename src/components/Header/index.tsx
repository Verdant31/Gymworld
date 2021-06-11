import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            
            <div className={styles.headerContent}>
                <h1>GYMWORLD
                    <img src="/images/logo.svg" alt="Logo" />
                </h1>
                <span>Uma vida, uma chance. Tá esperando o que?</span>
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="" className={styles.active}>Articles</a>
                </nav>
                <input type="Image" src="/images/instagram.svg"/>
                <input type="Image" src="/images/twitter.svg"/>

            </div>

        </header>
    )
}