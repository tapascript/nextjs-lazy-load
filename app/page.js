import TomStory from "./components/tom-story";
import JerryStory from "./components/jerry-story";
import SpikeStory from "./components/spike-story";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
      <JerryStory />
      <SpikeStory />
    </div>
  );
}
