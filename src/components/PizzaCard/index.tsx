import styles from './PizzaCard.module.scss';

export const PizzaCard = () => {
	return (
		<div className={styles.pizza_card}>
			<img src='/img/pizzas/cheeseburger_1.png' alt='pizza-image' />
			<h3>Чизбургер-пицца</h3>
			<div className={styles.filter_block}>
				<div className={styles.params_block}>
					<div className={styles.types_block}>
						<button>тонкое</button>
						<button>традиционное</button>
					</div>
					<div className={styles.size_block}>
						<button>26 см.</button>
						<button>30 см.</button>
						<button>40 см.</button>
					</div>
				</div>
				<div className={styles.total_block}>
					<h4>от 395 ₽</h4>
					<button>
						<img src='/img/icons/add.svg' alt='add' />
						<p>Добавить</p>
						<div className={styles.counter}>2</div>
					</button>
				</div>
			</div>
		</div>
	);
};
