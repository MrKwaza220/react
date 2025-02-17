export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{1 + i}</h3>

          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};
