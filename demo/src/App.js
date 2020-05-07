import React from 'react';

import './App.css';

import Popup from 'reactjs-popup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'except',
      model_open : false,
      isDialogOpen: false,
     
    
    };
   
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleCancel(event) {
   
    event.preventDefault();
  }

  handleSubmit(event) {
    alert(' Except is replace with ' + this.state.value );
    event.preventDefault();
  }

  handleOpen () {
    this.setState({ model_open: true })
    console.log(this.state.model_open);
} 

handleClose ()  {
  
    this.setState({ model_open: false })
    
    console.log(this.state.model_open);
}



  render() {
   
    return (
      <div>
   
       
<div class="App-header3"> 
<h1  className="header" ><u> Pop Up Box </u> </h1>
      <p><b>Identify the missing word in this famous quote from Shakespeare's Richard III.</b><br/><br/>
      <pre class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now is the winter of our discontent</pre>
      <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;Made glorious summer by this sun of &nbsp;&nbsp;

<Popup  
 
     
      
 trigger={
  
  <b><mark class="mark" onClick={this.handleOpen}>except</mark></b>
 
} 

closeOnDocumentClick
open={this.state.model_open}

position="bottom">
<form onSubmit={this.handleSubmit}>
<label>Replace <u>Except</u> with</label><br></br><br></br>
<input type="text" value={this.state.value} onChange={this.handleChange} />
<br></br><br></br>
<input type="submit" value="Submit"  />
 
&nbsp;&nbsp;
<input type="button" value="Cancel" onClick={this.handleClose} />
      </form>
  </Popup>
</pre>
 
  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And all the clouds that lour'd upon our house</pre>

  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the deep bosom of the oceanburied.</pre>
</p>

</div>  

<div class="App-header1">
<h1  className="header" ><u> Box Above Paragraph </u> </h1>
<h2   > Replace <b>"except" </b>with :</h2>
<input type="text" required = {true}  value={this.state.value} onChange={this.handleChange} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
      <p><b>Identify the missing word in this famous quote from Shakespeare's Richard III.</b><br/><br/>
      <pre class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now is the winter of our discontent</pre>
      <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;Made glorious summer by this sun of &nbsp;&nbsp;

      <b><mark class="mark">except</mark></b>




</pre>
 
  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And all the clouds that lour'd upon our house</pre>

  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the deep bosom of the oceanburied.</pre>
</p>

</div>  



      <div class="App-header2">
      <h1  className="header" ><u> Same Box </u> </h1>
      <p><b>Identify the missing word in this famous quote from Shakespeare's Richard III.</b><br/><br/>
      <pre class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now is the winter of our discontent</pre>
      <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;Made glorious summer by this sun of &nbsp;&nbsp;


<input type="text" required = {true}  placeholder="except"  value={this.state.value}
        onChange={this.handleChange}
 onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>

</pre>
 
  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And all the clouds that lour'd upon our house</pre>

  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the deep bosom of the oceanburied.</pre>
</p>

</div> 

<div class="App-header1">
<h1  className="header" ><u>  Adjacent Box </u> </h1>
      <p><b>Identify the missing word in this famous quote from Shakespeare's Richard III.</b><br/><br/>
      <pre class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now is the winter of our discontent</pre>
      <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;Made glorious summer by this sun of &nbsp;&nbsp;



<input type="text"   readOnly placeholder="except"   />
<input type="text" required = {true}  value={this.state.value} onChange={this.handleChange} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>

</pre>
 
  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And all the clouds that lour'd upon our house</pre>

  <pre class="tab"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the deep bosom of the oceanburied.</pre>
</p>

</div>  

    
</div>




       
    );
  }
}

export default App;
