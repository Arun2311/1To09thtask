import React, { Component } from "react";
import "./datalists.css";

class DataLists extends Component {
  state = {
    submit: false,

    user: [
      {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      },
      {
        id: 2,
        name: "Hester Hogan",
        age: 32,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      },
      {
        id: 3,
        name: "Larry Little",
        age: 36,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      },
      {
        id: 4,
        name: "Sean Walsh",
        age: 34,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
      {
        id: 5,
        name: "Lola Gardner",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      },
    ],
  };
  handleclear = () => {
    this.setState({ submit: true });
    this.setState({ id: "", name: "", age: "", image: "" });
  };
  render() {
    return (
      <body className="main">
        {!this.state.submit && (
          <div>
            <div className="birthday">
              <h4 class="birthday-count">
                {this.state.user.length} Birthdays Today
              </h4>
              {this.state.user.map((usersg) => (
                <div class="picture" key={usersg.id}>
                  <img
                    className="displaying-picture"
                    alt=""
                    src={usersg.image}
                    height="100"
                    width={100}
                  />
                  <span class="name-age">
                    <h6>{usersg.name}</h6>
                    <p>{usersg.age} years</p>
                  </span>
                </div>
              ))}
              <div>
                <button className="clear-all" onClick={this.handleclear}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.submit && (
          <div>
            <label>Zero Birthdays Today</label>
          </div>
        )}
      </body>
    );
  }
}
export default DataLists;