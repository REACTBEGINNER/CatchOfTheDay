import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.gotoStore = this.gotoStore.bind(this);
  // }
  gotoStore(event) {
    event.preventDefault();
    console.log('Yu change the URL');
    const storeId = this.storeInput.value;
    console.log('Going to ${storeId}');
    this.context.router.transitionTo('/store/${storeId}');
  }
  render() {
    return(
    <form className="store-selector" onSubmit={(e)=>this.gotoStore(e)}>
    <h2>Plase Enter A Store</h2>
    <input type="text" required placeholder="Store Name"
    defaultValue={ getFunName() } ref={(input)=>{this.storeInput = input}}/>
    <button type="submit">Visit Store →</button>
    </form>
    )
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
