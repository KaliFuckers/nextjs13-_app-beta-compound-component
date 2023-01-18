import MainLayout from "@/layouts/main";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

const ContactPage: NextPageWithLayout = () => {
  return <h1>Contact Page</h1>;
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactPage;
