import React from 'react';
class AddFish extends React.Component {
  render() {
    return (
        <form calssName="fish-edit">
          <input type="text" placeholder="Fish Name"/>
          <input type="text" placeholder="Fish Price"/>
          <select>
            <option value="avaiable">Fresh!</option>
            <option value="unavaiable">Sold Out!</option>
          </select>
          <textarea type="text" placeholder="Fish Dec">
          </textarea>
          <input type="text" placeholder="Fish Image"/>
          <button></button>
        </form>
    )
  }
}
export default AddFish;
