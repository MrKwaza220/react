const StepThree = ({ goToNext }) => (
    <>
      <h1>Step Three</h1>
      <button onClick={() => goToNext({ phone: "Nokia" })}>Next</button>
    </>
  );