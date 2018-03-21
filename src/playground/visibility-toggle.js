let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderForm();
}

const renderForm = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && <p>Some info</p>}
    </div>
  );
  
  ReactDOM.render(template, document.getElementById('app'));
}

renderForm();