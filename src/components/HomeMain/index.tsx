import styles from './HomeMain.module.scss';

import { PizzaCard } from '../PizzaCard';

export const HomeMain = () => {
	return (
		<main>
			<h2>Все пиццы</h2>
			<div className={styles.content_block}>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
				<PizzaCard></PizzaCard>
			</div>
		</main>
	);
};
