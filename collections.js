Hours = new Meteor.Collection("Hours");

Meteor.methods({
  //Function insertHour takes 2 parameters, the number of hours and the date
  insertHour: function(hours, date) {
    //Parse the first parameter to make sure it is an int
    var hoursInInt = parseInt(hours);
    // if (check(hoursInInt, int)) {
    //     throw new Meteor.Error("An error!");
    // }
    //Use the check function to ensure that the first parameter is a number
    check(hoursInInt, Number);
    //Use the check function to ensure that the second parameter is a date
    check(date, Date);

    //Return the insert function (add a key value pair (JSON) consisting of the first and second parameter into the Hours collection)
    return Hours.insert({
        "hours": hoursInInt,
        "date": date
    })
  },

  // Function removeHour takes 1 parameter, the id to remove an entry
  removeHour: function(id) {
    //Use the check function to ensure the parameter is a string
    check(id, String);
    //Return the remove function (remove an entry from the Hours collection by id)
    return Hours.remove(id);
  }
});
