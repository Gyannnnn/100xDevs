import axios from "axios";

export default async function User() {
  const response = await axios.get(
    "http://localhost:3000/api/v1/user/details"
  );
  
 
  const data = response.data;
  console.log(data);
  console.log("hi")
  return (
    <div className="">
      {
        <h1>{data.name}</h1>
      }
    </div>
  );
}
