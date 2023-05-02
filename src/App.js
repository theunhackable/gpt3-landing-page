import logo from './logo.svg';
import './App.css';
import '../src/components/index.css';
import { NavBar, Home, Library, OpenAI, WGPT, CaseStudy, Footer } from './components';
function App() {
  return (
    <>
		<header>
			<NavBar/>
		</header>
		<main>
			<Home/>
			<WGPT/>
			<OpenAI/>
			<Library/>
			<CaseStudy/>
		</main>
		<footer>
			<Footer/>
		</footer>
    </>
  );
}

export default App;
