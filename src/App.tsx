import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeMain } from './components/HomeMain';
import { Nav } from './components/Nav';

function App() {
	return (
		<>
			<div className='wrapper'>
				<Header></Header>
				<Nav></Nav>
				<HomeMain></HomeMain>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;

// TODO
/*
 Нужно пофиксить картинки пицц
	Сделать выпадашку сортировки
	Фикс на фильтры пицц
	Фикс на навигацию
*/
