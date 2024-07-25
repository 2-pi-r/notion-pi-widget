import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from '@lyket/react';
import { LikeButton } from '@lyket/react';

ReactDOM.render(
  <Provider apiKey="pt_43aef4ee7acb29ab69c58436c129b7">
    <App />
  </Provider>,
  document.getElementById('root')
);
								
export const Faq = () => {
	return (
		<>
			<h4 id="Do you like pizza?">Do you like pizza?</h4>
			<LikeButton
				id="do-you-like-pizza"
				namespace="faq"
				hideCounterIfLessThan={1}
			>
				{({
					handlePress,
					totalLikes,
					userLiked,
					isLoading,
					isCounterVisible
				}) => (
					<>
						<button onClick={handlePress} disabled={isLoading}>
							🍕
						</button>
						{isCounterVisible && <div>Total: {totalLikes}</div>}
						{userLiked && <div>Great! I like pizza as well!</div>}
					</>
				)}
			</LikeButton>
		</>
	)
};