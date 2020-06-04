import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import RecipeMapping from './RecipeMapping';
//Link to backend data
const UserRecipe = 'NewRecipes';

class RecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            details: ''
        }

        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        if (this.state.id == -1) {
            return
        }

        RecipeMapping.retrieveRecipe(UserRecipe, this.state.id)
            .then(response => this.setState({
                details: response.data.details
            }))
    }

    onSubmit(values) {
        let userRecipe = UserRecipe

        let newFood = {
            id: this.state.id,
            details: values.details,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            RecipeMapping.createRecipe(userRecipe, newFood)
                .then(() => this.props.history.push('/newReipce'))
        } else {
            RecipeMapping.updateRecipe(userRecipe, this.state.id, newFood)
                .then(() => this.props.history.push('/newRecipe'))
        }

        console.log(values);
    }
    render() {

        let { details: details, id } = this.state

        return (
            <div>
                <h3>Recipe</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, details }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>                             
                                    <fieldset className="form">
                                        <label>Id</label>
                                        <Field className="form" type="text" name="id" disabled />
                                        <label>Ingredients Update</label>
                                        <Field className="form" type="text" name="details" />
                                    </fieldset>
                                    <button className="saveButton" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }

}

export default RecipeComponent