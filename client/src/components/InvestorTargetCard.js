import React from 'react';

import {
  Box,
  Content,
  Media,
  Image,
  Progress,
  Columns,
} from 'react-bulma-components/full';

import MutativeFundraisingStageSelect from './MutativeFundraisingStageSelect';

const InvestorTargetCard = ({ investorTarget }) => {
  const { investor } = investorTarget;

  return (
    <Box>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </Media.Item>

        <Media.Item>
          <Columns>
            <Columns.Column>
              <Content>
                <strong>{investor.person.fullName}</strong>
                <p>
                  { investor.firm ? investor.firm.name : 'Individual/Angel' }<br />
                  { investor.person.email ? <span>{investor.person.email}<br /></span> : null }
                </p>
              </Content>
            </Columns.Column>

            <Columns.Column>
              <div className="is-pulled-right">
                <MutativeFundraisingStageSelect investorTarget={investorTarget} />

                <Progress style={{ width: 200, marginTop: '1rem' }} max={100} value={15} color="warning"/>
              </div>
            </Columns.Column>
          </Columns>
        </Media.Item>
      </Media>
    </Box>
  );
};

export default InvestorTargetCard
