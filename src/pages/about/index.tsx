import MainLayout from "@/layouts/main";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const AboutPage: NextPageWithLayout = () => {
  return <h1>About Page</h1>;
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;
