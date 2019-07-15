import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { addUserNotebook } from '../actions/notebookActions';
import NotebookCard from './NotebookCard';

class Brand extends Component {
  render() {
    const { brand, notebooks, userNotebooks } = this.props;
    if (!brand) return null;
    const userNotebookIds = userNotebooks.map(
      userNotebook => userNotebook.relationships.notebook.data.id
    );
    return (
      <>
        <h2>{brand.name}</h2>
        <Grid columns={4}>
          {/* <Card.Group> */}
          {notebooks.map(notebook => (
            <NotebookCard
              key={notebook.id}
              userNotebookIds={userNotebookIds}
              notebook={notebook}
            />
          ))}
          {/* </Card.Group> */}
        </Grid>
      </>
    );
  }
}

Brand.propTypes = {
  brand: PropTypes.object,
  notebooks: PropTypes.array,
  userNotebooks: PropTypes.array,
};

export default connect(
  (state, props) => ({
    brand: state.brands.filter(b => b.id === +props.match.params.id)[0],
    notebooks: state.notebooks.allNotebooks.filter(
      notebook => notebook.attributes.brand_id === +props.match.params.id
    ),
    userNotebooks: state.notebooks.userNotebooks,
  }),
  { addUserNotebook }
)(Brand);
