const Home = () => {
 const myVehicle = {
   brand: 'Ford',
   model: 'Mustang',
   color: 'red'
 }

 const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
 }

 const myUpdateMyVehicle = {...myVehicle, ...updateMyVehicle}

 console.log(myUpdateMyVehicle)
  return (
    <>
      <h1>My </h1>
    </>
  );
};

export default Home;
