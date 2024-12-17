import axios from "axios";

export default async function User() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;
  console.log(data);
  console.log("hi")

  return (
    <div className="">
      <div className="flex flex-col">
        <h1>{data[0].name}</h1>
        <h1> {data[0].email}</h1>
        <h1> {data[0].address.street}</h1>
      </div>
    </div>
  );
}
