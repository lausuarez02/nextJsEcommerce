import React from 'react';

const Pagination = ({ paginate,postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
      };
    
      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };

      let lastPage = totalPosts[totalPosts.length - 1];
    return (
        <nav aria-label="Page navigation example">
        <ul class="pagination">
        {pageNumbers.map(number => (
               <li key={number} className="page-item">
               <a onClick={() => paginate(number)}  className="page-link">
                   {number}
               </a>
        
           </li>
        ))}
        {/*
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
        </li>*/}
        </ul>
      </nav>
    );
};

export default Pagination;