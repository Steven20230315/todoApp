import styled from 'styled-components';

const Wrapper = styled.section`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h1 {
		color:var(--primary-300);
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
		margin-bottom: 1.5rem;
	}
	p {
		line-height: 1.8;
		color: var(--text-secondary-color);
		margin-bottom: 1rem;
		max-width: 35em;
	}
	.register-link {
		margin-right: 1rem;
	}
	.btn {
		padding: 0.75rem 1rem;
	}
	.main-img {
		display: none;
	}
	@media (992px <= width) {
		.page {
			grid-template-columns: 1fr 400px;
			column-gap: 4rem;
		}
		.main-img {
			display: block;
		}
	}
`;
export default Wrapper;
