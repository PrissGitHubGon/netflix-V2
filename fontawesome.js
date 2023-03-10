const icons = require("@fortawesome/free-solid-svg-icons");
const iconsRegular = require("@fortawesome/free-regular-svg-icons");

/**
 * Add all icons used in project.
 */
const IconsList = [iconsRegular.faTrashCan, icons.faGlobe];

require("@fortawesome/fontawesome-svg-core").library.add(IconsList);

export default IconsList;
