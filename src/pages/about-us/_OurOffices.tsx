import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { SectionContainer, CssGrid, Show, Flex } from 'components/containers'
import { Header, QueryImage, ImageWrapper, Text } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        earth: file(relativePath: { eq: "about-us/earth.png" }) {
            ...fadeIn
        }
        earth_mobile: file(relativePath: { eq: "about-us/earth-mobile.png" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        font-size: 28px;
    }
`

const StyledImageWrapper = styled(ImageWrapper)`
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`

const NumberSection = styled(CssGrid)`
    max-width: 788px;

    @media ${device.tabletL} {
        grid-column-gap: 4rem;
    }

    @media ${device.tabletS} {
        grid-template-columns: minmax(auto, 484px);
        grid-row-gap: 24px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        justify-content: start;
    }
`

const NumberHeader = styled(Text)`
    font-weight: bold;
    line-height: 6rem;
    text-align: left;

    @media ${device.mobileL} {
        margin-bottom: 8px;
    }
`

const NumberText = styled(Text)`
    font-weight: 400;
    text-align: left;
    margin-top: 8px;
`

const StyledQueryImage = styled(QueryImage)`
    z-index: 2;
`

const OurOffices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our international offices')}
            </StyledHeader>

            <Flex>
                <StyledQueryImage data={data['earth']} alt="example" width="100%" />
            </Flex>
            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                <Flex fd="column">
                    <NumberHeader size="48px">{localize('750+')}</NumberHeader>
                    <NumberText size="20px" align="left">
                        {localize('employees')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="48px">{localize('50+')}</NumberHeader>
                    <NumberText size="20px" align="left">
                        {localize('nationalities')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="48px">{localize('13')}</NumberHeader>
                    <NumberText size="20px" align="left">
                        {localize('offices')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="48px">{localize('10')}</NumberHeader>
                    <NumberText size="20px" align="left">
                        {localize('countries')}
                    </NumberText>
                </Flex>
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
