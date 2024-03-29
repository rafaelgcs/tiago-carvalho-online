import React from 'react';
import clsx from 'clsx';

import { Fab, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle";

const useStylesF = makeStyles(styles);

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        zIndex: 100000,
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

const FloatWhatsappButton = () => {
    const classes = useStyles();
    const classesF = useStylesF();
    const fab = {
        color: 'inherit',
        className: clsx(classes.fab, classes.fabGreen),
        icon: <WhatsAppIcon />,
        label: 'Expand',
    };

    return (
        <a href="https://api.whatsapp.com/send?phone=5571992483233" target="_blank" rel="noopener noreferrer">
            <Tooltip
                id="whatsapp-tooltip"
                title="Fale comigo!"
                placement="left"
                classes={{ tooltip: classesF.tooltip }}
            >
                <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                    {fab.icon}
                </Fab>
            </Tooltip>
        </a>
    );
}

export default FloatWhatsappButton