import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeCharacters } from "./views/home";
import { Planets } from "./views/planets";
import { Starchips } from "./views/starchips";
import { DetailsCharacters } from "./views/detailscharacters";
import { DetailsPlanets } from "./views/detailsplanets";
import { DetailsStarchips } from "./views/detailsstarchips";
import NotFound from "./views/NotFound";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomeCharacters />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/starchips">
							<Starchips />
						</Route>
						<Route exact path="/detailscharacters/:id">
							<DetailsCharacters />
						</Route>
						<Route exact path="/detailsplanets/:id">
							<DetailsPlanets />
						</Route>
						<Route exact path="/detailsstarchips/:id">
							<DetailsStarchips />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
