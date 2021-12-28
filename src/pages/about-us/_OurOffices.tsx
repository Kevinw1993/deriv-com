import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, CssGrid, Show, Flex } from 'components/containers'
import { Header, QueryImage, ImageWrapper, Text, BackgroundImage } from 'components/elements'
import device from 'themes/device'

import { ReactComponent as PinPin } from 'images/svg/about-us/pin.svg'
import { ReactComponent as Chevron } from 'images/svg/custom/chevron-thick.svg'

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
    line-height: 4rem;
    margin-bottom: 69px;
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
    text-align: center;

    @media ${device.mobileL} {
        margin-bottom: 8px;
    }
`

const NumberText = styled(Text)`
    font-weight: 400;
    text-align: center;
`

const PinContent = styled(LocalizedLink)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-white);
    box-shadow: rgba(0, 0, 0, 0.05) 0 16px 20px 0, rgba(0, 0, 0, 0.05) 0 0 20px 0;
    border-radius: 5px;
    padding: 1rem 1.6rem;
    text-align: center;
    position: relative;
    left: -43%;
    top: -55px;
    transition: opacity 0.25s;
    z-index: 3;
    text-decoration: none;

    &::after {
        content: '';
        width: 12px;
        height: 12px;
        background: var(--color-white);
        position: absolute;
        transform: rotate(45deg);
        top: 83%;
        left: 40.5%;
    }
`

const ChevronRight = styled(Chevron)`
    transform: rotate(90deg);
    width: 16px;
    height: 16px;

    .chevron-thick-path {
        fill: var(--color-red);
    }
`

type PinWrapperProps = {
    left: string
    top: string
    to: string
}

const PinWrapper = styled.div<PinWrapperProps>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    cursor: pointer;
`

const MapImage = styled(BackgroundImage)`
    position: relative;
    width: 840px;
    overflow: auto;
    height: 414px;
    background-color: transparent;
    background-size: cover;

    /* @media screen and (min-width: 992px) {
        min-width: 1177px;
        overflow: hidden;
    }

    @media screen and (max-width: 992px) and (min-width: 575px) {
        width: 100%;
        height: calc(100vw / 2.6);
    }

    @media screen and (max-width: 575px) {
        width: 100%;
        height: calc(100vw / 1.84);
    }

    @media ${device.tabletS} {
        margin-bottom: 25px;
    } */
`

const MapPin = ({ top, left, title, link }) => {
    const [is_pin_show, setPinShow] = React.useState(false)
    return (
        <PinWrapper
            onMouseEnter={() => setPinShow(true)}
            onMouseLeave={() => setPinShow(false)}
            top={top}
            left={left}
            to={link}
        >
            <PinPin />
            {is_pin_show && (
                <PinContent to={link} anchor>
                    <Text color="black" mr="8px">
                        {title}
                    </Text>
                </PinContent>
            )}
        </PinWrapper>
    )
}

const OurOffices = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="32px" align="center" type="page-title">
                {localize('Our international offices')}
            </StyledHeader>

            <Flex>
                <MapImage data={data['earth']}>
                    <MapPin
                        left="30%"
                        top="75%"
                        title="Paraguay"
                        link="/careers/locations/asuncion"
                    />
                    <MapPin
                        left="50%"
                        top="39.5%"
                        title={localize('Malta')}
                        link="/careers/locations/malta"
                    />
                    <MapPin
                        left="55%"
                        top="40%"
                        title={localize('Cyprus')}
                        link="/careers/locations/cyprus"
                    />
                    <MapPin
                        left="54%"
                        top="61.5%"
                        title={localize('Rwanda')}
                        link="/careers/locations/rwanda"
                    />
                    <MapPin
                        left="54%"
                        top="27.5%"
                        title={localize('Belarus')}
                        link="/careers/locations/minsk"
                    />
                    <MapPin
                        left="61.5%"
                        top="45.9%"
                        title={localize('Dubai')}
                        link="/careers/locations/dubai"
                    />
                    <MapPin
                        left="73.8%"
                        top="58.5%"
                        title={localize('Ipoh')}
                        link="/careers/locations/ipoh"
                    />
                    <MapPin
                        left="74%"
                        top="59%"
                        title={localize('Cyberjaya')}
                        link="/careers/locations/cyberjaya"
                    />
                    <MapPin
                        left="74.2%"
                        top="60%"
                        title={localize('Melaka')}
                        link="/careers/locations/melaka"
                    />
                    <MapPin
                        left="77.2%"
                        top="58.7%"
                        title={localize('Labuan')}
                        link="/careers/locations/labuan"
                    />
                    <MapPin left="45.8%" top="28%" title={localize('London')} link="" />
                    <MapPin left="47.4%" top="30.9%" title={localize('Paris')} link="" />
                    <MapPin left="44.5%" top="30.9%" title={localize('Guernsey')} link="" />
                </MapImage>
            </Flex>

            <NumberSection columns="1fr 1fr 1fr 1fr" column_gap="120px" row_gap="4rem">
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('750+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('employees')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('50+')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('nationalities')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('13')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('offices')}
                    </NumberText>
                </Flex>
                <Flex fd="column">
                    <NumberHeader size="32px">{localize('10')}</NumberHeader>
                    <NumberText size="20px" align="center">
                        {localize('countries')}
                    </NumberText>
                </Flex>
            </NumberSection>
        </StyledSectionContainer>
    )
}

export default OurOffices
