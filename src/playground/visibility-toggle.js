class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    }

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
      </button>
      {this.state.visibility && <p>Some info</p>}
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app') );

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderForm();
// }

// const renderForm = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && <p>Some info</p>}
//     </div>
//   );
  
//   ReactDOM.render(template, document.getElementById('app'));
// }

// renderForm();