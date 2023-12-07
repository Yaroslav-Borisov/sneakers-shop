import { EmptyDrawer } from './EmptyDrawer';
import { SuccessDrawer } from './SuccessDrawer';
import { SimpleDrawer } from './SimpleDrawer';

export const Drawer = ({cartCards, isActive, onChange, removeCard, orderState, setOrderState}) => {
	
	const drawerCloser = (evt) => {
		evt.preventDefault();
		onChange(false);
		setOrderState(false);
	};

	return (
		<>	
			{cartCards.length !== 0 ?	
				<>
					{orderState ? <SuccessDrawer isActive={isActive} drawerCloser={drawerCloser}/> :
						<SimpleDrawer cartCards={cartCards} makeOrder={setOrderState} isActive={isActive} drawerCloser={drawerCloser} removeCard={removeCard}/>
					}
				</>
				:
				<EmptyDrawer isActive={isActive} drawerCloser={drawerCloser} />
			}
		</>
	);
};