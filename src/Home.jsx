const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  border: "1px solid #ddd",
  backgroundColor: "#add8e6", 
  color: "black",
  textAlign: "center",
  display: "inline-block", 
  width: "calc(50% - 20px)", 
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold", 
  cursor: "pointer",
  borderRadius: "4px",
};

const buttonContainerStyle = {
  display: "flex",
  flexWrap: "wrap", 
  justifyContent: "space-between",
};

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Ultrarare</h1>
      <div style={buttonContainerStyle}>
        <a href='/List' style={buttonStyle}>List</a>
        <a href='/Buy' style={buttonStyle}>Buy</a>
        <a href='/Create' style={buttonStyle}>Create</a>
        <a href='/Detail' style={buttonStyle}>Detail</a>
        <a href='/ProfileInventory' style={buttonStyle}>Profile/Inventory</a>
      </div>
    </div>
  );
}