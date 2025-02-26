const Home = () => {
  function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  }
  const [add, subtract, multiply, divide] = calculate(7, 9);
  return (
    <>
      <h1>My Numbers</h1>
      <ul>
        <li>{add}</li>
        <li>{subtract}</li>
        <li>{multiply}</li>
        <li>{divide}</li>
      </ul>
    </>
  );
};

export default Home;
