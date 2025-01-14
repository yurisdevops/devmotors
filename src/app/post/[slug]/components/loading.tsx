import styles from "./loading.module.scss";

export function LoadingPost() {
  return (
    <div>
      <div className={styles.loading}>
        <h1>Página Carregando...</h1>
      </div>
    </div>
  );
}
