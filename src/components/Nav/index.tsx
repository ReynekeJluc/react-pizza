import styles from './Nav.module.scss';

export const Nav = () => {
	return (
		<nav>
			<div className={styles.left_block}>
				<button className={styles.filter_link}>Все</button>
				<button className={styles.filter_link}>Мясные</button>
				<button className={styles.filter_link}>Вегетарианская</button>
				<button className={styles.filter_link}>Гриль</button>
				<button className={styles.filter_link}>Острые</button>
				<button className={styles.filter_link}>Закрытые</button>
			</div>
			<div className={styles.right_block}>
				<img src='/img/icons/arrow_top.svg' alt='arrow_top' />
				<p>Сортировка по:</p>
				<button>популярности</button>
			</div>
		</nav>
	);
};
