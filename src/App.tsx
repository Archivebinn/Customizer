import CustomizationPanel from "./components/CustomizationPanel";

const App = () => {
  return (
    <div className="main" style={{ textAlign: "center", height: "80dvh", width: "100%" }}>
      <h1>Furniture Customizer</h1>
      <CustomizationPanel />
    </div>
  );
};

export default App;
