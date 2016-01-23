//Give your component a name called HourForm - use React.createClass to create the object
  HourForm = React.createClass({
      handleSubmit: function(e) {

            // Use the preventDefault function on the passed in event
            e.preventDefault();
            // Access the input fields using ReactDOM.findDOMNode and store them in a variable
            var hourValue = ReactDOM.findDOMNode(this.refs.hour);
            var dateValue = ReactDOM.findDOMNode(this.refs.date);

            // Use Meteor's call function
            // Pass the insertHour function as first parameter
            // Pass the hours value as the second parameter
            // Pass the date value as the third parameter - Use Moments toDate function to pass it as an ISO date
            // Pass an anonymous callback as the fourth parameter that only alerts if something goes wrong (the callback has error (if there's one) and the returned id as passed in parameters (if the call succeeded))
            Meteor.call('insertHour', hourValue.value, moment(dateValue.value).toDate(), function (error, result) {
                  if (error) {
                      alert(error);
                  } else {
                    // return result
                  }
            });

            // Reset the input values to empty strings
            hourValue.value = "";
            dateValue.value = "";
          },
      render: function() {
      // Return your JSX within brackets - the HTML should display a simple form with
      // 2 input elements and a submit button

      return (

        <div class="container">
            <div className="panel panel-default col-sm-3">
              <div className="panel-heading">Hours Spent Coding</div>
                  <div className="col-sm-12">
                     <form className="form col-sm-12" onSubmit={this.handleSubmit}>
                        <div className="row">
                        <input className="col-sm-12" ref="hour" type="number" name="hour" placeholder="How many hours?" />
                        </div>
                        <div className="row">
                        <input className="col-sm-12" ref="date" type="date" name="date" placeholder="mm/dd/yyyy" />
                        </div>
                        <div className="row">
                        <button className="btn btn-primary col-sm-12" type="submit">Add</button>
                        </div>
                     </form>
                  </div>   
            </div> 
        </div>
      );
    }
  });
