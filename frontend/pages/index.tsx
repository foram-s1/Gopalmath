import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useContext, useState } from "react";
import ConnectToMetamask from "../components/ConnectToMetamask";
import { AuthContext } from "../contexts/authContext";
import RegisterDialog from "../components/RegisterDialog";
const Home: NextPage = () => {
	const [openConnectToWalletDialog,setOpenConnectToWalletDialog] = useState(true);
	const [openRegister,setOpenRegister] = useState(false);
	const {user} = useContext(AuthContext);
	return (
		<div className={styles.container}>
			<Head>
				<title>NextJS | Template</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
				<Image
					src="/assets/test.jpg"
					height={1920}
					width={1080}
				></Image>
				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.tsx</code>
				</p>

				<div className={styles.grid}>
					<Link href="/auth">
						<a className={styles.card}>
							<h2>Authenticated Route &rarr;</h2>
							<p>
								This route is authenticated.
							</p>
						</a>
					</Link>

					<Link href="/auth/login">
						<a className={styles.card}>
							<h2>Login Page &rarr;</h2>
							<p>
								This route is the place where you can go and authenticate yourself.
							</p>
						</a>
					</Link>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>
							Discover and deploy boilerplate example Next.js
							projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL
							with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<img
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
			<ConnectToMetamask open={openConnectToWalletDialog} close={() => setOpenConnectToWalletDialog(false)} />
			<RegisterDialog open={openRegister} close={() => setOpenRegister(false)} />
		</div>
	);
};

export default Home;
