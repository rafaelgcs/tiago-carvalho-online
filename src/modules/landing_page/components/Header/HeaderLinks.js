/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, TurnedIn } from "@material-ui/icons";
// import TurnedInIcon from '@material-ui/icons/TurnedIn';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { links } from "modules/landing_page/constants/constants";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const renderDropdownLink = (item) => {
    if (item.local) {
      return <Link to={item.link} className={classes.dropdownLink}>
        {item.title}
      </Link>
    } else {
      return <a
        href={item.link}
        target={item.target}
        className={classes.dropdownLink}
      >
        {item.title}
      </a>
    }
  }

  const renderListItem = (item) => {
    if (item.isDropdown) {
      return <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={item.text}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={item.icon ? <i className={classes.socialIcons + ` ${item.icon}`} /> : TurnedIn}
          dropdownList={item.dropdownList.map(dlItem => {
            return renderDropdownLink(dlItem);
          })}
        />
      </ListItem>
    }
    else if (item.tooltip) {
      return <ListItem className={classes.listItem}>
        <Tooltip
          id={`tooltip__${item.text}`}
          title={item.tooltipText}
          placement={item.tooltipDirection}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href={item.link}
            target={item.target}
            color="transparent"
            className={classes.navLink}
          >
            {item.icon && <i className={classes.socialIcons + ` ${item.icon}`} />} {item.text}
          </Button>
        </Tooltip>
      </ListItem>
    } else {
      return <ListItem className={classes.listItem}>
        <Button
          href={item.link}
          color="transparent"
          target={item.target}
          className={classes.navLink}
        >
          {item.icon && <i className={classes.socialIcons + ` ${item.icon}`} />} {item.text}
        </Button>
      </ListItem>
    }
  }
  return (
    <List className={classes.list + "d-block d-md-none"}>
      {links.map(link => renderListItem(link))}
    </List>
  );
}
