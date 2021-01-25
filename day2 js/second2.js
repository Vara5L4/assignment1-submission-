var library= [ 
    {author:'\'Bill Gates\'', 
    title:'The Road Ahead', 
    readingstatus: true
    }, 
    { author:'\'Steve Jobs\'', 
    title:'Walter Isaacson', 
    readingstatus: true
    }, 
    { author:'Suzanne Collins', 
    title:'\'Mockingjay: the final book of the Hunger Games\'', 
    readingstatus: false
   }
];
for(var i=0;i<library.length;i++)
{ if(library[i].readingstatus===true)
  { 
   console.log("already read ",library[i].author," by ",library[i].title);
  }
  else 
  { 
      console.log("you still need to read ",library[i].title," by ",library[i].author);
  }
}