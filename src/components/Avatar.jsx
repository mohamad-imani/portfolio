const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        src="../../public/avt.png"
        width="737px"
        height="678px"
        alt=""
        className="translate-z-0 h-full w-full brightness-90 saturate-[.9]"
        loading="lazy"
      />
    </div>
  );
};

export default Avatar;