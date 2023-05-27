import story from "../assets/images/story.png";
import storyEllipse from "../assets/images/storyEllipse.png";

export function StoryCard() {
  return (
    <div className="relative pb-4">
      <img className="mx-auto" src={story} alt="story box" />
      <div className="absolute bottom-0 right-14 flex items-center">
        <h3 className="mr-8 text-2xl font-semibold">Name</h3>
        <img src={storyEllipse} alt="story circle" />
      </div>
    </div>
  );
}
