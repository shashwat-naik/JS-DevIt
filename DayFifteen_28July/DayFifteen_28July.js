let formInfo = document.getElementById("myForm");

formInfo.addEventListener("submit", async function formSub(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const formObj = {};
  formData.forEach((value, key) => {
    formObj[key] = value;
  });

  const jsonData=JSON.stringify(formObj);

  console.log("Sending: ", jsonData);

  // Send call to DummyJSON
  try{
    const response=await fetch('https://dummyjson.com/users',{
      method: 'POST',
      headers: {
        'COntent-Type':'app'
      }
    })
  }
  
});
