import React from 'react'
import PropTypes from 'prop-types'
import AvailablePlatforms from '../helper/_available-platforms.js'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import { SectionContainer, Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

const Multipliers = ({ market_content, is_crypto }) => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
            <Descriptions>
                <StyledText align="center">
                    {!is_crypto
                        ? localize(
                              'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
                          )
                        : localize(
                              'Multipliers allow you to increase your potential profit and limit your potential loss. If the market moves in your favour, your profit is amplified by the chosen multiplier, and if the market moves against your prediction, you won’t lose more than your initial stake.',
                          )}
                </StyledText>
                <AvailablePlatforms dtrader />
            </Descriptions>
            <Header as="h3" type="paragraph-1" mt="4rem">
                {localize('Instruments available for multipliers trading')}
            </Header>
            <MarketInstruments market_content={market_content} />
            <Show.Eu>
                {market_content.eu_content?.map((text, index) => (
                    <Text key={index} mt="1.6rem" color="grey-5" size="var(--text-size-xs)">
                        {text}
                    </Text>
                ))}
            </Show.Eu>
        </ContentWrapper>
    </SectionContainer>
)

Multipliers.propTypes = {
    is_crypto: PropTypes.bool,
    market_content: PropTypes.object,
}

export default Multipliers
