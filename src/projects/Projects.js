import React from "react";
import ToDo from "./ToDo/ToDo";
import QuoteGenerator from "./QuoteGenerator/QuoteGenerator";

class Projects extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="py-0 px-5 w-full max-w-xl">
          <ToDo />
          <hr className="h-px my-7 bg-slate-700 border-0 dark:bg-slate-400" />
          <QuoteGenerator />
        </div>
      </div>
    );
  }
}
export default Projects;
