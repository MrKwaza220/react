export const PrintProps = (Component) => {
  return (props) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
};
