import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Lazar Elvis Portfolio</title>
      <meta
        name="description"
        content="Welcome to
My Personal Portfolio
The purpose of this portfolio is to help others to see what am I doing and show my skills to others who are interested to build awesome apps."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
