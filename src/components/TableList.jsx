import React, { Component } from "react";
import Form from "./Form";

class TableList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };

  returnList() {
    if (localStorage.getItem("list") == null)
      localStorage.setItem("list", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("list"));
  }

  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem("list", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    return (
      <div>
        <Form
          currentIndex={this.state.currentIndex}
          list={this.state.list}
          onAddOrEdit={this.onAddOrEdit}
        />
        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableList;
