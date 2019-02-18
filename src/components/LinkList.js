import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
    render() {

        const FEED_QUERY = gql`
        {
            feed {
            links {
                id
                createdAt
                url
                description
            }
            }
        }
        `;

        const linksToRender = [
            {
            id: '1',
            description: 'Prisma turns your database into a GraphQL API 😎',
            url: 'https://www.prismagraphql.com',
            },
            {
            id: '2',
            description: 'The best GraphQL client',
            url: 'https://www.apollographql.com/docs/react/',
            },
        ]

        return (
            <Query query={FEED_QUERY}>
                {({loading, error, data}) => {  //here is where the object is read by the keys in it
                    console.log('inside query');
                    console.log(loading);
                    console.log(error);
                    console.log(data);
                    if(loading || error) {
                        console.log('returning from lack of data ****************** ');
                        return (
                            <div> Fetching.... </div>
                        )
                    }
                    const linksToRender = data.feed.links;

                    return linksToRender.map(link => { 
                        return <Link key={link.id} link={link}> </Link>
                    })

                }
                       
                }
            </Query>
        )
    }
}

export default LinkList;