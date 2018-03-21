console.log("App.js is running!");

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderForm();
  }
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
}

const onRemoveAllOptions = () => {
  app.options = [];
  renderForm();
}

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAllOptions}>Remove all options</button>
      <ol>
      {
        app.options.map((option)=>{
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, document.getElementById('app'));
}

renderForm();