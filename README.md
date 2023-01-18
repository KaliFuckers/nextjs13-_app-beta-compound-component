# Practice [Nextjs13](https://nextjs.org/docs/getting-started) :bowtie:

1. Practice with the _app directory (beta)
2. Practice Compound Component navigation with the stable version

---
**IMPORTANT**
Using the beta version, you have to toogle comment experimental options in next.config

---

## Compound Components

Compound components use context to share data between them and can detect which route to assign the active class

```tsx
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
```

The Navigation components play the nav native html role accepting all the props same as NavigationLink component as a NextLink
