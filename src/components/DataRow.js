const DataRow = ({ backgroundColor, fontColor, values = [] }) => {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor,
    color: fontColor,
    marginTop: 1.5,
  };
  const cellStyle = {
    outline: 'solid',
    outlineColor: 'black',
    padding: 20,
    width: 150,
    height: 20,
    marginLeft: 1.5,
  };

  return (
    <div style={rowStyle}>
      {values.map((value) => (
        <div style={cellStyle}>{value}</div>
      ))}
    </div>
  );
};

export default DataRow;
