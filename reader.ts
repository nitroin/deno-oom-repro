import { readLines } from "https://deno.land/std@0.177.0/io/read_lines.ts";

const reader = await Deno.open(`./output/test.log`);

for await (const line of readLines(reader)) {
  const noop = JSON.parse(line);
}

console.log("File was read succesfully");
// We'll never get there :(
