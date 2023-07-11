import CodeIcon from "@mui/icons-material/Code";

export const Category = () => {
  return (
    <div className="h-500px flex flex-col justify-evenly items-center bg-LightBlue">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-3xl">Browse by category</div>
        <div className="text-lg mt-5">Browse openings in those categories</div>
      </div>
      <div className="flex w-full justify-evenly items-center">
        <div className="h-48 w-48 rounded-lg bg-Light2Blue flex flex-col justify-center items-center">
          <div className="h-16 w-16 rounded-full bg-Darkblue flex justify-center items-center">
            <CodeIcon fontSize="large" className="text-white" />
          </div>
          <div className="font-bold text-xl mt-4">Primary Teacher</div>
        </div>
        <div className="h-48 w-48 rounded-lg bg-Light2Blue flex flex-col justify-center items-center">
          <div className="h-16 w-16 rounded-full bg-Darkblue flex justify-center items-center">
            <CodeIcon fontSize="large" className="text-white" />
          </div>
          <div className="font-bold text-xl mt-4">Primary Teacher</div>
        </div>
        <div className="h-48 w-48 rounded-lg bg-Light2Blue flex flex-col justify-center items-center">
          <div className="h-16 w-16 rounded-full bg-Darkblue flex justify-center items-center">
            <CodeIcon fontSize="large" className="text-white" />
          </div>
          <div className="font-bold text-xl mt-4">Primary Teacher</div>
        </div>
      </div>
    </div>
  );
};
