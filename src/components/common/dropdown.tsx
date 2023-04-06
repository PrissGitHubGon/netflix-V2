import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Icon from "./icon";

interface DropdownItemProps {
  title: string;
  size: string;
  itemFirst: string;
  itemSecond: string;
  pathFirstItem: string;
  pathSecondItem: string;
  classNameContainer: string;
  onFirstLangClick: any;
  onSecondLangClick: any;
}

const DropdownCommon = ({
  title,
  itemFirst,
  itemSecond,
  pathFirstItem,
  pathSecondItem,
  size,
  classNameContainer,
  onFirstLangClick,
  onSecondLangClick,
}: DropdownItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className={classNameContainer}
    >
      <DropdownToggle caret size={size}>
        <Icon icon={faGlobe} /> {title}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={onFirstLangClick}>
          {" "}
          <Link to={pathFirstItem}>{itemFirst}</Link>{" "}
        </DropdownItem>
        <DropdownItem onClick={onSecondLangClick}>
          <Link to={pathSecondItem}>{itemSecond}</Link>{" "}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCommon;
