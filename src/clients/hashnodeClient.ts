import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { HASHNODE_GRAPHQL_ENDPOINT, HASHNODE_ACCESS_TOKEN } from '@/config/env'

export const { getClient: hashnodeClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: HASHNODE_GRAPHQL_ENDPOINT,
      fetchOptions: {
        cache: 'no-store'
      },
      headers: {
        Authorization: `Bearer ${HASHNODE_ACCESS_TOKEN}`
      }
    })
  })
})
