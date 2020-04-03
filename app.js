document.addEventListener("DOMContentLoaded", () => {
  let photo = "";
  let publicIDdiv = document.getElementById("publicIDdiv");
  let publicIDvalue = document.getElementById("publicIDvalue");
  publicIDdiv.hidden = true;
  const submitButton = document.getElementById("createPage");
  submitButton.disabled = true;

  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "sinkcloud",
      uploadPreset: "gqqczwii",
      sources: ["local"],
      multiple: false,
      theme: "minimal",
      styles: {
        palette: {
          link: "#1abc9c",
          inProgress: "#0078FF",
          complete: "#20B832"
        }
      }
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        photo = result.info.public_id;
        submitButton.disabled = false;
        publicIDdiv.hidden = false;
        publicIDvalue.value = photo;
      }
    }
  );

  document
    .getElementById("photo")
    .addEventListener("click", () => myWidget.open());
});
