import React, { useState } from "react";

function ImageUploaderForm() {
  const [url, setUrl] = useState("");

  const hangleChange = (e) => setUrl(e.target.value);

  const handleSubmit = (e) => e.preventDefault();
  console.log(url);
  setUrl("");

  return (
    <form className="ImageUploaderForm">
      <input placeholder="Add url here" value={url} onChange={hangleChange} />
      <button className="SubmitButton" onClick={handleSubmit} type="Submit">
        Submit
      </button>
    </form>
  );
}

export default ImageUploaderForm;
