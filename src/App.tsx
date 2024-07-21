import { Header } from './components/Header';

function App() {
	return (
		<>
			<div className='wrapper'>
				<Header></Header>
				<nav>
					<div className='left_block'>
						<button className='filter_link'>Все</button>
						<button className='filter_link'>Мясные</button>
						<button className='filter_link'>Вегетарианская</button>
						<button className='filter_link'>Гриль</button>
						<button className='filter_link'>Острые</button>
						<button className='filter_link'>Закрытые</button>
					</div>
					<div className='right_block'>
						<img src='/img/icons/arrow_top.svg' alt='arrow_top' />
						<p>Сортировка по:</p>
						<button></button>
					</div>
				</nav>
				<main>
					<h2>Все пиццы</h2>
					<div className='content_block'>
						<div className='pizza_card'>
							<img src='/img/pizzas/cheeseburger_1.png' alt='pizza-image' />
							<h3>Чизбургер-пицца</h3>
							<div className='params_block'>
								<div className='types_block'>
									<button></button>
									<button></button>
								</div>
								<div className='size_block'>
									<button></button>
									<button></button>
									<button></button>
								</div>
								<div className='total_block'>
									<h4>от 395 ₽</h4>
									<button>
										<img src='/img/icons/add.svg' alt='add' />
										<p>Добавить</p>
										<div className='counter'>2</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</main>
				<footer>Copyright © 2024</footer>
			</div>
		</>
	);
}

export default App;
