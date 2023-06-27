import { AppProps } from "$fresh/server.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import DesignSystem from "$store/sections/DesignSystem.tsx";
import { context } from "$live/live.ts";

context.deploymentId = "teste server side";

function App(props: AppProps) {
  return (
    <>
      {/* Include default fonts and css vars */}
      <DesignSystem />

      {/* Include Icons and manifest */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <props.Component />
    </>
  );
}

export default App;
