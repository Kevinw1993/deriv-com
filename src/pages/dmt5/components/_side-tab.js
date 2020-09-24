import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Show } from 'components/containers'
import { Text } from 'components/elements'
import device, { size } from 'themes/device'

const TabContent = styled.div`
    width: 100%;
`
<<<<<<< HEAD
=======
const Content = styled.div`
    flex: 1;
    opacity: ${(props) => (props.selected ? '1' : '0')};
    transition: opacity 1s ease-in;
`
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
const TabButton = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-left: 1.6rem;
    margin-bottom: 2.4rem;
    cursor: pointer;

    ${Text} {
        font-weight: ${(props) => (props.selected ? 'bold' : 'unset')};
    }
    &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        left: 0;
        top: 0;
        background: ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-grey-29)')};
        transition: background 0.25s;
    }
    &:last-child {
        margin-bottom: 0;
    }

    @media ${device.tabletS} {
        margin-left: 16px;
    }
`

const TabList = styled.div`
    max-width: 38rem;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.is_reverse
            ? css`
                  margin-left: 2.4rem;
              `
            : css`
                  margin-right: 2.4rem;
              `}
    @media ${device.tabletL} {
        max-width: 30rem;
    }
    @media ${device.tabletS} {
        max-width: 576px;
        width: 100%;
        margin: 0;
    }
`

<<<<<<< HEAD
const Content = styled.div`
    flex: 1;
`

=======
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
const Desktop = styled(Show.Desktop)`
    flex: 1;
    width: 100%;
`

const Mobile = styled(Show.Mobile)`
    @media ${device.tabletS} {
        margin-bottom: 2.3rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        margin-bottom: 0;
    }
`

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}
<<<<<<< HEAD

const Tabs = ({ children, is_reverse }) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const selectTab = (tabIndex) => {
        setSelectedTab(tabIndex)
=======
const Tabs = ({ children, is_reverse, parent_tab }) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const [old_parent_tab, setOldParentTab] = React.useState(parent_tab)
    const prevParentRef = React.useRef()
    React.useEffect(() => {
        prevParentRef.current = old_parent_tab
        if (old_parent_tab !== parent_tab) setSelectedTab(0)
    })

    const selectTab = (tabIndex) => {
        setSelectedTab(tabIndex)
        setOldParentTab(parent_tab)
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
    }

    return (
        <Flex ai="flex-start" direction={is_reverse ? 'row-reverse' : 'row'}>
            <Desktop max_width={size.tabletS}>
<<<<<<< HEAD
                <Content>
                    {React.Children.map(children, (el, index) => {
                        return selected_tab === index ? el : undefined
                    })}
                </Content>
=======
                {React.Children.map(children, (el, index) => {
                    return (
                        <Content selected={selected_tab === index}>
                            {selected_tab === index ? el : undefined}
                        </Content>
                    )
                })}
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
            </Desktop>
            <TabList role="tablist" is_reverse={is_reverse}>
                {React.Children.map(children, (child, index) => {
                    const {
<<<<<<< HEAD
                        props: { label, description, item_width },
=======
                        props: { label, description, item_width, mobile_item_width },
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
                    } = child
                    return (
                        <>
                            <TabButton
                                role="tab"
                                selected={selected_tab === index}
                                aria-selected={selected_tab === index ? 'true' : 'false'}
                                onClick={() => selectTab(index)}
                            >
                                <Text weight="bold">{label}</Text>
                                <Text
                                    max_width={item_width || '36.4rem'}
<<<<<<< HEAD
=======
                                    mobile_max_width={mobile_item_width || item_width}
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
                                    size="var(--text-size-m)"
                                    mt="0.8rem"
                                >
                                    {description}
                                </Text>
                            </TabButton>
                            <Mobile min_width={size.tabletS}>
<<<<<<< HEAD
                                <Content>{selected_tab === index ? child : undefined}</Content>
=======
                                <Content selected={selected_tab === index}>
                                    {selected_tab === index ? child : undefined}
                                </Content>
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
                            </Mobile>
                        </>
                    )
                })}
            </TabList>
        </Flex>
    )
}

Tabs.Panel = TabPanel
<<<<<<< HEAD

Tabs.propTypes = {
    children: PropTypes.node,
    is_reverse: PropTypes.bool,
=======
Tabs.propTypes = {
    children: PropTypes.node,
    is_reverse: PropTypes.bool,
    parent_tab: PropTypes.string,
>>>>>>> 5d4b3f26bdb61f24ed9cadf3bea9d145e514a93f
    tab_break: PropTypes.string,
}

export default Tabs
