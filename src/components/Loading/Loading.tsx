import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}>
                <div className={`${styles.ldio} loading`}>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Loading
