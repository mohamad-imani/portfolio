//
import { Link } from 'react-router-dom';

//icons
import { HiArrowRight } from 'react-icons/hi2';
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link
        to="./work"
        className="group relative flex h-[185px] w-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat cursor-pointer z-50"
      >
        <img
          src={"/rounded-text.png"}
          width={131}
          height={138}
          alt=""
          className="h-full max-h-[138px] w-full max-w-[131px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-white text-4xl transition-all duration-300 group-hover:translate-x-2 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
