function sendcontactmessage()
{
    var fields = {};
    let contacttext = document.querySelector('#FormTextarea1').value;
    let contactemail = document.querySelector('#FormEmailInput1').value;
    let contactselect = document.querySelector('#FormSelect1').value;
    document.addEventListener("DOMContentLoaded", function()
    {
        fields.select = document.getElementById('FormSelect1');
        fields.email = document.getElementById('FormEmailInput1');
        fields.text = document.getElementById('FormTextarea1');
    });
    if (fields.text === '')
    {
        alert("You can't send an empty message. What am I supposed to do with that? Please think of something to write");
        return -1;
    }
    if (fields.email === '')
    {
        alert("You have to type in a email adress. Otherwise I have no way to reply.");
        return -1;
    }

}


document.querySelector('#light').onclick = function() {
    document.querySelector('body').style.backgroundColor = '#888';
    document.querySelector('#navbar').style.backgroundColor = '#bbb';
};
document.querySelector('#dark').onclick = function() {
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('#navbar').style.backgroundColor = '#666';
};




  function mouseOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function moutOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }


