import createApp from "./app";

const app = createApp();
const port = process.env.PORT;
const baseUrl = process.env.BASE_URL;

app.listen(port, () => {
  console.log(`Server running at port ${baseUrl}:${port}`);
});
