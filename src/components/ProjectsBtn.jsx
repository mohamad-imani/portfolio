//
import { Link } from 'react-router-dom';

//icons
import { HiArrowRight } from 'react-icons/hi2';
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link
        to="./work"
        className="group relative flex h-[165px] w-[165px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat cursor-pointer z-50"
      >
        <img
          src={"/rounded-text.png"}
          width={131}
          height={138}
          alt=""
          className="h-full max-h-[128px] w-full max-w-[121px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-white text-4xl transition-all duration-300 group-hover:translate-x-2 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
