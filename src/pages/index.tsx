import MainLayout from "@/layouts/main";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <h1>Home</h1>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
