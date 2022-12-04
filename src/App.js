import React from 'react';
import {Route, Routes} from "react-router-dom";
import * as Pages from './Pages';

const App = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Pages.Main/>}/>
				<Route path={'/more/:names'} element={<Pages.More/>}/>
			</Routes>
		</>
	);
};

export default App;