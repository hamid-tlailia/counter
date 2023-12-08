import './style.css'
const Products = () => {
  let input = ''
  function handleUpload(e){
    let area =document.getElementById('area')
     input = e.target.files;
     const array = Array.from(input);
 for(let i=0 ; i<array.length ; i++) {
  area.innerHTML += `<div>
  <span id="close" index="${[i]}">X</span>
  <img src=${URL.createObjectURL(array[i])} alt="product_image" width="120" height="120"/> 
  </div>`
 }
 let closes = document.querySelectorAll('#close');
 closes.forEach(close => close.addEventListener('click' , (e) => {
  let index = e.target.getAttribute('index')
   array.splice(index,1);
   e.target.parentElement.remove()
  
}));
  }


  return (
    <div>
    
<div className="card p-3 m-3 rounded-2">
  <div className="card-header p-2 text-center text-warning"><h4>Welcome to admin panel</h4></div>
  <div className="card-body p-2">
  <form>
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-floating">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">Product name</label>
      </div>
    </div>
    <div class="col">
      <div data-mdb-input-init class="form-floating">
        <input type="number" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Product price</label>
      </div>
    </div>
  </div>

  <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02" onChange={handleUpload} multiple/>
  <label class="input-group-text" for="inputGroupFile02">Upload</label>
</div>

  <div data-mdb-input-init class="form-floating mb-4">
    <textarea class="form-control" id="form4Example3" rows="4" cols="10"></textarea>
    <label class="form-label" for="form4Example3">Description</label>
  </div>


  <button data-mdb-ripple-init type="button" class="btn btn-success mb-4" >Publish</button>

</form>
  </div>
  <div className="card-footer p-2">
    <p className="fs-4 text-black-50 text-decoration-underline">All products</p>
    <hr />
    <div className="d-flex flex-row area" id='area'>

    </div>
  </div>
</div>
    </div>
  );
}

export default Products;
