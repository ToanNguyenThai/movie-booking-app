
import Layout from "./component/Layout";
import "./style.css"
import DataProvider from "./context/Context";
function App() {
	return (
		<div className="App">
			<DataProvider>
				<Layout></Layout>
			</DataProvider>
		</div>
	);
}

export default App;
