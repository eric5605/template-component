// The h1 element is a child element of Template, it will be passed to Template as props.children. The h1 element will be rendered at the location where the code {props.children} is in the Template component.
const App = () => {
  return (
    <Template>
      <h1>Main content</h1>
    </Template>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
