import Link from "next/link";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>홈!</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <Link href="/coins">
          <a>Coins</a>
        </Link>
        <Link href="/profile/contact">
          <a>Contacts</a>
        </Link>
      </div>
    </div>
  );
}
