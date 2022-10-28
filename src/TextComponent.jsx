import { useState } from "react";
import { formatter } from "./helper";

export default function TextComponent() {
  const [jsonString, setJsonString] = useState();
  const [localString, setLocalString] = useState(
    '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'
  );
  const [formatedString, setFormatedString] = useState("");

  function handleChange(e) {
    const val = e.target.value;
    console.log(val, typeof val);
    setLocalString(val);
  }

  function handlePretify() {
    if (localString.length >= 2) {
      const val = JSON.parse(localString);
      setJsonString(val);
      setFormatedString(formatter(val));
    }
  }
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "space-between",
          padding: 2
        }}
      >
        <div>
          <textarea
            aria-label="minimum height"
            minRows={70}
            placeholder="Place your Json here!"
            style={{
              height: "87vh",
              width: "49vw",
              backgroundColor: "#fcebcc",
              border: "2px solid black"
            }}
            value={localString}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            height: "87vh",
            width: "49vw",
            border: "2px solid black",
            backgroundColor: "#d1f7c6",
            overflow: "auto",
            fontSize: "12px"
          }}
        >
          {formatedString}
        </div>
      </div>
      <div
        style={{
          height: "50px",
          backgroundColor: "gray",
          padding: 6,
          textAlign: "center"
        }}
      >
        <button class="button-6" style={{ height: 20 }} onClick={handlePretify}>
          Prettify
        </button>
      </div>
    </>
  );
}
