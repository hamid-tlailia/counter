
import React from 'react';
import { useState} from 'react';
const Content = () => {
  const [name, setName] = useState({
    name : "",
    title :"",
  });

  function printName (e){
    console.log(e.target.value)
  };
  
  function handleSubmit(e) {
e.preventDefault();
let formName = e.target.name.value;
let formTitile = e.target.title.value;
setName({
  name : formName,
  title : formTitile
})
e.target.reset();
  };
  return (
    
    <div className='d-flex  flex-column justify-content-center w-100 p-3 align-items-center'>
      
      <h2 id='result'> My name is : {name.name}  <span> {name.title} </span> </h2>
  <div className="card w-75">
  <form onSubmit={handleSubmit} className='p-3'>

<div data-mdb-input-init className="form-floating mb-4">
  <input type="text" id="name" onChange={printName} className="form-control" />
  <label className="form-label" for="form1Example1">Name</label>
</div>

<div data-mdb-input-init className="form-floating mb-4">
  <input type="text" id="title"  className="form-control" />
  <label className="form-label" for="form1Example2">title</label>
</div>

<button data-mdb-ripple-init  type="submit" className="btn btn-primary">Print</button>
</form>
  </div>
    </div>
  );
}

export default Content;
