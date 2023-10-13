import Article from "./Article";
import styles from "./Articles.module.css";
import data from "./data.json";

const Articles = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>{data.title}</h2>
                <div className={styles.grid}>
                    {data.articles.map((article, index) => (
                        <Article
                            key={index}
                            title={article.title}
                            preview={article.preview}
                            imageUrl={article.imageUrl}
                            imageAlt={article.imageAlt}
                            createdAt={article.createdAt}
                            articleUrl={article.articleUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles;