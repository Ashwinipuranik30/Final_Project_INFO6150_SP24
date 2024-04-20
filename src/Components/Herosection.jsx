const Herosection = (props) => {
    return (
        <div className="relative isolate overflow-hidden  text-center bg-gray-900 py-24 lg:py-56">
          <img
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            src={props.heroImg}
            alt="Hero Background"
          />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.title}</h1>
        </div>
      );
    };
    export default Herosection;
    