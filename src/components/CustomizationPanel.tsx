import { useState } from "react";
import ModelViewer from "./ModelViewer";

const CHILD = [
  { name: "body", childID: "01_Wood_Material_#3_0" },
  { name: "cloth", childID: "Object001_Material_#5_0" },
];

const CustomizationPanel = () => {
  const [objectColor, setObjectColor] = useState("");
  const [childPart, setChildPart] = useState("");

  const handleObjectColor = (color: string) => {
    setObjectColor(color);
  };

  const selectChild = (id: string) => {
    setChildPart(id);
  };

  return (
    <>
      <ModelViewer color={objectColor} selectedPart={childPart} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {CHILD.map((item) => (
          <div style={{ margin: "5px" }}>
            <button
              style={{ color: childPart === item.childID ? "green" : "" }}
              onClick={() => selectChild(item.childID)}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>

      <div style={{ margin: "5px", display: "flex", justifyContent: "center", gap: "3px" }}>
        <button
          style={{ color: objectColor === "lightblue" ? "green" : "" }}
          onClick={() => handleObjectColor("lightblue")}
        >
          light blue
        </button>
        <button style={{ color: objectColor === "red" ? "green" : "" }} onClick={() => handleObjectColor("red")}>
          red
        </button>
      </div>
    </>
  );
};

export default CustomizationPanel;
