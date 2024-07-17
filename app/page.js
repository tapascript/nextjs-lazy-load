import dynamic from "next/dynamic";

import TomStory from "./components/tom/tom-story";
import JerryStory from "./components/jerry/jerry-story";
import SpikeStory from "./components/spike/spike-story";

//import AServerComp from "./components/server-comps/server-comp";

const AServerComp = dynamic(() => import('./components/server-comps/server-comp'), {
  loading: () => <h1>Loading Through Server Component...</h1>,
})
 

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center overflow-auto max-h-screen">
      <TomStory />
      <JerryStory />
      <SpikeStory />

      <AServerComp />
    </div>
  );
}
