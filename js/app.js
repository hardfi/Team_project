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

      // function sorting objects in array by given key (here 'id')
      this.compare = function(a,b) {
        if (b.id < a.id)
        return -1;
        if (b.id > a.id)
        return 1;
        return 0;
      }

      objArray.sort(this.compare);

      // function calculating id for every new object
      this.calcId = function(array) {
        if (array.length === 0) {
          return 1;
        } else {
          return array[0].id + 1; // array was sorted from biggest to smallest ID
        }
      }

      this.id = this.calcId(objArray);
    }

    // with every single 'click' create new object with the above values
    var newEntry = new Entry();
    // then push this object to array
    objArray.push(newEntry);

    // this line is just to check if it works
    console.log(objArray);

  });

});
