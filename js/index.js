const users = [
  {
    name: "Rahim Uddin",
    email: "rahim@gmail.com",
    phone: "01711111111",
    address: {
      street: "Dhanmondi 10",
      city: "Dhaka",
      state: "Dhaka",
      zip: "1200",
      country: "Bangladesh"
    }
  },
  {
    name: "Karim Hasan",
    email: "karim@gmail.com",
    phone: "01822222222",
    address: {
      street: "Agrabad",
      city: "Chittagong",
      state: "Chittagong",
      zip: "4000",
      country: "Bangladesh"
    }
  },
  {
    name: "Sadia Islam",
    email: "sadia@gmail.com",
    phone: "01933333333",
    address: {
      street: "Zindabazar",
      city: "Sylhet",
      state: "Sylhet",
      zip: "3100",
      country: "Bangladesh"
    }
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    phone: "01644444444",
    address: {
      street: "Shaheb Bazar",
      city: "Rajshahi",
      state: "Rajshahi",
      zip: "6000",
      country: "Bangladesh"
    }
  },
  {
    name: "Tanvir Ahmed",
    email: "tanvir@gmail.com",
    phone: "01555555555",
    address: {
      street: "Sonadanga",
      city: "Khulna",
      state: "Khulna",
      zip: "9000",
      country: "Bangladesh"
    }
  },
  {
    name: "Mim Akter",
    email: "mim@gmail.com",
    phone: "01466666666",
    address: {
      street: "Nathullabad",
      city: "Barisal",
      state: "Barisal",
      zip: "8200",
      country: "Bangladesh"
    }
  },
  {
    name: "Arif Hossain",
    email: "arif@gmail.com",
    phone: "01377777777",
    address: {
      street: "Jahaj Company Mor",
      city: "Rangpur",
      state: "Rangpur",
      zip: "5400",
      country: "Bangladesh"
    }
  },
  {
    name: "Jannat Sultana",
    email: "jannat@gmail.com",
    phone: "01288888888",
    address: {
      street: "Ganginar Par",
      city: "Mymensingh",
      state: "Mymensingh",
      zip: "2200",
      country: "Bangladesh"
    }
  }
];


// for (let i = 0; i < users.length; i++) {
//     console.log(`Name: ${users[i].name} zip: ${users[i].address.city}`)
    
// }

// for (;cars[i];) {
//   text += cars[i] + "<br>";
//   i++;


// let i = 0;
// let text = "" ;

// do{
//   console.log(`Email:  ${(users[i].email)} phone: ${users[i].phone }`);
//   i++
//   // text += cars[i] + "<br>";
// //   i++;
// }
//  while (i < users.length) 


  // for (let i = 0; i < users.length; i++) {
  //   console.log(`Name: ${users[i].name}  Zip: ${users[i].address.zip} `)
  // }

  let i = 0 ;

  while (i <2 && i <users.length) {
    console.log(`Name: ${users[i].email}  Zip: ${users[i].address.state} `);
    i++ ;
  }