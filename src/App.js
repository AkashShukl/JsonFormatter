import "./styles.css";
import TextComponent from "./TextComponent";

export default function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#e3c6f7",
          height: "50px",
          width: "100vw",
          color: "white"
        }}
      >
        <label style={{ fontWeight: "bold", fontSize: "35px" }}>
          JSON Formatter
        </label>
      </div>
      <TextComponent />
    </>
  );
}
