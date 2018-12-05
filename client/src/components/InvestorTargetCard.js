import moment from 'moment';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import {
  Box,
  Content,
  Media,
  Image,
  Columns,
} from 'react-bulma-components/full';

import MutativeFundraisingStageSelect from './MutativeFundraisingStageSelect';
import FundraisingStageProgress from './FundraisingStageProgress';

class InvestorTargetCard extends Component {
  render() {
    const { investorTarget, history } = this.props;
    const { investor } = investorTarget;

    return (
      <Box
        onClick={() => history.push(`/investors/${investorTarget.id}`)}
        style={{ marginBottom: 0, borderRadius: 0 }}
      >
        <Media>
          <Media.Item position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>

          <Media.Item>
            <Columns>
              <Columns.Column>
                <Content>
                  <strong>{investor.person.fullName}</strong>
                  <p>
                    { investor.firm ? investor.firm.name : 'Individual/Angel' }<br />
                    { investor.person.email ? <span>{investor.person.email}<br /></span> : null }
                    { investorTarget.nextFollowUpAt ? (
                      <span className="has-text-danger">
                        Follow up on {moment(investorTarget.nextFollowUpAt).format('MMM DD')}<br />
                      </span>
                    ) : null }
                  </p>
                </Content>
              </Columns.Column>

              <Columns.Column>
                <div className="is-pulled-right">
                  <MutativeFundraisingStageSelect investorTarget={investorTarget} />

                  <FundraisingStageProgress fundraisingStage={investorTarget.fundraisingStage} />
                </div>
              </Columns.Column>
            </Columns>
          </Media.Item>
        </Media>
      </Box>
    );
  }
}

export default withRouter(InvestorTargetCard);
