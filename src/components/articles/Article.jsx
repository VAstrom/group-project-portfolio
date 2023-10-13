import Photo from "../photo/Photo";
import styles from "./Article.module.css";

const Article = ({
    title,
    preview,
    imageUrl,
    imageAlt,
    createdAt,
    articleUrl,
}) => {
    return (
        <div>
            <Photo
                src={imageUrl}
                alt={imageAlt}
                color="#FF4575"
            />
            {/* TODO: Insert Tag component here with createdAt as value */}
            <h3>{title}</h3>
            <p>{preview}</p>
            {/* TODO: Insert Button component here */}
        </div>
    )
}

export default Article;