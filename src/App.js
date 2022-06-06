import logo from "./logo.svg";
import "./App.css";
const Header = () => {
  return (
    <header>
      <a href="/">
        <h1>WWW</h1>
      </a>
    </header>
  );
};
const Nav = ({ data }) => {
  const list = data.map((e) => {
    return (
      <li key={e.id}>
        <a href={`/read/${e.id}`}>{e.title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{list}</ol>
    </nav>
  );
};
const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
};
function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
  ];
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello,Web"></Article>
    </div>
  );
}

export default App;
