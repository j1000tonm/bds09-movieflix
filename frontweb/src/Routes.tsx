import { Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/Navbar";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import history from "util/history";

const Routes = () => (
        <Router history={history}>
            <Navbar />
            <Switch>
            <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <MovieCatalog />
                </Route>
                <Route path="/movies/1">
                    <MovieDetails />
                </Route>
            </Switch>        
        </Router>
);

export default Routes;