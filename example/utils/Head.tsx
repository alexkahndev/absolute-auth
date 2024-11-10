import { styleReset } from './styles';

type HeadProps = {
	title?: string;
	icon?: string;
};

export const Head = ({
	title = 'EventGames.io',
	icon = '/favicon.ico'
}: HeadProps) => {
	return (
		<head>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content="Bun, Elysia & React" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href={icon} />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
				rel="stylesheet"
			/>
			<style>{styleReset}</style>
		</head>
	);
};
