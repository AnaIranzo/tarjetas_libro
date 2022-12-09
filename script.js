/*Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. También hay que darle algo de estilos con clases CSS correspondientes (es un buen ejercicio propenso a flexbox):*/ 

const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]
    
    let newMain = document.createElement('main')
    let newSection = document.createElement('section')

    document.body.appendChild(newMain)
    newMain.appendChild(newSection)

    function tarjetas(book, i) {

      let newArticle = document.createElement('article')
      newArticle.setAttribute('class','art')

      newSection.appendChild(newArticle)

      let newDiv = document.createElement('div')
      newDiv.setAttribute('class','container')

      let newH3 = document.createElement('h3')
      newH3.setAttribute('class', 'title')
     
      let newP = document.createElement('p')
      newP.setAttribute('class','author')
      
      let newCoun = document.createElement('p')
      newCoun.setAttribute('class','country')
      
      let newImg = document.createElement('img')
      newImg.setAttribute('class','cover')
      
      let newPLan = document.createElement('p')
      newPLan.setAttribute('class','lan')
      
      let newPYear = document.createElement('p')
      newPYear.setAttribute('class','year')
      
      newArticle.appendChild(newDiv)
      newDiv.appendChild(newH3)
      newDiv.appendChild(newP)
      newDiv.appendChild(newCoun)
      newDiv.appendChild(newImg)
      newDiv.appendChild(newPLan)
      newDiv.appendChild(newPYear)
    
      document.getElementsByClassName('title')[i].innerHTML = book.title
      document.getElementsByClassName('author')[i].innerHTML = book.author
      document.getElementsByClassName('country')[i].innerHTML = book.country
      document.getElementsByClassName('cover')[i].src = book.imageLink
      document.getElementsByClassName('lan')[i].innerHTML = book.language
      document.getElementsByClassName('year')[i].innerHTML = book.year

    }

    let tarjeta
    for (let i = 0; i < books.length; i++) {
      tarjeta += tarjetas(books[i],i)
    }

  /*-------------------------
    Ejemplo estructura HTML de salida, generado todo desde Javascript:
    
    <section>
      <article>
          <h3>Title:Things Fall Apart</h3>
          <p>Author: Chinua Achebe</p>
          <p>Country: Nigeria</p>
          <img src="imagen" alt="">
          <p>Language: English</p>
          <p>Año: 1958</p>
      </article>
      <article>
          <h3>Title:Fairy tales</h3>
          <p>Author: Hans Christian Andersen</p>
          <p>Country: Denmark</p>
          <img src="imagen" alt="">
          <p>Language: English</p>
          <p>Año: 1958</p>
          <p>Pages: 784</p>
      </article>
      ...
      <article>
          ...
      </article>
  </section>*/