
    const querys = document.querySelectorAll('.high');    

  



    const HandleClick = (e) => {
        const arrayLi = Array.from(querys);
        const active = arrayLi.find((cv) => cv.classList.contains('active'));
        arrayLi.forEach((li => {
          li.addEventListener("click", () =>{
            li.classList.toggle("active");
          })
      })
      )
    }
        
      


      querys.forEach((query)=> {
          query.addEventListener('click', HandleClick)
      });