import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilter = ({ target }) => {
    // if (!target.value) {
    //     this.props.clear();
    // }
    // this.setState({
    //   [target.name]: target.value,
    // });
    this.props.userFilter(target.value);
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <input
          name="filter"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={this.handleFilter}
        />
      </div>
    );
  }
}
