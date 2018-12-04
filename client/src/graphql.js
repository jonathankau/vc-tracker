import gql from 'graphql-tag';

const ALL_INVESTOR_FIELDS_FRAGMENT = gql`
  fragment AllInvestorFields on InvestorTarget {
    id
    fundraisingStage
    nextFollowUpAt

    investor {
      person {
        fullName
        email
        signalProfileUrl
      }

      firm {
        name
      }
    }
  }
`;

export const ALL_INVESTOR_TARGETS_QUERY = gql`
  query LoadAllInvestorTargets {
    investorTargets {
      ...AllInvestorFields
    }
  }

  ${ALL_INVESTOR_FIELDS_FRAGMENT}
`;

export const SINGLE_INVESTOR_TARGET_QUERY = gql`
  query LoadInvestorTarget($id: ID!) {
    investorTarget(id: $id) {
      ...AllInvestorFields
    }
  }

  ${ALL_INVESTOR_FIELDS_FRAGMENT}
`;

export const CREATE_INVESTOR_TARGET_MUTATION = gql`
  mutation CreateInvestorTarget($attributes: CreateInvestorTargetAttributes!) {
    createInvestorTarget(attributes: $attributes) {
      investorTarget {
        ...AllInvestorFields
      }
    }
  }

  ${ALL_INVESTOR_FIELDS_FRAGMENT}
`;

export const EDIT_INVESTOR_TARGET_MUTATION = gql`
  mutation EditInvestorTarget($id: ID!, $attributes: EditInvestorTargetAttributes!) {
    editInvestorTarget(id: $id, attributes: $attributes) {
      investorTarget {
        ...AllInvestorFields
      }
    }
  }

  ${ALL_INVESTOR_FIELDS_FRAGMENT}
`;
