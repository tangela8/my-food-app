import React, { Component } from 'react'
import RecipeMapping from './RecipeMapping';

const UserRecipe = 'NewRecipes';

class CrudComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newRecipe: [],
            message: null
        }
        this.deleteRecipeClicked = this.deleteRecipeClicked.bind(this)
        this.updateRecipeClicked = this.updateRecipeClicked.bind(this)
        this.addRecipeClicked = this.addRecipeClicked.bind(this)
        this.refreshRecipe = this.refreshRecipe.bind(this)
    }

    componentDidMount() {
        this.refreshRecipe();
    }
//Getting Hardcoded Data
    refreshRecipe() {
        RecipeMapping.retrieveAllRecipe(UserRecipe)
            .then(
                response => {
                    this.setState({ newRecipe: response.data })
                }
            )
    }

    deleteRecipeClicked(id) {
        RecipeMapping.deleteRecipe(UserRecipe, id)
            .then(
                response => {
                    this.setState({ message: `You have deleted Recipe ${id}` })
                    this.refreshRecipe()
                }
            )

    }

    addRecipeClicked() {
        this.props.history.push(`/newRecipe/0`)
    }

    updateRecipeClicked(id) {
        this.props.history.push(`/newRecipe/${id}`)
    }

    render() {

        return (
            <div className="container">
                {this.state.message && <div className="alertMessage">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Recipe Number</th>
                                <th>Food/Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.newRecipe.map(
                                    newRecipe =>
                                        <tr key={newRecipe.id}>
                                            <td>{newRecipe.id}</td>
                                            <td>{newRecipe.details}</td>
                                            <td><button className="updateButton" onClick={() => this.updateRecipeClicked(newRecipe.id)}>Update</button></td>
                                            <td><button className="deleteButton" onClick={() => this.deleteRecipeClicked(newRecipe.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="addButton">
                        <button className="Add" onClick={this.addRecipeClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CrudComponents
