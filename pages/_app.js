import "../styles/globals.css";
import "../styles/transition.css";
import Transition from "../components/Transition";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { useRef } from "react";
import Scene from "components/scene";

function MyApp({ Component, pageProps = { title: "index" } }) {
  const ref = useRef();
  return (
    <ThemeProvider attribute="class">
      <Layout ref={ref}>
        <Transition>
          <Component {...pageProps} />
          {Component?.canvas && (
            <Scene
              className="pointer-events-none"
              eventSource={ref}
              eventPrefix="client"
            >
              {Component.canvas(pageProps)}
            </Scene>
          )}
        </Transition>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
