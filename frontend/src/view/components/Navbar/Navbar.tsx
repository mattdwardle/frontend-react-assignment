import React from 'react'
import { createStyles, Grid } from '@mantine/core'
import { ChildlessBaseComponent } from '../../../app/interfaces/BaseComponent'
import classNames from 'classnames'
import { NavLink } from './NavLink'
import { colors } from '../../../app/constants/colors'
import { useLocation } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
    navbarContainer: {
        backgroundColor: colors.blue,
        paddingRight: theme.spacing.lg,
        paddingLeft: theme.spacing.lg,
        alignItems: 'center',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexShrink: 0,
    },
}))

export const Navbar = ({ className }: ChildlessBaseComponent) => {
    const { classes } = useStyles()
    const location = useLocation()

    return (
        <Grid className={classNames(className, classes.navbarContainer)}>
            <Grid.Col span={6}>
                <img src="/images/ET-logo.png" alt="Events travel logo" />
            </Grid.Col>
            <Grid.Col span={6} className={classes.linksContainer}>
                <NavLink href="/">Home</NavLink>
                {(location.pathname === '/list-tickets' || location.pathname === '/') && (
                    <NavLink href="/add-tickets">Add Tickets</NavLink>
                )}
                {(location.pathname === '/add-tickets' || location.pathname === '/') && (
                    <NavLink href="/list-tickets">List Tickets</NavLink>
                )}
            </Grid.Col>
        </Grid>
    )
}
