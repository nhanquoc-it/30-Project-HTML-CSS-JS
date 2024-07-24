// Get the value of elements on html
var upload = document.querySelector("#myPicture");
var preview = document.querySelector(".upload-file__preview");
var error = document.querySelector(".upload-file__error");

// Listen for image file upload events
upload.addEventListener("change", function (e) {
  // Check the uploaded image file
  var file = upload.files[0];
  if (!file) {
    return;
  }
  // Check if the image file format has the right extension ".jpg"?
  if (!file.name.endsWith(".jpg")) {
    error.innerHTML = `Display error! Images must be in ".jpeg" format`;
    return;
  } else {
    error.innerHTML = ``;
  }
  // Check if the uploaded file size exceeds 5MB?
  if (file.size / (1024 * 1024) > 5) {
    error.innerHTML = `Only upload images < 5MB`;
    return;
  } else {
    error.innerHTML = ``;
  }
  // Create Element img and assign values ​​to it : Use Base64
  var img = document.createElement("img");
  img.setAttribute("class", "upload-file__img");
  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = function (e) {
    img.src = e.target.result;
  };

  preview.appendChild(img);
});

/* Note : 
- var fileReader = new FileReader() : Create a FileReader object to read the file
- fileReader.readAsDataURL(file) : Starts the process of reading the 'file' and converting it to a 'Base64 string'.
- e.target.result : Contains the 'Base64 data' path of the 'file'.

- Create Element img and assign values ​​to it : Use Blob
var img = document.createElement("img");
img.setAttribute("class", "upload-file__img");
img.src = URL.createObjectURL(file);
preview.appendChild(img); 
*/
