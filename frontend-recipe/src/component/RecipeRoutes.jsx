import React, { Component } from 'react';
import CrudComponents from './CrudComponents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RecipeComponent from './RecipeComponent';

class RecipeRoutes extends Component {
    render() {
        return (
            <Router>
                <>
                    <h2>Add New Recipes Below</h2>
                    <Switch>
                        <Route path="/" exact component={CrudComponents} />
                        <Route path="/newRecipe" exact component={CrudComponents} />
                        <Route path="/newRecipe/:id" component={RecipeComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default RecipeRoutes