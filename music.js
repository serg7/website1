(async () => {
   
     let genres = await getGenres();
     let container = document.getElementById('container');

     genres.data.forEach((element, key) => {
        let caption = renderCaption(element);
        let image = renderImg(element);
        let figure = renderFigure(image, caption);

        container.appendChild(figure);
     });

    
   

     


})();