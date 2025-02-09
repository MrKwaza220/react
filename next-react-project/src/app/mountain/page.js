async function getData(){
    const res = await fetch(
        'https://snowtooth-api-rest.fly.dev'
    )

    return res.json()
}

export default async function Page() {
    const data = await getData();
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Mountain</h1>
        <table>
            <thead>
                <tr>
                    <th>Lift Name</th>
                    <th>current</th>
                </tr>
            </thead>
            <tbody>
                {data.map((lift) => (
                    <tr>
                        <td>{lift.name}</td>
                        <td>{lift.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>


    </main>
  );
}