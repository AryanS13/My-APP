async function getData() {
    const data = await fetch('https://dummy.restapiexample.com/api/v1/employee/1');
    const jsonData = await data.json();
    return jsonData;
  }

export default async function MyComponent() {
    const myData = await getData();
    console.log(typeof(myData));
    console.log(myData);

    return (
      <>
      <h1>renderring</h1>
        <div>{myData?.data.employee_name}</div>
        <div>{myData?.data.employee_salary}</div>
      </>
    )
  }
