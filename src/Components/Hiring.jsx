import img1 from "./pexels-jopwell-2422286.jpg";
export const Hiring = () => {
  return (
    <div className="h-500px flex justify-center items-center">
      <img
        src="https://images.pexels.com/photos/6326069/pexels-photo-6326069.jpeg?auto=compress&cs=tinysrgb&w=800"
        height="500px"
        alt=""
      />
      <div className="h-full flex flex-col justify-around items-center">
        <div className="text-sm">CANDIDATE</div>
        <div className="text-4xl">Find Your Dream Job</div>
        <div className="w-3/4 text-lg">
          Recruiters looking for talent can find your resume based on keywords,
          job titles, skills and more.
        </div>
        <div className="text-lg bg-Light3Blue text-white pt-3 pb-3 pl-5 pr-5 text-center rounded-3xl font-bold">
          Post a Job
        </div>
      </div>
    </div>
  );
};
