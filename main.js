
    const querys = document.querySelectorAll('.high');      

    querys.forEach(query =>{
      query.addEventListener("click",_ =>{
        querys.forEach(query =>{
          query.classList.remove("active");
        })
        query.classList.toggle("active");
      })
    })


