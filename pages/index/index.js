
// var img = document.createElement('img')
// img.src =  "data:image/jpeg;base64,"+ vary
// document.body.appendChild(img)

// 
function getBase64() {
    var file=document.getElementById('fileOfImage').files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Data = reader.result.split(',')[1];
      // Do something with the base64 data
      console.log(base64Data)
      fetch('/ugh',{
        method:'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ base64Data }),
        })
        .then(response =>response.text())
        .then(data =>{
            console.log(data)
            // sendReadStatusFRONTEND(database.messages,currentMessage.message)

        })
    };

  }