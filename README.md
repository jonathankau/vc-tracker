# Investor Tracker

Sample application w/ Rails, GraphQL (graphql-ruby), and React/Apollo.

## Initial setup

1. Install Ruby 2.5.0 with rbenv.
2. Install Ruby gems with `bundle install`.
3. Create and migrate your development DB with `rails db:create` and `rails db:migrate`.
4. Navigate to `/client` and run `yarn install`. You may need to install a compatible version of Node with nvm.

## Local development

### Backend

* Run `rails s`.
* Navigate to http://localhost:3000/graphiql to explore the GraphQL schema.

### Frontend

* Run `yarn start` from the `client/` folder.
* Navigate to http://localhost:8080 to view the application.
