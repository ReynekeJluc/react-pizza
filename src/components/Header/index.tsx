import styles from './Header.module.scss';

export const Header = () => {
	return (
		<header>
			<div className={styles.logo_block}>
				<img src='/img/logo.svg' alt='logo' />
				<div className={styles.title_block}>
					<h1>REACT PIZZA</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
			<div className={styles.cart_block}>
				<p>520 ₽</p>
				<span className={styles.divider}></span>
				<div className={styles.counter_block}>
					<img src='/img/icons/cart.svg' alt='cart' />
					<p>3</p>
				</div>
			</div>
		</header>
	);
};
