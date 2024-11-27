// src/icons.js

// Dynamically import all SVGs from the icons folder
const icons = import.meta.glob('./assets/icons/*.svg', { eager: true });

const svgIcons = Object.keys(icons).reduce((acc, path) => {
  const key = path.replace('./assets/icons/', '');
  acc[key] = icons[path].default;
  return acc;
}, {});

export default svgIcons;
