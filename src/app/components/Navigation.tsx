import Link from "next/link";
import styles from "../styles/navigation.module.css";

const links = [
  { page: "/", label: "Home" },
  {
    page: "/about",
    label: "About",
  },
  {
    page: "/posts",
    label: "Posts",
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        {links.map(({ page, label }) => {
          return (
            <li key={page}>
              <Link href={page}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
