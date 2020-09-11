import minimist from "minimist";

const parseArgs = (rawArgs) => minimist(rawArgs.slice(2));
export default async (rawArgs) => {
  const args = parseArgs(rawArgs);

  console.log("rawArgs", rawArgs);
  console.log("args", args);
};
