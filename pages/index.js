import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          작업 : 노션 강의하는 파이
        </p>
        <br/>
        <p className={styles.description}>
          <a href="http://2-pi-r.notion.site/">홈페이지 링크</a>
        </p>
      </main>
    </div>
  );
}