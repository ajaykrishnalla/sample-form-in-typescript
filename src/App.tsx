import * as React from "react";

interface Props {}
interface State {
  username: string;
  comments: string;
  topic: string;
  isGoing: boolean;
  [x: string]: string | boolean;
}

class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
      isGoing: true
    };
  }

  handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = (event: React.ChangeEvent) => {
    this.setState(state => ({
      isGoing: !state.isGoing
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(
      `${this.state.username} ${this.state.comments} ${this.state.topic} ${
        this.state.isGoing
      }`
    );
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            name="comments"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleChange} name="topic">
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <label>
          Is going:
          <input
            type="checkbox"
            name="isGoing"
            checked={this.state.isGoing}
            onChange={this.handleCheckbox}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
