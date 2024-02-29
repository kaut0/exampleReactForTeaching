import * as React from "react";
import { NavbarComponent } from "../component";
import { Button, Carousel } from "flowbite-react";
const Home = () => {
  React.useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-cokelatKuning-900 to-cokelatKuning-50">
        <NavbarComponent />
      </div>
      <div className="h-52 sm:h-64 xl:h-80 2xl:h-96 mb-2 bg-gradient-to-r from-cokelatKuning-900 to-cokelatKuning-50">
        <div className="absolute z-50 top-1">tex</div>
        <Carousel indicators={false} leftControl={false} slideInterval={2000}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <section className="flex justify-between bg-gray-400">
        <div className="min-w-56">
          <h1 className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            temporibus id. Hic, quod voluptas adipisci veniam porro
            necessitatibus. Officiis qui recusandae architecto esse eligendi,
            velit magni cupiditate. Aliquam, saepe rem!
          </h1>
        </div>
        <div className="bg-blue-500 bg-opacity-75 md:bg-opacity-50">
          <img
            className="bg-transparent w-auto h-auto"
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="The head and torso of a dinosaur skeleton;it has a large head with long sharp teeth"
          />
        </div>
      </section>
      <section>
        <Button
          onClick={() => {
            console.log("makan bang");
          }}
          title="makan gan"
          isProcessing
        />
      </section>
    </div>
  );
};

export default Home;
