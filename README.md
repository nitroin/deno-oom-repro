# deno-oom-repro

This is a repro project for Deno issue with dealing with big files.

## Steps to repro

### Write a dump file

Create a dummy large dump file (usually problems arise when dealing with multigigs files).

```bash
> deno task write-dump
```

And let Deno create a dummy file under `./output` folder. Stop with `CTRL+C | CMD+C` when the file is 3 GB or more.

### Try to read the created file

Lunch the reader task to repro OOM.

```bash
> deno task read-dump
```

It usually take some minutes depending on the hardware/configuration used, but the process should exit with an error:

```
error: Uncaught (in promise) RangeError: Maximum call stack size exceeded
      yield decoder.decode(concat(...chunks));
```

## Notes

Also `Deno.writeText` can leak some memory, so an OOM can occur also when writing the dump file if you're like enough. You can monitor the memory usage with top or htop an see the memory never being released.
