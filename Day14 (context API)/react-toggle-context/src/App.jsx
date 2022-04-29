import styled from 'styled-components';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import './App.css';

const App = () => {
	return (
		<Main>
			<Section1 />
			<Section2 />
		</Main>
	);
};

export default App;

const Main = styled.div`
	display: flex;
`;