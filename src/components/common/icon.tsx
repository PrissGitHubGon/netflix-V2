import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconProp;
  onClick?: any;
  className?: string;
}

const Icon = ({ icon, onClick, className }: IconProps) => {
  if (!icon) return null;

  return (
    <FontAwesomeIcon icon={icon} onClick={onClick} className={className} />
  );
};
export default Icon;
