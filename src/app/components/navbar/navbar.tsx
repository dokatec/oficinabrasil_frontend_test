import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <section className={styles.navbar_menu}>
      <div className={styles.navbar}>
        <img src="svg/bar_chart.svg" alt="" />
        <img src="svg/analytics.svg" alt="" />
        <img src="svg/monitoring.svg" alt="" />
        <img src="svg/pie_chart.svg" alt="" />
      </div>
    </section>
  );
}
