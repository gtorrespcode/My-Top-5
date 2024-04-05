// Categories Img
import gameImg from "/gamesImg.png"
import movieImg from "/moviesImg.png"
import techImg from "/techImg.png"
// Tech Img
import reactImg from "/reactImg.png"
import tailwindImg from "/tailwindImg.png"
import nodeImg from "/nodeImg.png"
import mongoImg from "/mongoImg.png"
import pythonImg from "/pythonImg.png"
// Movies Img
import forrestImg from "/forrestImg.png"
import americanImg from "/americanImg.jpg"
import mdriveImg from "/mdriveImg.jpg"
import departedImg from "/departedImg.jpg"
import nestImg from "/nestImg.jpg"
// Games Img
import sotcImg from "/sotcImg.jpg"
import rdrImg from "/rdrImg.png"
import tlouImg from "/tlouImg.jpg"
import tlouTwoImg from '/tlouTwoImg.jpg'
import slyImg from "/slyImg.jpg"



export const CategoryData = [ 
  {
    id: 1,
    title: "Technologies",
    info: "The technologies that have influenced me the most in my adult life. I never imagined myself programming, but when I studied these technologies I discovered a world of creativity.",
    image: techImg,
    imageInfo: "Tech Image"

  },

  {
    id: 2,
    title: "Movies",
    info: "The films that made me appreciate art more and more. These were very important in changing my perspective of how to see things and understanding how art can influence people to create good things.",
    image: movieImg,
    imageInfo: "Movie Image"
 },

  {
    id: 3,
    title: "Games",
    info: "Games that were part of my childhood and still provide me with amazing experiences today. Through games I have improved many aspects and skills that I use on a daily basis.",
    image: gameImg,
    imageInfo: "Game Image"
}
];

export const ContentData = {
  technologies : [
    {
      id: 4,
      image: reactImg,
      title: "React"
    },
  
    {
      id: 5,
      image : tailwindImg,
      title: "Tailwind"
    }, 
    {
      id: 6,
      image : nodeImg,
      title: "NodeJS"
    },
    {
      id: 7,
      image : mongoImg,
      title: "Mongodb"
    },
    {
      id: 8,
      image : pythonImg,
      title: "Python"
    }
  ] ,

  movies : [
    {
      id: 9,
      image: forrestImg,
      title: "Forrest Gump"
    },
    {
      id: 10,
      image: americanImg,
      title: "American Beauty"
    },
    {
      id: 11,
      image: mdriveImg,
      title: "Mulholand Drive"
    },
    {
      id: 12,
      image: departedImg,
      title: "The Departed"
    },
    {
      id: 13,
      image: nestImg,
      title: "One Flew Over the Cuckoo's Nest"
    }
  ] ,
  games: [
    {
      id: 14,
      image: sotcImg,
      title: "Shadow of the Colossus"
    }, 
    {
      id: 15,
      image: rdrImg,
      title: "Read Dead Redemption 2"
    }, 
    {
      id: 16,
      image: tlouImg,
      title: "The Last of Us"
    }, 
    {
      id: 17,
      image: tlouTwoImg,
      title: "The Last of Us Part II"
    }, 
    {
      id: 18,
      image: slyImg,
      title: "Sly Cooper 2"
    }
  ]
}
 
