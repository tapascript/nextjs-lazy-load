import TomStory from "./components/tom/tom-story";
import JerryStory from "./components/jerry/jerry-story";
import SpikeStory from "./components/spike/spike-story";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
      <JerryStory />
      <SpikeStory />
    </div>
  );
}
