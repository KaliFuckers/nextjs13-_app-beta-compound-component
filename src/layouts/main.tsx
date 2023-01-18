import Navigation from "@/components/Navigation";
import { PropsWithChildren } from "react";
import styles from "../styles/main.module.css";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation className={styles.navigation}>
        <Navigation.Link href="/">Home</Navigation.Link>
        <Navigation.Link
          style={{
            backgroundColor: "lightblue",
            border: "1px solid grey",
            borderRadius: 20,
            padding: "5px 10px",
          }}
          href="/about"
        >
          About
        </Navigation.Link>
        <Navigation.Link href="/contact">Contact</Navigation.Link>
      </Navigation>
      <main>{children}</main>
    </>
  );
}
