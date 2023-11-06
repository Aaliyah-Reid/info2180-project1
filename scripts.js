/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");
    const emailID = document.getElementById("email");
    const messageDisplayed = document.querySelector(".message");

    form.addEventListener("submit",function(event){
        event.preventDefault();
        const email = emailID.value.trim();

        if(email=== ""){
            messageDisplayed.textContent =`Please enter a valid email address.`;
        } else {
            messageDisplayed.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
 

});
