import {Log} from "./src/index.js";
async function testLogging() {
  const result = await Log(
    "backend",
    "info",
    "service",
    "Loggin middleware test"
  );
  console.log("Log result:", result);
}

testLogging();
