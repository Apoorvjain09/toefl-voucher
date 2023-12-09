import Action from "../hero/Action";
import { infos } from "./HowToToeflTest.constent";

const HowToToeflTest = () => {
  return (
    <div className="py-[15dvh]">
      <div className="flex  w-[75%] mx-auto ">
        <div className="w-1/2">
          <h2 className="text-prime font-bold text-3xl">
            HOW TO REGISTER FOR TOEFL TEST?{" "}
          </h2>
          <div className="w-[80%] py-4 px-2">
            {infos.map((info, index) => (
              <div key={index} className="flex gap-2 font-bold text-xl">
                <span>{index + 1}.</span>
                <p className="">{info.text}</p>
              </div>
            ))}
          </div>
          <div className="py-2">
            <Action />
          </div>
        </div>
        <div className=" w-1/2 flex justify-end ">
          <iframe
            width="600"
            height="320"
            src="https://www.youtube.com/embed/ESEUoa-mz2c?si=jssmHQBxk0cLGEC4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowToToeflTest;
