export async function GET(request: Request, {params}) {
    console.log(params);
    const data = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${params.userId}`);
    const jsonData = await data.json();

    // Convert JSON data to a string
    const jsonString = JSON.stringify(jsonData, null, 2);
    return new Response(jsonString);
}