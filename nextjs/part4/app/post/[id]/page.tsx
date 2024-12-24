import axios from "axios"

interface post{
    userId: number;
    id: number;
    title: string;
    body: string;


}

export default async function page({params}:{
    params:{
        id: string
    }
}) {

    const response = await axios.get<post>(`https://jsonplaceholder.typicode.com/posts/${(await params).id}`)
    const data = response.data;
    console.log(data);


  return (
    <div>
        <h1>{data.id}</h1>
        <h1>{data.userId}</h1>
        <h1>{data.title}</h1>
        <h1>{data.body}</h1>
    </div>
  )
}
