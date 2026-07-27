import useFetch from "../hook/useFetch";

const Hotel = () =>{

    const {data, loading} = useFetch("https://bi-1-2-hw-2-backend.vercel.app/hotels")
    console.log(data);

    return(
        <div>
            {loading && <p>Loading...</p>}
            {data?.error && <p>{data?.error}</p>}
            <ul>
                {data?.map((hotel) =>(
                    <li key={hotel._id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    )

};
export default Hotel;