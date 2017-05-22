import React from 'react';
import AddFish from './AddFish';
class Inventory extends React.Component {
  render() {
    return (
      <div>
      <h2>Inventory</h2>
      <AddFish/>
      </div>
    )
  }
}
export default Inventory;
