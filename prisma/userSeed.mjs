import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = 

[
  {
    "userType": "dogSitter",
    "firstName": "Emily",
    "lastName": "Johnson",
    "streetAddress": "789 Maple Street",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V6B 2X3",
    "email": "emily.johnson@gmail.com",
    "rate": 30,
    "rating": 4,
    "description": "Emily became a dog sitter because she has always had a passion for animals and enjoys providing them with love and care while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Michael",
    "lastName": "Brown",
    "streetAddress": "321 Oak Avenue",
    "city": "Burnaby",
    "province": "BC",
    "postalCode": "V5H 1Z5",
    "email": "michael.brown@gmail.com",
    "rate": 22,
    "rating": 3,
    "description": "Michael decided to become a dog sitter because he loves spending time outdoors and believes that dogs bring joy and happiness to people's lives."
  },
  {
    "userType": "dogSitter",
    "firstName": "Sophia",
    "lastName": "Li",
    "streetAddress": "456 Elm Street",
    "city": "Richmond",
    "province": "BC",
    "postalCode": "V7C 2T9",
    "email": "sophia.li@gmail.com",
    "rate": 18,
    "rating": 5,
    "description": "Sophia became a dog sitter to help dog owners feel at ease knowing their pets are in safe hands, and she enjoys forming meaningful connections with furry companions."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ethan",
    "lastName": "Garcia",
    "streetAddress": "987 Birch Road",
    "city": "Surrey",
    "province": "BC",
    "postalCode": "V3S 2L3",
    "email": "ethan.garcia@gmail.com",
    "rate": 40,
    "rating": 2,
    "description": "Ethan became a dog sitter as a way to support his studies and earn some extra income, while also enjoying the company of different dog breeds."
  },
  {
    "userType": "dogSitter",
    "firstName": "Olivia",
    "lastName": "Smith",
    "streetAddress": "567 Willow Avenue",
    "city": "Coquitlam",
    "province": "BC",
    "postalCode": "V3B 4J1",
    "email": "olivia.smith@gmail.com",
    "rate": 55,
    "rating": 1,
    "description": "Olivia decided to become a dog sitter because she believes that every dog deserves love and care, and she enjoys being able to provide that when their owners are away."
  },

  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Wilson",
    "streetAddress": "789 Cedar Lane",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V6B 3Y8",
    "email": "liam.wilson@gmail.com",
    "rate": 20,
    "rating": 4,
    "description": "Liam became a dog sitter because he has always had a special connection with dogs and enjoys providing them with care and attention while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Isabella",
    "lastName": "Martinez",
    "streetAddress": "321 Pine Street",
    "city": "Burnaby",
    "province": "BC",
    "postalCode": "V5H 2S7",
    "email": "isabella.martinez@gmail.com",
    "rate": 29,
    "rating": 5,
    "description": "Isabella decided to become a dog sitter because she believes in the healing power of animals and wants to create a safe and nurturing environment for dogs in their owners' absence."
  },
  {
    "userType": "dogSitter",
    "firstName": "Noah",
    "lastName": "Taylor",
    "streetAddress": "456 Spruce Avenue",
    "city": "Richmond",
    "province": "BC",
    "postalCode": "V7C 3T2",
    "email": "noah.taylor@gmail.com",
    "rate": 45,
    "rating": 3,
    "description": "Noah became a dog sitter to combine his love for animals with his passion for adventure, providing dogs with fun and stimulating experiences while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Mia",
    "lastName": "Anderson",
    "streetAddress": "987 Oak Street",
    "city": "Surrey",
    "province": "BC",
    "postalCode": "V3S 3L9",
    "email": "mia.anderson@gmail.com",
    "rate": 50,
    "rating": 2,
    "description": "Mia decided to become a dog sitter to help create a positive impact on dogs' lives, offering them love, care, and attention as if they were her own."
  },
  {
    "userType": "dogSitter",
    "firstName": "Aiden",
    "lastName": "Gonzalez",
    "streetAddress": "567 Elm Avenue",
    "city": "Coquitlam",
    "province": "BC",
    "postalCode": "V3B 4J7",
    "email": "aiden.gonzalez@gmail.com",
    "rate": 27,
    "rating": 1,
    "description": "Aiden became a dog sitter because he understands the importance of companionship and wants to provide dogs with a nurturing environment and lots of playtime."
  },
  {
    "userType": "dogSitter",
    "firstName": "Emma",
    "lastName": "Robinson",
    "streetAddress": "123 Oak Street",
    "city": "Burnaby",
    "province": "BC",
    "postalCode": "V5G 2B3",
    "email": "emma.robinson@gmail.com",
    "rate": 25,
    "rating": 4,
    "description": "Emma decided to become a dog sitter because she believes that every dog deserves love, care, and attention, and she enjoys building strong bonds with her furry clients."
  },
        
  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Nguyen",
    "streetAddress": "789 Maple Avenue",
    "city": "Richmond",
    "province": "BC",
    "postalCode": "V6Y 1R2",
    "email": "liam.nguyen@gmail.com",
    "rate": 18,
    "rating": 3,
    "description": "Liam became a dog sitter because he enjoys the company of dogs and wants to make a positive impact on their lives by providing them with care and attention in their owners' absence."
  },
  {
    "userType": "dogSitter",
    "firstName": "Olivia",
    "lastName": "Liu",
    "streetAddress": "456 Elm Street",
    "city": "Surrey",
    "province": "BC",
    "postalCode": "V3S 6A7",
    "email": "olivia.liu@gmail.com",
    "rate": 22,
    "rating": 4,
    "description": "Olivia decided to become a dog sitter because she believes that dogs are incredible companions and wants to ensure they receive the love and care they deserve while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Noah",
    "lastName": "Chen",
    "streetAddress": "321 Cedar Road",
    "city": "North Vancouver",
    "province": "BC",
    "postalCode": "V7P 1T6",
    "email": "noah.chen@gmail.com",
    "rate": 34,
    "rating": 5,
    "description": "Noah became a dog sitter because he has a deep appreciation for dogs' unique personalities and enjoys providing them with a safe and comfortable environment while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ava",
    "lastName": "Singh",
    "streetAddress": "890 Birch Lane",
    "city": "Coquitlam",
    "province": "BC",
    "postalCode": "V3B 5K9",
    "email": "ava.singh@gmail.com",
    "rate": 47,
    "rating": 2,
    "description": "Ava decided to become a dog sitter because she has a genuine love for dogs and wants to provide them with a nurturing and playful environment while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Isabella",
    "lastName": "Wong",
    "streetAddress": "567 Oak Avenue",
    "city": "Burnaby",
    "province": "BC",
    "postalCode": "V5G 3N8",
    "email": "isabella.wong@gmail.com",
    "rate": 26,
    "rating": 1,
    "description": "Isabella became a dog sitter because she believes that dogs bring immense joy to people's lives and wants to ensure they receive the utmost care and love while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Sophia",
    "lastName": "Patel",
    "streetAddress": "234 Cedar Street",
    "city": "Richmond",
    "province": "BC",
    "postalCode": "V6Y 2M4",
    "email": "sophia.patel@gmail.com",
    "rate": 21,
    "rating": 4,
    "description": "Sophia decided to become a dog sitter because she finds immense joy and fulfillment in taking care of dogs and wants to provide them with a safe and loving environment while their owners are away."
  },
        
  {
    "userType": "dogSitter",
    "firstName": "Charlotte",
    "lastName": "Kim",
    "streetAddress": "901 Maple Road",
    "city": "Surrey",
    "province": "BC",
    "postalCode": "V3S 9L1",
    "email": "charlotte.kim@gmail.com",
    "rate": 24,
    "rating": 4,
    "description": "Charlotte became a dog sitter because she has always had a deep connection with dogs and enjoys providing them with love, care, and companionship while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Mia",
    "lastName": "Gupta",
    "streetAddress": "678 Birch Lane",
    "city": "North Vancouver",
    "province": "BC",
    "postalCode": "V7P 2K5",
    "email": "mia.gupta@gmail.com",
    "rate": 18,
    "rating": 3,
    "description": "Mia decided to become a dog sitter because she believes that dogs bring happiness and unconditional love into people's lives, and she wants to ensure they receive the best care and attention while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Johnson",
    "streetAddress": "123 Oak Street",
    "city": "Coquitlam",
    "province": "BC",
    "postalCode": "V3B 4J7",
    "email": "liam.johnson@gmail.com",
    "rate": 20,
    "rating": 5,
    "description": "Liam decided to become a dog sitter because he has a natural affinity for dogs and enjoys spending time with them, providing them with care and attention in a loving environment."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ethan",
    "lastName": "Wilson",
    "streetAddress": "456 Elm Avenue",
    "city": "Toronto",
    "province": "ON",
    "postalCode": "M4B 1V2",
    "email": "ethan.wilson@gmail.com",
    "rate": 50,
    "rating": 2,
    "description": "Ethan decided to become a dog sitter because he believes that dogs are incredible companions and wants to provide them with exceptional care and love while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Sophia",
    "lastName": "Lee",
    "streetAddress": "789 Maple Street",
    "city": "Mississauga",
    "province": "ON",
    "postalCode": "L5B 2C9",
    "email": "sophia.lee@gmail.com",
    "rate": 23,
    "rating": 4,
    "description": "Sophia became a dog sitter because she has a deep passion for animals, especially dogs, and wants to provide them with a nurturing and safe environment while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Jackson",
    "streetAddress": "234 Oak Road",
    "city": "Brampton",
    "province": "ON",
    "postalCode": "L6T 1R7",
    "email": "liam.jackson@gmail.com",
    "rate": 29,
    "rating": 3,
    "description": "Liam decided to become a dog sitter because he believes that dogs are incredible beings that deserve love and care, and he enjoys creating a positive and joyful environment for them while their owners are away."
  },
        
  {
    "userType": "dogSitter",
    "firstName": "Emma",
    "lastName": "Taylor",
    "streetAddress": "567 Cedar Lane",
    "city": "Markham",
    "province": "ON",
    "postalCode": "L3R 3P9",
    "email": "emma.taylor@gmail.com",
    "rate": 30,
    "rating": 4,
    "description": "Emma has always had a passion for dogs and decided to become a dog sitter to provide them with love, care, and attention. She strives to create a nurturing environment where dogs can feel safe and happy while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Noah",
    "lastName": "Martinez",
    "streetAddress": "890 Birch Avenue",
    "city": "Vaughan",
    "province": "ON",
    "postalCode": "L4K 5R6",
    "email": "noah.martinez@gmail.com",
    "rate": 19,
    "rating": 3,
    "description": "Noah became a dog sitter because he believes that dogs deserve the best care and attention. He enjoys spending time with them, taking them for walks, and ensuring they are comfortable and happy while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Olivia",
    "lastName": "Gonzalez",
    "streetAddress": "321 Maple Street",
    "city": "Richmond Hill",
    "province": "ON",
    "postalCode": "L4B 3P7",
    "email": "olivia.gonzalez@gmail.com",
    "rate": 21,
    "rating": 5,
    "description": "Olivia has a genuine love for dogs and enjoys providing them with the care they need. She believes in creating a warm and welcoming environment for dogs while their owners are away, ensuring they receive the attention and affection they deserve."
  },
  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Smith",
    "streetAddress": "901 Elm Road",
    "city": "Oakville",
    "province": "ON",
    "postalCode": "L6H 6P1",
    "email": "liam.smith@gmail.com",
    "rate": 32,
    "rating": 4,
    "description": "Liam has a natural connection with dogs and enjoys being around them. He decided to become a dog sitter to provide them with a safe and comfortable environment while their owners are away, ensuring they receive the care and attention they need."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ava",
    "lastName": "Anderson",
    "streetAddress": "678 Cedar Lane",
    "city": "Whitby",
    "province": "ON",
    "postalCode": "L1N 5W8",
    "email": "ava.anderson@gmail.com",
    "rate": 20,
    "rating": 5,
    "description": "Ava has always had a special bond with dogs and decided to become a dog sitter to provide them with a loving and caring environment. She believes in treating each dog as a unique individual and ensuring their happiness and well-being."
  },
  {
    "userType": "dogSitter",
    "firstName": "Oliver",
    "lastName": "Clark",
    "streetAddress": "123 Oak Avenue",
    "city": "Ajax",
    "province": "ON",
    "postalCode": "L1S 6L9",
    "email": "oliver.clark@gmail.com",
    "rate": 31,
    "rating": 4,
    "description": "Oliver is passionate about dogs and enjoys being their companion. He provides a safe and engaging environment for dogs, making sure they have plenty of exercise, love, and attention while their owners are away."
  },
  {
    "userType": "dogSitter",
    "firstName": "Charlotte",
    "lastName": "Robinson",
    "streetAddress": "456 Elm Street",
    "city": "Pickering",
    "province": "ON",
    "postalCode": "L1V 1X6",
    "email": "charlotte.robinson@gmail.com",
    "rate": 34,
    "rating": 5,
    "description": "Charlotte has a deep understanding and love for dogs. She provides a nurturing and comfortable environment for them, ensuring they feel at home while their owners are away. Her goal is to make every dog's stay enjoyable and stress-free."
  },


  {
    "userType": "dogSitter",
    "firstName": "Emily",
    "lastName": "Smith",
    "streetAddress": "789 Oak Street",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V6B 2X3",
    "email": "emily.smith@gmail.com",
    "rate": 28,
    "rating": 4,
    "description": "Emily is a dedicated dog lover who enjoys providing top-notch care for dogs. She ensures they receive plenty of attention, exercise, and love while their owners are away. Emily creates a comfortable and safe environment where dogs can thrive."
  },
  {
    "userType": "dogSitter",
    "firstName": "Jackson",
    "lastName": "Wilson",
    "streetAddress": "321 Cedar Lane",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V5H 1Z5",
    "email": "jackson.wilson@gmail.com",
    "rate": 30,
    "rating": 5,
    "description": "Jackson has a natural connection with dogs and enjoys spending time with them. He ensures each dog's needs are met, providing them with a safe and fun environment while their owners are away. Jackson's goal is to make every dog's stay enjoyable and memorable."
  },
  {
    "userType": "dogSitter",
    "firstName": "Sophie",
    "lastName": "Johnson",
    "streetAddress": "456 Elm Avenue",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V7C 2T9",
    "email": "sophie.johnson@gmail.com",
    "rate": 26,
    "rating": 4,
    "description": "Sophie has a genuine love for dogs and enjoys providing them with a caring and nurturing environment. She ensures they receive proper care, exercise, and affection while their owners are away. Sophie's goal is to make every dog feel at home."
  },
  {
    "userType": "dogSitter",
    "firstName": "Oliver",
    "lastName": "Brown",
    "streetAddress": "987 Maple Street",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V3S 2L3",
    "email": "oliver.brown@gmail.com",
    "rate": 32,
    "rating": 3,
    "description": "Oliver is passionate about dogs and ensures they receive the care and attention they deserve. He creates a welcoming and comfortable environment where dogs can feel at ease while their owners are away. Oliver's priority is to make sure every dog is happy and well taken care of."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ella",
    "lastName": "Garcia",
    "streetAddress": "567 Pine Avenue",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V3B 4J1",
    "email": "ella.garcia@gmail.com",
    "rate": 29,
    "rating": 5,
    "description": "Ella understands the needs of dogs and provides a safe and nurturing environment for them. She ensures they receive ample exercise, love, and attention while their owners are away. Ella's goal is to create a positive and enjoyable experience for every dog."
  },
  {
    "userType": "dogSitter",
    "firstName": "Liam",
    "lastName": "Anderson",
    "streetAddress": "123 Elm Street",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V6K 2A2",
    "email": "liam.anderson@gmail.com",
    "rate": 31,
    "rating": 4,
    "description": "Liam is a responsible and compassionate dog sitter who ensures the well-being of every dog in his care. He provides a stimulating and comfortable environment, giving dogs the attention and care they need. Liam's priority is to make sure every dog feels safe and loved."
  },
  {
    "userType": "dogSitter",
    "firstName": "Ava",
    "lastName": "Wilson",
    "streetAddress": "456 Oak Avenue",
    "city": "Vancouver",
    "province": "BC",
    "postalCode": "V6J 1G8",
    "email": "ava.wilson@gmail.com",
    "rate": 27,
    "rating": 4,
    "description": "Ava has a passion for dogs and enjoys providing them with a nurturing and comfortable environment. She ensures they receive plenty of love, care, and playtime while their owners are away. Ava's goal is to create a positive and enriching experience for every dog."
  },

  ];

  async function seedUsers() {
    for (let user of users) {
      await prisma.user.create({ data: user });
    }
  }

  seedUsers()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  
  