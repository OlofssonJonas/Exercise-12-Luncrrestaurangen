console.log("Hello World!");

const date = new Date();
const today = date.getDay()
const body = document.querySelector("body");
const p = document.createElement("p")


const food = ["stängt","stek", "fläsk m. löksås", "köttbullar", "ärtsoppa m. pannkakor", "tacos", "stängt"];



switch(today) {
    case 1:
        console.log(food[1])
        break;
    case 2:
        console.log(food[2])
        break;
    case 3:
        console.log(food[3])
        break;
    case 4:
        console.log(food[4])
        break;
    case 5:
        console.log(food[5])
        break;
        default:
            console.log("stängt")
            console.log(food[2])
        }
        body.appendChild(p)
        p.innerText = food[today]

        
        


/*SPLICE AND SLICE TAR BORT OBJEKT FRÅN EN ARRAY
Q&A 7/10*/

//WINDOW.LOCATION*/