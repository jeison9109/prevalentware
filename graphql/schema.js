import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Company {
    id: ID
    name: String
    businessName: String
    type: String
    identification: Int
    numEmployees: Int
    logo: String
  }
  type Query {
    companies: [Company]!
  }
`;
