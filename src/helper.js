export function render(key, val) {
  const type = Object.prototype.toString
    .call(val)
    .split(" ")[1]
    .replace("]", "");

  if (["Array", "Object"].includes(type)) {
    if ("Object" === type) {
      return (
        <div key={key} style={{ paddingLeft: 15 }}>
          "{key}": {formatter(val)}
        </div>
      );
    } else {
      return (
        <div key={key} style={{ paddingLeft: 15 }}>
          "{key}": {formatter(val)}
        </div>
      );
    }
  } else {
    return (
      <div style={{ paddingLeft: 15 }}>
        "{key}" : {type === "String" ? `"${val}"` : val},
      </div>
    );
  }
}

export function formatter(data) {
  const type = Object.prototype.toString
    .call(data)
    .split(" ")[1]
    .replace("]", "");

  if (type === "Object") {
    const res = Object.keys(data).map((item) => {
      return render(item, data[item]);
    });

    return (
      <div style={{ paddingLeft: 15 }}>
        &#123;
        {res}
        &#125;,
      </div>
    );
  }

  if (type === "Array") {
    const res = data.map((item) => {
      return formatter(item);
    });

    return (
      <>
        [
        <div style={{ paddingLeft: 15 }}>
          {res.map((item) => (
            <>{item}</>
          ))}
        </div>
        ],
      </>
    );
  }

  return (
    <div style={{ paddingLeft: 15 }}>
      <>{data}</>,
    </div>
  );
}
