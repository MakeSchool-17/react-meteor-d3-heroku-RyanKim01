// Give your component a name called App - use React.createClass to create the object
   App = React.createClass({
     // Add the ReactMeteorData mixin - we need to connect our data to our view
     mixins: [ReactMeteorData],

     // Get data from the database and store it in the hours variable
     getMeteorData: function() {
       var hours = Hours.find().fetch();

       return {
         // Use the Mongo Collection find/fetch method to get all data and store it in a key-value store (JSON)
           hours: hours
       };
     },

     // Use React's render function and write some JSX (which uses regular HTML)
     // to support our 2 column structure and a div for each component we will have
     render: function() {
       // Return the JSX inside of brackets
       return (
         // CODE HERE - Put your HTML here
         <div>
         <div> <HourForm /> </div>
         <div> </div>
         <div> </div>
         </div>
     );
     }
   });
