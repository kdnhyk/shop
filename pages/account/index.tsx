import Head from "next/head";
import styled from "styled-components";
import AppLayout from "../../components/layout/AppLayout";

interface IsAccountBlock {}

const AccountBlock = styled.div<IsAccountBlock>``;

export default function Account() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <AccountBlock></AccountBlock>
      </AppLayout>
    </>
  );
}
