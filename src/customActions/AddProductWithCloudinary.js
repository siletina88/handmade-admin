import { addProduct } from "../redux/apiCalls";
import axios from "axios";

export const AddProductWithCloudinary = (dispatch, filesObj, categories, inputs) => {
  console.log(filesObj);
  const handleDrop = () => {
    let urls = [];
    // Push all the axios request promise into a single array
    const uploaders = filesObj.map((file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file[1]);
      formData.append("tags", `images`);
      formData.append("upload_preset", "zmjspg8x"); // Replace the preset name with your own
      formData.append("api_key", "548426853523768"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post("https://api.cloudinary.com/v1_1/dzb9j4cx4/image/upload", formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then((response) => {
          const data = response.data;

          const fileURL = data.secure_url; // You should store this URL for future references in your app
          console.log(data);
          urls.push(fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      console.log(urls);
      const img = urls[0];

      // ... perform after upload is successful operation
      const product = { ...inputs, img: img, imgAlt: urls, categories };
      const redirect = (window.location = "/products/");
      addProduct(product, dispatch).then(redirect);
    });
  };
  if (filesObj) {
    handleDrop();
  } else {
    const image = "https://cdn.imgbin.com/23/21/2/imgbin-product-return-privacy-policy-computer-icons-warehouse-chemist-ADktwPrHSyRDFWxGLCtphbHVH.jpg";
    const product = { ...inputs, img: image, categories };
    const redirect = (window.location = "/products/");
    addProduct(product, dispatch).then(redirect);
  }
};
