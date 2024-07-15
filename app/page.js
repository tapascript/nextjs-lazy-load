import TomStory from "./components/tom-story";
import JerryStory from "./components/jerry-story";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
      <JerryStory />
    </div>
  );
}
