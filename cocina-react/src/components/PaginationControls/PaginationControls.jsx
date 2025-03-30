import styles from './PaginationControls.module.css';

const PaginationControls = ({ currentPage, totalPages, onNext, onPrev}) => {
  return (
    <div className={styles.pagination_controls}>
      <button onClick={onPrev} disabled={currentPage === 1} className={styles.pagination_button}>
        Anterior
      </button>
      
      <span className={styles.pagination_progress}>
        {currentPage}/{totalPages}
      </span>
      
      <button  onClick={onNext} disabled={currentPage === totalPages} className={styles.pagination_button}>
        Siguiente
      </button>
    </div>
  );
};

export default PaginationControls;