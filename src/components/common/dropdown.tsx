import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

interface DropdownItemProps {
  title: string;
  itemFirst: string;
  itemSecond: string;
  pathFirstItem: string;
  pathSecondItem: string;
}

const DropdownCommon = ({
  title,
  itemFirst,
  itemSecond,
  pathFirstItem,
  pathSecondItem,
}: DropdownItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="sm">
        {title}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link to={pathFirstItem}>{itemFirst}</Link>{" "}
        </DropdownItem>
        <DropdownItem>
          <Link to={pathSecondItem}>{itemSecond}</Link>{" "}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCommon;
