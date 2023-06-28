import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import SocialLink from './components/SocialLink';

function App() {
	return (
		<div>
			<Header></Header>
			<Home></Home>
			<About></About>
			<Portfolio></Portfolio>
			<Experience></Experience>
			<Contact></Contact>
			<SocialLink></SocialLink>
		</div>
	);
}

export default App;
