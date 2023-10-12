import styles from "./Photo.module.css";

const Photo = ({
    src,
    alt,
    color,
}) => {
    return (
        <div className={styles.wrapper}>
            <div
                style={{ boxShadow: `${color} 20px -20px 0 0 inset` }}
                className={styles.border}
            />
            <img
                src={src}
                alt={alt}
                className={styles.photo}
            />
        </div>
    );
}

export default Photo;