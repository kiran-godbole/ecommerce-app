import React, { useState } from 'react'
import Slider from './Slider'

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    emailId: "",
    phoneNumber: ""
  })

  let name, value;
  const postUseradata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value })
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, emailId, phoneNumber } = userData;

    if(name && emailId && phoneNumber){
    const response = await fetch(
      'https://react-contactuspage-default-rtdb.firebaseio.com/userDataRecord.json', {

      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        name,
        emailId,
        phoneNumber
      }),
    }
    );
    if (response) {
      setUserData({
        name: "",
        emailId: "",
        phoneNumber: ""
      })
      alert("data stored")
    } else {
      alert("please fill the data")
    }
  }

  };
  return (
    <div>
      <Slider />
      <h1>Contact Us</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <form className='mt-2 '>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input
                type="name" class="form-control" id="inputEmail3"
                value={userData.name}
                name='name'
                onChange={postUseradata} />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3"
                value={userData.emailId}
                name='emailId'
                onChange={postUseradata}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="inputPassword3"
                value={userData.phoneNumber}
                name='phoneNumber'
                onChange={postUseradata} />
            </div>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit"
              onClick={submitData}
              class="btn btn-success mb-5 text-center ">Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact
