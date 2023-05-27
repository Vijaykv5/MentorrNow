import { StoryCard } from "./StoryCard";

const Stories = () => {
  return (
    <div className="m-8 bg-[#F3F7F5] rounded-3xl px-4 py-8 md:px-8 md:py-12">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-poppins">
        {" "}
        The Stories of Transformation
      </h2>
      <div className="flex flex-col sm:flex-row justify-between max-w-3xl mx-auto">
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  );
};
export default Stories;
