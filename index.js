const loginSec=document.querySelector("#loginDivSec1")
    const login=document.querySelector("#handleSubmit")

    login.addEventListener('click',async(event)=>{
        event.preventDefault()

        const email=document.querySelector("#email").value
        const password=document.querySelector("#pass").value

        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert("Login Successful")
            window.location.reload()
          } else {
            alert("Invalid Credentials")
          }
    })