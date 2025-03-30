import { useState, useEffect } from 'react';

const usePaginationFlip = (defaultItemsPerPage, mobileItemsPerPage) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setItemsPerPage(isMobile ? mobileItemsPerPage : defaultItemsPerPage);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultItemsPerPage, mobileItemsPerPage]);

  const handlePageChangeWithAnimation = (direction, currentPage, totalPages, setCurrentPage) => {
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === "next" && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else if (direction === "prev" && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      setIsFlipping(false);
    }, 300);
  };

  return { itemsPerPage, isFlipping, handlePageChangeWithAnimation };
};

export default usePaginationFlip;