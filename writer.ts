/**
 * This code can be used to generate a mock dump file to be read and repro OOM
 */
while (1) {
  const event = {
    "specversion": "1.0",
    "type": "com.example.someevent",
    "source": "mycontext",
    "id": "A234-1234-1234",
    "time": "2018-04-05T17:31:00Z",
    "comexampleextension1": "value",
    "comexampleothervalue": 5,
    "datacontenttype": "application/vnd.apache.thrift.binary",
    "data_base64": "... base64 encoded string ...",
  };

  Deno.writeTextFileSync(
    "./output/test.log",
    JSON.stringify(`${event}\n`),
    { append: true },
  );
}
