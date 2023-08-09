async function getData() {
    const data = await fetch('http://localhost:3001/api/1');
    const jsonData = await data.json();
    return jsonData;
  }

export default async function MyComponent() {
    const myData = await getData();

    return (
      <>
      <h1>renderring</h1>
        <div>{myData.data.employee_name}</div>
        <div>{myData.data.employee_salary}</div>
      </>
    )
  }
