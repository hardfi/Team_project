document.addEventListener("DOMContentLoaded", function () {

  // empty array ready for objects
  var objArray = [];

  // adding eventListener to "Add" button on the page
  document.getElementById('btn_add').addEventListener('click', function() {

    // constructor of the object
    var Entry = function() {
      this.title = document.querySelector('[name="title"]').value;
      this.date = document.querySelector('[name="date"]').value;
      this.priority = document.querySelector('[name="priority"]').value;
    }

    // with every single 'click' create new object with the above values
    var newEntry = new Entry();
    // then push this object to array
    objArray.push(newEntry);

    // this line is just to check if it works
    console.log(objArray);

  });

});
