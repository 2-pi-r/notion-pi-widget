import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          노션 강의하는 파이
        </p>
        <br/>
        <p className={styles.description}>
          <a href="http://2-pi-r.notion.site/">홈페이지 : http://2-pi-r.notion.site/</a>
        </p>
      </main>
    </div>
  );
}