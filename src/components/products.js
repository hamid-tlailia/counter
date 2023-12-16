import { useState } from "react";
import "./style.css";
const Products = () => {
  const [product , setProduct] = useState ({
    pName : "",
  pPrice : "",
  pdesc : "",
  pImage : ""
  })
  let input = "";
  function handleUpload(e) {
    let area = document.getElementById("area");
    input = e.target.files;
     const array = Array.from(input);
    for (let i = 0; i < array.length; i++) {
      area.innerHTML += `<div>
  <span id="close" index="${[i]}">X</span>
  <img src=${URL.createObjectURL(
    array[i]
  )} alt="product_image" width="100%" height="150"/> 
  </div>`;
    }
    let closes = document.querySelectorAll("#close");
    closes.forEach((close) =>
      close.addEventListener("click", (event) => {
        let index = event.target.getAttribute("index");
        array.splice(index, 1);
        event.target.parentElement.remove();
      })
    );
    // e.target.value = null;
    console.log(product)
  }



  const handleProductState = (e) => {
e.preventDefault()
let p_name = e.target.pname.value;
let p_price= e.target.pprice.value;
let p_desc =e.target.pdesc.value;
let p_image = e.target.pimage.files
let myImages = Array.from(p_image)
setProduct ({
  pName : p_name,
  pPrice : p_price,
  pdesc : p_desc,
  pImage : myImages
})
console.log(p_image)

  }

  return (
    <div>
      <div className="card p-3 m-3 rounded-2">
        <div className="card-header p-2 text-center text-warning">
          <h4>Welcome to admin panel</h4>
        </div>
        <div className="card-body p-2">
          <form onSubmit={handleProductState}>
            <div class="row mb-4">
              <div class="col">
                <div data-mdb-input-init class="form-floating">
                  <input type="text" id="pname" class="form-control" required />
                  <label class="form-label" for="form3Example1" >
                    Product name
                  </label>
                </div>
              </div>
              <div class="col">
                <div data-mdb-input-init class="form-floating">
                  <input
                    type="number"
                    id="pprice"
                    class="form-control"
                    required
                  />
                  <label class="form-label" for="form3Example2">
                    Product price
                  </label>
                </div>
              </div>
            </div>

            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                id="pimage"
                onChange={handleUpload}
                multiple
                
              />
              <label class="input-group-text" for="inputGroupFile02">
                Upload
              </label>
            </div>

            <div data-mdb-input-init class="form-floating mb-4">
              <textarea
                class="form-control"
                id="pdesc"
                rows="4"
                cols="10"
              required
              ></textarea>
              <label class="form-label" for="form4Example3">
                Description
              </label>
            </div>

            <button
              data-mdb-ripple-init
              type="submit"
              class="btn btn-success mb-4"
            >
              Publish
            </button>
          </form>
        </div>
        <div className="card-footer p-2">
          <p className="fs-4 text-black-50 text-decoration-underline">
            All products
          </p>
          <hr />
          <div
            className="d-flex flex-column flex-lg-row flex-md-row area"
            id="area"
          >
            
          </div>
      {
        product.pName !== ""  ?     <div className="d-flex flex-column product" >
        <div className="product_images">
        {
            product.pImage.map(mag => 
              <img src={URL.createObjectURL(mag)} alt="product_image" width="150" height="150"/> 
              )
          }
        </div>
        <span> {product.pName}</span>
        <span> {product.pPrice} £</span>
        <span> {product.pdesc}</span>
      </div> : <span>No product yet</span>
      }
        </div>
      </div>
    </div>
  );
};

export default Products;
