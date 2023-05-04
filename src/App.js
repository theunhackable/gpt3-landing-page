
import './App.css';
import '../src/components/index.css';
import { NavBar, Home, Features, OpenAI, WGPT, CaseStudy, CTA, Blog, Footer } from './components';
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
			<Features/>
			<CTA/>
			<Blog/>
		</main>
		<footer>
			<Footer/>
		</footer>
    </>
  );
}

export default App;
