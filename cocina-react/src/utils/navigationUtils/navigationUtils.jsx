export const isActiveLink = (defaultClass, activeClass) => ({ isActive }) => {
    return isActive ? `${defaultClass} ${activeClass}` : defaultClass;
  };
