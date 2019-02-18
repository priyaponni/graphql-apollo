import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import  gql from 'graphql-tag';

class CreateLink extends Component {
  
    state = {
        description: '',
        url: ''
    };

    render() {
        let { description, url } = this.state;
        let POST_MUTATION = gql`
        mutation postMutation($description: String!, $url: String!) {
            post(url: $url, description: $description) {
                id
                createdAt
                  votes {
                  id
                }
            }
          }
          `;
    
        return (
            
            <div className="flex flex-column mt3">
                <input value={this.state.description} 
                    className="mb2"
                    type="text"
                    onChange={e => this.setState({description: e.target.value})} 
                    placeholder="A description for the link"/>
                <input value={this.state.url} 
                    className="mb2"
                    type="text"
                    onChange={e => this.setState({url: e.target.value})} 
                    placeholder="A URL for the link"/>
                <Mutation mutation={POST_MUTATION} variables={{description, url}} >
                   {(postMutation) =>
                     <button onClick={postMutation}>Submit</button>
                   }
                </Mutation>
            </div>
        )
    }
}

export default CreateLink;