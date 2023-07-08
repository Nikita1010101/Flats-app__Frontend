import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { ILayout } from './Layout.interface'
import { Navbar } from './Navbar/Navbar'

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Navbar />
			<main className={styles.layout}>{children}</main>
		</>
	)
}
