import styles from "./Image.module.css";

function Image({ image, onClick }) {
    const cssClasses = `${styles.container} ${image.isSelected ? styles.selected : ""}`;

    return (
        <div onClick={onClick} className={styles.card}>
            <img src={image.url} className={styles.image} alt={image.title} />
        </div>
    );
}

export default Image;
