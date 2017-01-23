var React = require('react');

var myForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
  },
  render: function (){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="myForm">
          <input type="text"  placeholder="Enter a word" ref="wordone" className="test"></input>
          <input type="text"  placeholder="Enter another word" ref="wordtwo" className="test"></input>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }

})

module.exports=myForm;
