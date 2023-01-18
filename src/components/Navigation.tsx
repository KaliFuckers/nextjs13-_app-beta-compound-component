/* eslint-disable react/display-name */
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
} from "react";
import styles from "../styles/main.module.css";

const NavigationContext = createContext<{ path: string }>({ path: "" });

const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "Navigations components must be rendered as a child of Navigation component"
    );
  }

  return context;
};

function Navigation(props: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  const { route } = useRouter();
  console.log("route", route);
  return (
    <NavigationContext.Provider value={{ path: route }}>
      <nav {...props} />
    </NavigationContext.Provider>
  );
}

function CustomLink(
  props: PropsWithChildren<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
      LinkProps
  >
) {
  const { path } = useNavigationContext();
  path === props.href && console.log("active", props.href);
  return (
    <Link
      {...props}
      className={path === props.href ? styles.active : ""}
      {...props}
    />
  );
}

Navigation.Link = CustomLink;

export default Navigation;
