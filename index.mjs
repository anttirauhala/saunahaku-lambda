export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: JSON.stringify(sortSaunasByToday(sortSaunasByName(result))),
  };
  return response;
};

const getCurrentWeekday = () => {
  const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const today = new Date();
  return days[today.getDay()];
};

const sortSaunasByName = (saunas) => {
  return saunas.sort((a, b) => a.name.localeCompare(b.name));
};

const sortSaunasByToday = (saunas) => {
  const today = getCurrentWeekday();

  return saunas.sort((a, b) => {
    const aOpenToday = a.openingHours.some(oh => oh.weekday === today);
    const bOpenToday = b.openingHours.some(oh => oh.weekday === today);

    if (aOpenToday && !bOpenToday) {
      return -1;
    } else if (!aOpenToday && bOpenToday) {
      return 1;
    } else {
      return 0;
    }
  });
};

const result = [
  {
    "id": "66e5f3c7-b4ac-4bc6-8e2b-19395b73ec3d",
    "name": "Alisniemen sauna",
    "streetAddress": "Porintie 584",
    "postalCode": "37130",
    "city": "Nokia",
    "openingHours": [
      {
        "id": "3ccfc019-85d5-490d-8016-a8183ff5ae88",
        "weekday": "MONDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "e553d43c-4998-43dd-ac56-2c4136be1a17",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "55fc8ad8-0a0f-4ba0-867a-59675385bc4d",
            "priceType": "CHILD",
            "price": 3
          }
        ]
      },
      {
        "id": "b088f5a4-d26a-4803-bd83-cbb435f19b46",
        "weekday": "WEDNESDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "8993d75b-2a83-4818-97fd-0324b1dcb5f9",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "3f598907-7c64-4731-94c7-f7be099e65b7",
            "priceType": "CHILD",
            "price": 3
          }
        ]
      },
      {
        "id": "496f9b79-0cc4-48d0-96b6-0c1149533e14",
        "weekday": "FRIDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "8ae5c1f4-1f3e-4c6a-8f71-87b425e04881",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "d6f4b556-8277-416f-a2e8-682621ecd287",
            "priceType": "CHILD",
            "price": 3
          }
        ]
      },
      {
        "id": "ec666f39-3f15-41ea-ab1f-9766fe21b7ae",
        "weekday": "SUNDAY",
        "openingTime": "13:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "ec1bdbe9-e2b6-4096-8d26-7c33622445bd",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "7533ef71-c44c-44f1-9e79-61c1c57aa386",
            "priceType": "CHILD",
            "price": 3
          }
        ]
      }
    ],
    "phone": "+358 50 919 7050",
    "webPage": "https://www.alisniemi.com/",
    "info": "Kassa sulkeutuu klo 21.00, jolloin päättyy myös sisäänpääsy. Sauna ja pesuhuoneet suljetaan klo 21.30 (perjantaisin klo 22.00). Käteismaksut ovat päättyneet: otamme vastaan vain kortti- ja lähimaksuja. Vierailijat 9 €, jäsenet 7 €, lapset (alle 15 v.) 3 €.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "8d2b44bd-d2e6-4145-9c2f-a454d73201be",
    "name": "FLOU Sauna",
    "streetAddress": "Ratinan rantatie 6",
    "postalCode": "33100",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "3ab81eb0-a7cf-4acf-a2d6-9978845f7ed8",
        "weekday": "TUESDAY",
        "openingTime": "08:00:00",
        "closingTime": "12:00:00",
        "prices": [
          {
            "id": "9991917b-29ee-4665-88fd-454c7606bc18",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "fbdb2464-1e52-4dee-b8ab-b23c66b3cb96",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "7b320a5d-8f35-474c-9cba-13eda542d735",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "d4d5b591-857a-4f89-8c58-d289427a2eb2",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "8d9e0f1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b",
        "weekday": "TUESDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "c3199e37-85c8-4ee3-9b0f-f9b5ceb6f0d0",
        "weekday": "WEDNESDAY",
        "openingTime": "08:00:00",
        "closingTime": "12:00:00",
        "prices": [
          {
            "id": "e3828852-f6d8-457f-a4d0-f8f9d9038582",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "37648c4d-5883-49b6-b70f-d5d22cbde3cb",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "29ac40a1-769e-44d4-9dde-61fb991c8622",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "258fe6f2-8e9f-4fe5-bde4-ba94cb926d2f",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "42c745b5-f98b-4f86-a259-012a4cde0b80",
        "weekday": "WEDNESDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "da7b7899-fb66-4d02-82d3-13cc73861da1",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "af1b8068-1fc8-4a9a-b3f3-8a0534c57f93",
        "weekday": "THURSDAY",
        "openingTime": "08:00:00",
        "closingTime": "12:00:00",
        "prices": [
          {
            "id": "07704794-aee2-4cc8-8f02-e15921e9285b",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "df363d3a-ab52-46bf-838a-872a8beb706b",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "6baa75e6-5a63-42fd-bd75-64d7a8bfefd6",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "ced7887a-9595-42f6-8438-1d4675cf310f",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "a28c7d9e-0f0f-467d-8823-f29d29ca7e2b",
        "weekday": "THURSDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "4540098d-5e05-4959-8843-5e1eb1450ff3",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "823519f4-b567-4423-b14c-d1bb7c92155a",
        "weekday": "FRIDAY",
        "openingTime": "08:00:00",
        "closingTime": "12:00:00",
        "prices": [
          {
            "id": "e30259e8-8944-4a78-9e1d-ae7cd161f3b0",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "26e8b0a6-9db2-48a8-9ee3-4cb625f576a8",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "1f8b643d-3970-4a60-8ca1-7157cb59937f",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "056a5ba0-a502-4873-8933-34835e54afec",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "786abe3c-708b-4a4b-826b-692a880a1391",
        "weekday": "FRIDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "6764f911-9d3f-4291-b9ac-eb54cf9f5844",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "12613bc0-3be1-4975-8631-f553f545c01f",
        "weekday": "SATURDAY",
        "openingTime": "08:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "10eee2f8-b113-407f-b33a-b877e6aa38ee",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      },
      {
        "id": "428f3549-74da-4f1a-a5e4-2b1cca39d4da",
        "weekday": "SUNDAY",
        "openingTime": "08:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "4581568b-8fec-4bdb-a363-9aa64ba5c104",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
            "priceType": "STUDENT",
            "price": 13
          },
          {
            "id": "0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e",
            "priceType": "PENSIONER",
            "price": 13
          },
          {
            "id": "1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
            "priceType": "CONSRIPT",
            "price": 13
          }
        ]
      }
    ],
    "phone": "+358 44 249 3834",
    "webPage": "https://www.flousauna.fi/",
    "info": "Yleinen sauna palvelee aina, kun saunoilla ei ole yksityistilaisuutta – tarkistathan poikkeusaukioloajat verkkosivuilta. Talvikausi 4.9.2026 alkaen Pyynikillä (Jalkasaarentie 7). Saunalippu 15 €, 5 kerran kortti 40 €, kuukausipassi 80 €. Pyyhkeen voi vuokrata 5 €.",
    "kiosk": true,
    "restaurant": true
  },
  {
    "id": "24a7dd00-bcfb-46c9-9e12-32a7a6c87fca",
    "name": "Kaukajärven sauna",
    "streetAddress": "Kangasalantie 80",
    "postalCode": "33730",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "f26237ca-b6e1-4f43-936c-cfe9b0d8ca34",
        "weekday": "MONDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "ea36ecff-8a2b-4b15-871d-509e80f4fc3e",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "e5e5b50d-1183-4738-bd19-ba5ec895572f",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "025cb419-f225-4743-9fb3-5e593cfb7232",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "a98ee685-0002-4edd-b3bb-012039c201ef",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "60f155e2-d0a4-4c41-8b86-1e4907175c80",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "f06dca0a-1e09-47c1-8311-aef5f1e2d925",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "fbdf2943-ce20-4e14-85c1-cc8a9eed222c",
        "weekday": "TUESDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "f249d368-1c52-42a1-a7d3-ba76984fb0e5",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "088302a5-2206-471e-8f92-4cdbeb286876",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "a7249ea3-abac-4bb1-b413-55d39147fa0f",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "fa218c47-3a4c-4cc7-af44-3caa9648c751",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "30ec5e03-a0c9-4876-b1e4-96ab2dbda568",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "406d7af9-ebe3-429c-8861-ab6f1e2eb052",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "18047c83-65f1-4161-b8db-b76b88cd265a",
        "weekday": "WEDNESDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "4a93a2bb-f923-488a-b1fa-fe019241a875",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "391e3c2d-a29e-4cfe-97bd-7a174a3c94a1",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "4d08295f-0a73-4542-9b8c-118d5e17681a",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "ef4cd726-e0f6-4fd5-92b4-f29c9372667e",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "44d688bd-2425-411d-b9cf-2bc4f4a45a50",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "bae17b8e-20b2-4151-90f9-e65931583e9e",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "e034198c-ed01-40aa-81ae-7af440c0c876",
        "weekday": "THURSDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "89a699e6-f4e1-436f-a9a5-5c3bb8eeeee3",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "8d704fcc-d5af-4ba0-b917-31eb570e6622",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "ddec7dc9-5986-4b47-a82b-f54ba87613e5",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "2f7bdef0-9bee-49b4-9fc6-a9c409756a14",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "2a8985d8-357f-49b6-bce3-13dfa43b59b9",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "5e66cf48-2191-4346-bb8c-bd77ab2616d5",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "b112e21b-3391-4f93-aa03-e9a9d371de8d",
        "weekday": "FRIDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "68e60ccd-1a57-4445-903c-01a7fb73a75c",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "783469a3-95b9-4850-8689-c184c3b6ba59",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "595f3876-03ab-4a89-bb03-bca9c2f15f43",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "9dde730a-5aff-4d7b-8d21-cc274b22e848",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "5bd86340-5cb0-4440-a7b6-54ec3f4fdf4a",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "614c291f-0fde-45ae-a497-8957ca46e936",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "6aaed8dc-8d18-450d-9db2-c559e146b698",
        "weekday": "SATURDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "74db766f-21f1-48c8-92f8-5c4d36197dcd",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "6bc6d3ff-e8df-44c7-aa85-eab00951bdcf",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "a96a5816-319e-4a60-8dcf-dfb9e7e1cffe",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "427ff564-28f3-455b-9e2c-b8f48ef68869",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "a7fef312-3b96-4ea5-987f-bb8f9dfda1c3",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "71d9d5bc-8494-41c9-a001-1266175084ad",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      },
      {
        "id": "dfa89100-0a4e-4476-974c-88fea7496417",
        "weekday": "SUNDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:45:00",
        "prices": [
          {
            "id": "0fe9ad51-914e-4e8b-a111-a11d41da546e",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "36a2148f-91cc-4e56-8ec7-461fed8c051d",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "89f53d32-8c44-4116-8a93-83cd59b1488c",
            "priceType": "CONSRIPT",
            "price": 10
          },
          {
            "id": "84cb6552-d742-4628-b3fc-ab9a006fe678",
            "priceType": "PENSIONER",
            "price": 10
          },
          {
            "id": "e8055d0c-7338-452a-a3a8-890d778eb17d",
            "priceType": "STUDENT",
            "price": 10
          },
          {
            "id": "9709026a-ddae-4e50-bfc3-24ed651f8f1b",
            "priceType": "UNEMPLOYED",
            "price": 10
          }
        ]
      }
    ],
    "phone": "+358 40 590 0539",
    "webPage": "https://www.kaukajarvensauna.fi/",
    "info": "Vanha sauna ma-su klo 12.00-21.45 (pukuhuoneista poistuminen klo 22.00). Uusi sauna arkisin klo 16.00-21.30 (perjantaisin jo klo 14.00 alkaen), la & su klo 12.00-21.30. Aamusaunat ovat poistuneet valikoimasta. Hiljaiset tunnit: ma & ke klo 17.00-18.00 (vanhat saunat), la & su klo 16.00-17.00 (uusi sauna). Huomioithan liikennemerkit parkkeeramisesta. Hinnasto: aikuinen 12 €, eläkeläinen, opiskelija, työtön ja varusmies 10 €, lapsi 7-14 v. 6 €, lapsi 1-6 v. 2 €.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "e7017ab9-5c52-4cc8-9be8-bea9c98195ec",
    "name": "Kaupinojan sauna",
    "streetAddress": "Kaupinpuistonkatu 1",
    "postalCode": "33500",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "572dc6e2-df3a-4839-95b6-0b16966ee804",
        "weekday": "MONDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "ab19cdf2-1ac8-4116-829e-a5c436650662",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "bbd7d743-f6bf-45e4-a59e-786f6917ffad",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "e7d235af-8f0c-430d-bcf6-b23449528eec",
        "weekday": "TUESDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "bbb93306-9a1e-4600-b79b-3cb228d73af8",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "5b18a42b-0a85-4f42-aedf-bfc70db8848b",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "8232a6f7-1e9b-4ffe-ba09-9121b216195a",
        "weekday": "WEDNESDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "daa7e9a0-1bec-4f64-b6e6-74d3d6d66413",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "dd1fb254-97d3-4c6d-b3a1-587a1f0b7bdf",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "7ee261a0-4c09-4f3b-a683-f4948f576c0c",
        "weekday": "THURSDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "c9830246-d50b-465e-9ed5-e8bb9285b70a",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "33a2bfc3-51c2-4e81-b27b-1dee3e5ba5e5",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "5274cb70-7933-4989-855e-c4701eb7da2d",
        "weekday": "FRIDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "6d96a53b-8681-4190-b02a-b7dc8108dd36",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "a6a40ba8-d0d5-46aa-9401-b9d0dc0b11ca",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "e5b64feb-fd1b-4399-9d60-d726a4c42254",
        "weekday": "SATURDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "1568419f-3e97-43b4-8e1c-af4509d6f183",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "1abfb305-68da-4bf7-9252-3e4d4bd1f896",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "eafb378b-7722-4541-95d6-4dec7266b65c",
        "weekday": "SUNDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:15:00",
        "prices": [
          {
            "id": "fd9a2524-9c59-4c87-92aa-84ee6c4685a5",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "e600b128-2c6b-446d-800c-5ad48e6293c4",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      }
    ],
    "phone": "+358 50 551 7732",
    "webPage": "https://talviuimarit.fi/",
    "info": "Kertamaksut: aikuiset 13 €, lapset 7-12 v. 5 € sekä Jurttasauna yhteislippu 7 €. Käteinen ei käy. Hiljainen sauna aina aukeamisen yhteydessä klo 12-13 sekä ke & su klo 19-21. Sisäänpääsy päättyy klo 20.30. Joka kuukauden toinen tiistai saunat ovat suljettu huoltopäivän johdosta. Jurttasauna on avoinna ma-pe klo 17-21 ja la-su klo 15-21; Jurttasaunan käynnit maksetaan Kaupinojan kassalle ja asiakkaat käyttävät Kaupinojan pukuhuoneita ja suihkuja. Asiakkaiden pysäköinti tapahtuu ylhäällä olevalla pysäköintialueella.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "a9a1cb1f-a001-4bdd-9afb-1fb90fc839a4",
    "name": "Pereensaaren sauna",
    "streetAddress": "Pereensaarentie 43",
    "postalCode": "33950",
    "city": "Pirkkala",
    "openingHours": [
      {
        "id": "4bd5d8d7-c116-4297-ab13-da03ff6a6ca1",
        "weekday": "MONDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "76337545-0d01-4109-9cb2-4a016d9500d3",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "8906c475-e9f7-4703-8efe-b2aee62316e0",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "32c7de4d-5369-4324-88aa-99c58b50cbe4",
            "priceType": "CONSRIPT",
            "price": 13.5
          },
          {
            "id": "bf2c3d71-2159-4816-98f1-3b0ff2e5b87e",
            "priceType": "PENSIONER",
            "price": 13.5
          },
          {
            "id": "77027c23-c2fd-46a6-94eb-829ce55de8c2",
            "priceType": "STUDENT",
            "price": 13.5
          }
        ]
      },
      {
        "id": "bf75802c-7bf8-4a72-8d02-ce6d0edc3297",
        "weekday": "TUESDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "8a0f39a0-5160-42fd-ab23-88534893efc1",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "628f7b13-d801-4807-b300-a73756b29c0e",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "445c99c5-959d-424f-b390-71f890fd11b4",
            "priceType": "CONSRIPT",
            "price": 13.5
          },
          {
            "id": "bb9cf3eb-ebb6-462e-a270-777eb4718f26",
            "priceType": "PENSIONER",
            "price": 13.5
          },
          {
            "id": "aa6df1cf-e46a-4aa8-81f9-f634fd79ff8d",
            "priceType": "STUDENT",
            "price": 13.5
          }
        ]
      },
      {
        "id": "bbe880bc-7516-443f-94d1-3a077dc71b41",
        "weekday": "WEDNESDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "08480b35-1301-4dc5-9496-99ac151dd596",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "a374a70c-a4bf-4d16-9a77-a655772a25d7",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "3dd591e1-d916-40b1-b708-ae59c9bac8f3",
            "priceType": "CONSRIPT",
            "price": 13.5
          },
          {
            "id": "f37c6d0d-942c-44e1-8e03-02a39fb8d63d",
            "priceType": "PENSIONER",
            "price": 13.5
          },
          {
            "id": "2b7cadc1-a4ca-4d82-b213-7caa5a26d7b7",
            "priceType": "STUDENT",
            "price": 13.5
          }
        ]
      },
      {
        "id": "033924fb-aa4d-47b0-8a8f-e86caf36b48c",
        "weekday": "THURSDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "e1a11792-4d82-487a-96f6-2e8a5253ac19",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "aaec0f6a-63c0-4a70-bce2-782c2e7748b9",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "c832b89f-8738-48e5-afcf-a9854111d3f9",
            "priceType": "CONSRIPT",
            "price": 13.5
          },
          {
            "id": "6d5447ff-bcad-4e6c-ac90-da02e5acf244",
            "priceType": "PENSIONER",
            "price": 13.5
          },
          {
            "id": "65841321-70ad-4203-bf21-50176ae0d152",
            "priceType": "STUDENT",
            "price": 13.5
          }
        ]
      },
      {
        "id": "8a506f81-363e-4648-94e4-d71e3c338172",
        "weekday": "FRIDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "d51e56fd-b314-45d7-90a2-e4f9ba6f3611",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "7fa2c99c-b102-4ad2-a681-80cb73df73b5",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "c1d95e73-82c2-4db7-8840-613eb59d4907",
            "priceType": "CONSRIPT",
            "price": 13.5
          },
          {
            "id": "466f3694-c80c-46de-a41a-da2c6e52147f",
            "priceType": "PENSIONER",
            "price": 13.5
          },
          {
            "id": "ffd0930b-9f98-4a06-9d1f-1ddeee1392a4",
            "priceType": "STUDENT",
            "price": 13.5
          }
        ]
      },
      {
        "id": "caa49258-6e5d-4ff0-bab2-2b4778430019",
        "weekday": "SATURDAY",
        "openingTime": "12:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "4e2ce578-a41a-4178-b864-dc855e1e9b6f",
            "priceType": "ADULT",
            "price": 18
          },
          {
            "id": "7483de97-2383-4759-8333-ac742c675848",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "48e4ecee-111e-4799-a034-a92a83b34555",
            "priceType": "CONSRIPT",
            "price": 16.2
          },
          {
            "id": "74b175b6-0c20-4cc5-938c-ac6d675a1992",
            "priceType": "PENSIONER",
            "price": 16.2
          },
          {
            "id": "7cdc7997-acd7-4589-b879-2a8967ba62ad",
            "priceType": "STUDENT",
            "price": 16.2
          }
        ]
      },
      {
        "id": "d444b249-6c4f-4e3a-b6af-c1224dcc938f",
        "weekday": "SUNDAY",
        "openingTime": "12:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "085c27b2-954a-4d6a-8600-dfe74ea2ef59",
            "priceType": "ADULT",
            "price": 18
          },
          {
            "id": "2a682b3a-86d8-4ab6-b580-97df62d6d2d9",
            "priceType": "CHILD",
            "price": 10
          },
          {
            "id": "4e97f37f-3cb7-4973-af7b-86e20d68f91b",
            "priceType": "CONSRIPT",
            "price": 16.2
          },
          {
            "id": "30631536-92e0-4370-98c3-d3d54dd66a58",
            "priceType": "PENSIONER",
            "price": 16.2
          },
          {
            "id": "6d867aeb-274d-43ac-bea0-2ca41b7cadae",
            "priceType": "STUDENT",
            "price": 16.2
          }
        ]
      }
    ],
    "phone": "+358 50 5581818",
    "webPage": "https://pereensaarensauna.fi/",
    "info": "Aukioloajat 1.8.2026 alkaen: ma-pe klo 14-22, la-su klo 12-22. Kertalippu arkisin 15 €, viikonloppuisin ja pyhäpäivinä 18 €, lapset 5-12 v. 10 € ja alle 5-vuotiaat veloituksetta. Eläkeläisille, opiskelijoille ja varusmiehille aina 10 % alennus. Saunomisaika 2 h, sauna toimii walk in -periaatteella. Kymppikortti 129 €. Emme vastaanota käteistä.",
    "kiosk": true,
    "restaurant": true
  },
  {
    "id": "40d72a2e-319f-4989-a634-f1d123edd29e",
    "name": "Rajaportin sauna",
    "streetAddress": "Pispalan valtatie 9",
    "postalCode": "33250",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "607c1878-57d1-4685-8275-d395f3978541",
        "weekday": "MONDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "8cbb797f-a965-459c-a884-8f33d44d5f62",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "9fa856c3-789a-4bfc-8fac-38059a088331",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "89ae956b-4d67-46a1-9edf-f054f5bce588",
        "weekday": "WEDNESDAY",
        "openingTime": "16:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "3c198180-b0cf-4f86-8c53-4ad92af73385",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "93cb66e2-9397-49f8-ae7f-741076bed826",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "aa476bd5-6b95-43fc-b7c6-f336785bcfdb",
        "weekday": "FRIDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "f9b47b68-7754-4ca6-87a4-002ae83e0e26",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "a5fb4f8e-40ed-4a24-b31c-b6c091f648b4",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "5ac8b914-1973-48eb-8a25-04564f3a4fbf",
        "weekday": "SATURDAY",
        "openingTime": "14:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "138907eb-9005-4140-a282-5b2cadb3fe97",
            "priceType": "ADULT",
            "price": 12
          },
          {
            "id": "1e12d660-4f54-40b1-ab6c-f53970580c58",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      }
    ],
    "phone": "+358 40 776 5198",
    "webPage": "https://www.rajaportinsauna.fi/",
    "info": "Suomen vanhin yleinen sauna. Ei pulahdusmahdollisuutta. Kahvio. Pääsymaksut: ma & ke 8 €, pe & la 12 €, lapset (6-15 v.) 4 € ja alle 6-vuotiaat ilmaiseksi. Torstaisin klo 16-23 Rajaportin sekasauna (saunamaksu 8 €), katso info sivuilta.",
    "kiosk": true,
    "restaurant": true
  },
  {
    "id": "e5464683-0de2-46f7-b84b-0ae7aac715b5",
    "name": "Rauhaniemen kansankylpylä",
    "streetAddress": "Rauhaniementie 24",
    "postalCode": "33180",
    "city": "Tampere",
    "openingHours": [],
    "phone": "+358 50 326 9815",
    "webPage": "https://rauhaniemi.net/",
    "info": "Rauhaniemen kansankylpylä on suljettu remontin vuoksi 22.3.2026 alkaen. Kertamaksu 11 € ja juniorit (7-14 v.) 5 €. Ajankohtaiset tiedot: rauhaniemi.net.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Räikän sauna",
    "streetAddress": "Räikäntie 3",
    "postalCode": "33470",
    "city": "Ylöjärvi",
    "openingHours": [
      {
        "id": "19c10501-6414-4ecf-b7be-8c78cee6120e",
        "weekday": "MONDAY",
        "openingTime": "12:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "fd7ae6bb-4acb-49df-bfe4-05e489b72013",
            "priceType": "ADULT",
            "price": 5
          }
        ]
      },
      {
        "id": "7dc850c6-13c2-4c72-bf86-c99c5bdf312d",
        "weekday": "WEDNESDAY",
        "openingTime": "12:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "7cae2c00-70c1-4b3d-94bb-d6075d00f911",
            "priceType": "ADULT",
            "price": 5
          }
        ]
      },
      {
        "id": "96a2631c-af90-4081-8a9c-0891a3a564f9",
        "weekday": "THURSDAY",
        "openingTime": "12:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "a7cb3d5a-1830-4c3b-b1f8-aa55dd049f39",
            "priceType": "ADULT",
            "price": 5
          }
        ]
      },
      {
        "id": "d51de599-3c1e-4593-be05-9e19bab0ebf5",
        "weekday": "SATURDAY",
        "openingTime": "11:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "96a2b17b-f6ba-4a86-9546-d1ea97beeab8",
            "priceType": "ADULT",
            "price": 5
          }
        ]
      }
    ],
    "phone": "",
    "webPage": "https://www.ylojarvenryhti.fi/hiihto/avantouinti/",
    "info": "Maksu itsepalveluna käteisellä.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "e0f75180-7e9e-4b2c-a72f-7cdd0c56ea11",
    "name": "Saunaravintola Kuuma",
    "streetAddress": "Laukontori 21",
    "postalCode": "33100",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "d61a7ae0-3628-4b3b-8775-abe8be01aaa9",
        "weekday": "MONDAY",
        "openingTime": "11:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "7fc50029-7e6a-49f2-b7a8-da6e86aba8d3",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "03ced326-eb4c-4e67-8681-5afd6f0a4935",
        "weekday": "TUESDAY",
        "openingTime": "11:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "78394fa7-0664-42a7-a8f9-3d4de0ed54a7",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "f1eb77cc-8825-4c55-9634-2bb297c287a0",
        "weekday": "WEDNESDAY",
        "openingTime": "11:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "83bd107a-ad50-46a5-ae76-47dcceb4e273",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "3af2ef90-4d61-4784-b265-ff390378505b",
        "weekday": "THURSDAY",
        "openingTime": "11:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "732042fd-07a5-4bbc-96bf-40439becfa56",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "e91524da-2e05-452f-b21c-6411dd928da7",
        "weekday": "FRIDAY",
        "openingTime": "11:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "e62707fb-fcc8-4cd7-b3d2-90e04fb33603",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "b3c04d34-508c-4845-b922-1845b4a1a0f6",
        "weekday": "SATURDAY",
        "openingTime": "12:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "b8226044-fd75-4205-b391-3c9c3ca1a6e6",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      },
      {
        "id": "1a91cec3-68ce-47b0-8785-40421d4cee64",
        "weekday": "SUNDAY",
        "openingTime": "12:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "2973082a-3d10-4cf0-ad7e-2edc871f81bd",
            "priceType": "ADULT",
            "price": 19
          }
        ]
      }
    ],
    "phone": "+358 50 5170559",
    "webPage": "https://www.saunaravintolakuuma.fi",
    "info": "Aamusaunat ovat kesätauolla ja palaavat 13.10.2026. Saunavuoron pituus 1,5 h ja saunavuoro 19 €. Lapset alle 7 v. veloituksetta ja alle 12 v. puoleen hintaan. Pyyhkeitä, uikkareita ja saunatossuja vuokrattavana (pyyhe 4 €, uimapuku ja saunatossut 3 €).",
    "kiosk": false,
    "restaurant": true
  },
  {
    "id": "73ca9aa4-01f9-4ec2-9922-df4982fe3a1e",
    "name": "Suomensaaren Sauna",
    "streetAddress": "Suomensaarenkatu 9",
    "postalCode": "33410",
    "city": "Tampere",
    "openingHours": [
      /*{ 
          "id": "a61f467c-2e49-43a0-a195-a3f6470c006c",
          "weekday": "MONDAY",
          "openingTime": "17:00:00",
          "closingTime": "21:00:00",
          "prices": [
              {
                  "id": "c091069a-34ff-41ce-97db-4955242b60b8",
                  "priceType": "ADULT",
                  "price": 11
              },
              {
                  "id": "7925b2bd-b258-4539-86e6-257fb7eac83a",
                  "priceType": "CHILD",
                  "price": 5
              },
              {
                  "id": "7fb0f330-f120-4785-b865-47e11f391aba",
                  "priceType": "PENSIONER",
                  "price": 7
              },
              {
                  "id": "ddbbd274-a76c-4517-98ce-800f569b690f",
                  "priceType": "STUDENT",
                  "price": 7
              }
          ]
      },
      {
          "id": "63913988-7a19-48f1-b8ff-7323156ca1df",
          "weekday": "WEDNESDAY",
          "openingTime": "17:00:00",
          "closingTime": "21:00:00",
          "prices": [
              {
                  "id": "06f4ec0a-ab34-4b55-a46e-a9eb3b5faea1",
                  "priceType": "ADULT",
                  "price": 11
              },
              {
                  "id": "7c50f00e-52a9-4b60-9974-092e28e8e11d",
                  "priceType": "CHILD",
                  "price": 5
              },
              {
                  "id": "030ad8e9-1b04-48a5-82b1-c33c3e45b728",
                  "priceType": "PENSIONER",
                  "price": 7
              },
              {
                  "id": "2ce4aa4f-0a62-44ed-a9d2-aa7ce9278cfa",
                  "priceType": "STUDENT",
                  "price": 7
              }
          ]
      },
      {
          "id": "a05dd246-4041-46e6-a0c0-a92ccb39600b",
          "weekday": "FRIDAY",
          "openingTime": "18:00:00",
          "closingTime": "22:00:00",
          "prices": [
              {
                  "id": "77e34dfa-2c1c-4f7b-9d2f-01d0d8613ec0",
                  "priceType": "ADULT",
                  "price": 11
              },
              {
                  "id": "61427993-ee2a-4acf-9572-9a1b5ff4c921",
                  "priceType": "CHILD",
                  "price": 5
              },
              {
                  "id": "43a2b5b5-431c-41ed-b2a5-e22859c09132",
                  "priceType": "PENSIONER",
                  "price": 7
              },
              {
                  "id": "950132cf-2bd3-4dec-b2a2-a03d7359d2fc",
                  "priceType": "STUDENT",
                  "price": 7
              }
          ]
      },
      {
          "id": "84b5d80f-1f4a-4d16-9faf-f8bfbad124c7",
          "weekday": "SATURDAY",
          "openingTime": "16:00:00",
          "closingTime": "19:00:00",
          "prices": [
              {
                  "id": "b155a4dd-ba09-4fbc-8e0c-6009f31b4162",
                  "priceType": "ADULT",
                  "price": 11
              },
              {
                  "id": "e2a6d3aa-b0b7-49c9-b74c-8389f303e8c3",
                  "priceType": "CHILD",
                  "price": 5
              },
              {
                  "id": "d640c18e-56c2-4e18-ac5b-6508656e2cf4",
                  "priceType": "PENSIONER",
                  "price": 7
              },
              {
                  "id": "1f07d69e-d5a0-4847-ac3e-71d091910307",
                  "priceType": "STUDENT",
                  "price": 7
              }
          ]
      }*/
      {
        "id": "a61f467c-2e49-43a0-a195-a3f6470c006c",
        "weekday": "MONDAY",
        "openingTime": "16:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "c091069a-34ff-41ce-97db-4955242b60b8",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "7925b2bd-b258-4539-86e6-257fb7eac83a",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "7fb0f330-f120-4785-b865-47e11f391aba",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "ddbbd274-a76c-4517-98ce-800f569b690f",
            "priceType": "STUDENT",
            "price": 8
          }
        ]
      },
      {
        "id": "63913988-7a19-48f1-b8ff-7323156ca1df",
        "weekday": "WEDNESDAY",
        "openingTime": "16:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "06f4ec0a-ab34-4b55-a46e-a9eb3b5faea1",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "7c50f00e-52a9-4b60-9974-092e28e8e11d",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "030ad8e9-1b04-48a5-82b1-c33c3e45b728",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "2ce4aa4f-0a62-44ed-a9d2-aa7ce9278cfa",
            "priceType": "STUDENT",
            "price": 8
          }
        ]
      },
      {
        "id": "a05dd246-4041-46e6-a0c0-a92ccb39600b",
        "weekday": "FRIDAY",
        "openingTime": "16:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "77e34dfa-2c1c-4f7b-9d2f-01d0d8613ec0",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "61427993-ee2a-4acf-9572-9a1b5ff4c921",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "43a2b5b5-431c-41ed-b2a5-e22859c09132",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "950132cf-2bd3-4dec-b2a2-a03d7359d2fc",
            "priceType": "STUDENT",
            "price": 8
          }
        ]
      },
      {
        "id": "84b5d80f-1f4a-4d16-9faf-f8bfbad124c7",
        "weekday": "SATURDAY",
        "openingTime": "14:00:00",
        "closingTime": "18:00:00",
        "prices": [
          {
            "id": "b155a4dd-ba09-4fbc-8e0c-6009f31b4162",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "e2a6d3aa-b0b7-49c9-b74c-8389f303e8c3",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "d640c18e-56c2-4e18-ac5b-6508656e2cf4",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "1f07d69e-d5a0-4847-ac3e-71d091910307",
            "priceType": "STUDENT",
            "price": 8
          }
        ]
      },
      {
        "id": "dd96f997-490a-496b-bc63-f57f4690cb81",
        "weekday": "SUNDAY",
        "openingTime": "15:00:00",
        "closingTime": "19:00:00",
        "prices": [
          {
            "id": "b155a4dd-ba09-4fbc-8e0c-6009f31b4163",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "e2a6d3aa-b0b7-49c9-b74c-8389f303e8c4",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "d640c18e-56c2-4e18-ac5b-6508656e2cf5",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "1f07d69e-d5a0-4847-ac3e-71d091910308",
            "priceType": "STUDENT",
            "price": 8
          }
        ]
      }
    ],
    "phone": null,
    "webPage": "https://lielahdenkipina.fi/suomensaarensauna/",
    "info": "Talviuintikausi 1.9.-30.4.: ma & ke klo 16-20, pe klo 16-21, la klo 14-18 ja su klo 15-19. Kesäuintikausi 1.5.-31.8.: ma, ke & pe klo 17-21, la klo 15-18 ja su suljettu. Saunalle tulee vain järvivesi, joka on hyvä huomioida ottamalla mukaan vettä juotavaksi. Kahvio. Käteinen ei käy. Saunomisaika on 1,5 tuntia.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "a60daa6e-16f4-456c-8259-d7b1d663bdd3",
    "name": "Halkoniemen sauna",
    "streetAddress": "Ojanteentie 16",
    "postalCode": "37120",
    "city": "Nokia",
    "openingHours": [
      {
        "id": "d31468b0-71ac-4137-8efb-2378b19dafc1",
        "weekday": "TUESDAY",
        "openingTime": "13:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "00eb3990-4816-45d3-866f-61b41dcc80db",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "af97bc68-03f0-4619-afd7-7fc305492ce5",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "b60afa2a-54e7-4afe-a1e4-b5cf2a05460e",
        "weekday": "WEDNESDAY",
        "openingTime": "13:00:00",
        "closingTime": "22:30:00",
        "prices": [
          {
            "id": "88c1a11a-cf0a-4e05-b038-f1ed8f118cce",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "b4ce2277-be84-4169-8a8e-3a1de98a4878",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "2cc504ff-a5db-436e-81b7-8106ad6df8ea",
        "weekday": "THURSDAY",
        "openingTime": "13:00:00",
        "closingTime": "23:00:00",
        "prices": [
          {
            "id": "62299545-3229-4ef0-ada2-fa1b19a7da72",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "3ad36a2d-f5f0-4900-a166-8d1d97a4cdda",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "3c41abad-ab88-4834-b3e5-bb61db2062e1",
        "weekday": "FRIDAY",
        "openingTime": "17:00:00",
        "closingTime": "23:30:00",
        "prices": [
          {
            "id": "eaa4e558-83fb-4e79-b688-ef48b0b3b757",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "c7083afa-fe55-40a8-bae7-8a73370c85d3",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "4159fe2f-e6c2-4596-8605-11341d817dd4",
        "weekday": "SATURDAY",
        "openingTime": "13:00:00",
        "closingTime": "22:30:00",
        "prices": [
          {
            "id": "2537db85-2066-45f7-a17a-1375f3efa738",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "b45955cd-4b6e-43fa-b8cf-889e817a0d68",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "dca84f4a-2f38-4c54-adf7-3d176d9ae7e5",
        "weekday": "SUNDAY",
        "openingTime": "13:00:00",
        "closingTime": "22:30:00",
        "prices": [
          {
            "id": "569d1d71-0196-47ce-95da-9d63b8bd9290",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "043a1529-5bbb-4f5c-a476-53a84ed2987d",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      }
    ],
    "phone": "",
    "webPage": "https://www.nokiantalviuimarit.net/",
    "info": "Talviajan aukioloajat 7.9.2026 alkaen: ti ja to klo 13-23, ke, la ja su klo 13-22.30. Ti ja to klo 13-15 on naisten vuoro. Kuumat löylyt ke klo 21-22.30 ja to klo 22-23. Perjantain savusauna klo 17-23.30 on tarkoitettu jäsenelle ja yhdelle vieraalle. Kertamaksu aikuiset 8 € ja alle 15-vuotiaat 2 €. Maksu tasarahalla lippaaseen tai MobilePaylla.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "a9594a00-e4bd-4093-a9e1-79a24a3b3b7a",
    "name": "Suolijärven sauna",
    "streetAddress": " Suolijärvenkatu 5",
    "postalCode": "33720",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "1204fbaf-c64a-4420-bac4-42af1622a79b",
        "weekday": "WEDNESDAY",
        "openingTime": "16:25:00",
        "closingTime": "20:45:00",
        "prices": [
          {
            "id": "dbe0cb96-2817-493b-ac33-d7a54dfcbff1",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "bfde1921-7e4d-4102-9bf4-96d08a3a3442",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "5393356b-c468-4c54-8e47-ae47830d5bad",
            "priceType": "PENSIONER",
            "price": 7
          },
          {
            "id": "1f8b921c-c9f3-4cf3-88b7-92df0da5d97e",
            "priceType": "STUDENT",
            "price": 7
          },
          {
            "id": "7d4b7f86-0b60-422d-bb25-e960df1e43cb",
            "priceType": "UNEMPLOYED",
            "price": 7
          }
        ]
      },
      {
        "id": "031818b7-ef8a-463b-8d43-0055f72c75da",
        "weekday": "THURSDAY",
        "openingTime": "16:25:00",
        "closingTime": "20:45:00",
        "prices": [
          {
            "id": "e37db06c-b6cc-4aac-b03d-4aca2078c77d",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "67027075-ef51-447d-b2f4-6acb3bd93e75",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "4463bba7-2716-4aa7-abd7-e934edb5ea45",
            "priceType": "PENSIONER",
            "price": 7
          },
          {
            "id": "2d8ddd9b-07e7-4ed5-8dc0-e3717f031e77",
            "priceType": "STUDENT",
            "price": 7
          },
          {
            "id": "9e1fc94b-a93e-4854-bf94-a51076a30746",
            "priceType": "UNEMPLOYED",
            "price": 7
          }
        ]
      },
      {
        "id": "c3b54d5c-9f10-497b-b90f-d3eb92bb7d62",
        "weekday": "SUNDAY",
        "openingTime": "13:25:00",
        "closingTime": "18:45:00",
        "prices": [
          {
            "id": "beea8c3c-192e-46f5-a02a-5b5723102ae9",
            "priceType": "ADULT",
            "price": 8
          },
          {
            "id": "24dfab6e-d12e-4983-8ee4-b3a3b237e723",
            "priceType": "CHILD",
            "price": 5
          },
          {
            "id": "16572bf7-be09-40e6-887a-008e762d40bc",
            "priceType": "PENSIONER",
            "price": 7
          },
          {
            "id": "ae63760e-d13b-4c0b-b449-70886bdb7c54",
            "priceType": "STUDENT",
            "price": 7
          },
          {
            "id": "ef3ab514-f19d-4528-8aea-b1a7b0ba58b7",
            "priceType": "UNEMPLOYED",
            "price": 7
          }
        ]
      }
    ],
    "phone": "+358 400 243 559",
    "webPage": "https://juttusauna.fi/suolijarven-sauna/",
    "info": "Talvikausi on alkanut kolmen saunan voimin ja sauna on auki ke ja to klo 16.25-20.45 sekä su klo 13.25-18.45. Päiviä tulee lisää kauden edetessä. Aukioloaika on jaettu tunnin vuoroihin ja laudepaikan voi varata varauskalenterista. Maksu kortilla, MobilePaylla tai liikuntaeduilla, emme vastaanota käteistä. Normaali saunamaksu 8 €, opiskelijat, eläkeläiset ja työttömät 7 €, juniorit (1-14 v.) 5 €.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "75d036ab-e5f4-4a11-aeed-128506047a39",
    "name": "Tohlopin tynnyrisauna",
    "streetAddress": "Pyydyspohjankatu 1",
    "postalCode": "33310",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "f6f76c75-19c5-4d26-aba6-3c4c3eb6fb61",
        "weekday": "TUESDAY",
        "openingTime": "17:30:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "b05a3705-ba4c-4710-b852-e2ff37377a98",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "e4ee8a73-83c4-41ef-baa5-6ad24780a25c",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "558d4244-0d8d-4f9a-86ce-a2ffdfd91714",
        "weekday": "WEDNESDAY",
        "openingTime": "17:30:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "93b0230a-933d-465f-ba29-8a337755a227",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "975760e1-dd29-4f52-8b40-175528e08c86",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "95345131-32db-4363-8775-bdd64574ef37",
        "weekday": "THURSDAY",
        "openingTime": "17:30:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "0cfa739c-2912-43fe-8f71-773eecc9ecd1",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "fbbdbf39-1cd8-4893-b03e-adc89160d434",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "9ab75f57-2a46-4a1c-a721-5b8f46924bbd",
        "weekday": "SATURDAY",
        "openingTime": "16:00:00",
        "closingTime": "19:00:00",
        "prices": [
          {
            "id": "acd0d5ff-b3e3-4782-adf6-86d78f080969",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "2abeac5e-e5db-47a0-a6e1-96aedf3f2d3e",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "a4299e69-fc53-4f1d-aa60-73487e4e4a0f",
        "weekday": "SUNDAY",
        "openingTime": "17:30:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "b95ea363-56d6-4629-a075-ab3c225ffc33",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "1a436b72-565a-417e-958c-ddd01fea0475",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      }
    ],
    "phone": "",
    "webPage": "https://sites.google.com/view/tohlopinuimaseura",
    "info": "Saunavuorot: ti, ke ja to klo 17.30-21.00, la klo 16-19 (lempeiden löylyjen vuoro) ja su klo 17.30-21.00. Kertamaksu 7 €, uimaseuran jäsenille 5 € ja 15-vuotiaille ja sitä nuoremmille 4 €. Ei suihkuja, vaatteiden vaihto uimakopissa. Saunan toiminnasta vastaa 1.7.2026 alkaen Laulujoutsen Sauna Oy.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "fe55cca0-9c96-4177-a48a-bd098ec55658",
    "name": "Veittijärven Sauna",
    "streetAddress": "Viljakkalantie 140",
    "postalCode": "33480",
    "city": "Ylöjärvi",
    "openingHours": [
      {
        "id": "55678cc3-10b9-4960-949f-8854740202fc",
        "weekday": "TUESDAY",
        "openingTime": "16:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "b35e6b18-81f6-4734-a54e-e2d835fa14b9",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "93f24553-c2be-4ff1-8fe5-a70dedc85e0d",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "6ded7847-9b2b-4a0b-8044-e450f7656f57",
        "weekday": "WEDNESDAY",
        "openingTime": "16:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "0512bc88-6ac3-4cc2-b7ec-8b7acdce950e",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "06014008-1778-4df2-8b84-75f8c7c79268",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "3f42668f-032c-47df-af08-9b8e2ea39625",
        "weekday": "FRIDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "fa1e782a-6530-4404-b854-be517d5b3b1a",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "6a952c58-5c3d-482a-8a77-f915ab8966e4",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "5538cdce-bd17-45d7-bdc1-3b778bbd74a7",
        "weekday": "SATURDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "ac1d5c25-3b2d-409a-b0ad-01d8c20c0742",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "cb8b84ea-f224-4151-bab9-b67a9ae52166",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      },
      {
        "id": "bf67475d-2a38-4f67-bac1-1c1eacc38deb",
        "weekday": "SUNDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "62b9c47a-db54-40fe-8ea0-485433ad2688",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "e88ebc50-e394-4696-a72c-50358586dbe6",
            "priceType": "CHILD",
            "price": 5
          }
        ]
      }
    ],
    "phone": "+358 44 9730899",
    "webPage": "https://www.ylojarvenavantouimarit.fi/",
    "info": "Talven aukioloajat: ti ja ke klo 16-21 sekä pe, la ja su klo 15-21. Perjantain yleinen vuoro päättyy klo 20, mikäli vuorolla on yksityistilaisuus. Kertamaksu jäsenille 8 € ja ei-jäsenille 10 €, lapset 5 €. 10 kerran kortti jäsenille 70 € ja ei-jäsenille 90 €.",
    "kiosk": true,
    "restaurant": false
  },
  /*{
  "id": "1989995a-a625-4697-810f-db5b8ab55686",
  "name": "Tampereen pursiseura avantolautta",
  "streetAddress": "Kekkosenkatu 10",
  "postalCode": "33100",
  "city": "Tampere",
  "openingHours": [
      {
          "id": "dc9b30f3-a338-4084-8c3a-7b346b2d352e",
          "weekday": "FRIDAY",
          "openingTime": "18:00:00",
          "closingTime": "21:00:00",
          "prices": [
              {
                  "id": "b3969cd9-bf0e-4e06-8a79-a1cbfaf73eb2",
                  "priceType": "ADULT",
                  "price": 9
              }
          ]
      },
      {
          "id": "8a453ce0-014c-49b2-842d-d821f6d53f2c",
          "weekday": "SATURDAY",
          "openingTime": "18:00:00",
          "closingTime": "21:00:00",
          "prices": [
              {
                  "id": "a6b98da2-8144-4fce-acd0-d987c389e6b6",
                  "priceType": "ADULT",
                  "price": 9
              }
          ]
      }
  ],
  "phone": "",
  "webPage": "https://taps.fi/tuote/avantosaunan-varaus/",
  "info": "Uusi saunakokemus Naistenlahdessa.Varaa tunnin saunavuoro netistä etukäteen.",
  "kiosk": false,
  "restaurant": false
  },*/
  {
    "id": "0fb39581-d4b6-472f-851c-d43b770b1325",
    "name": "Huvilan saunat",
    "streetAddress": "Uramonkatu 9",
    "postalCode": "33240",
    "city": "Tampere",
    "openingHours": [
      {
        "id": "9cffff46-fa09-4002-98b4-5a743370475a",
        "weekday": "TUESDAY",
        "openingTime": "15:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "21ad4692-d8db-411c-9bdc-e4f6d02e5848",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "7439e8f9-b7e0-418c-957d-8f1bcdf449a1",
            "priceType": "CHILD",
            "price": 3.5
          },
          {
            "id": "5382f92f-e795-4c96-bd85-c81ff5494197",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "2d5c70e9-e2aa-44fb-86a4-b7e12129c7b2",
            "priceType": "STUDENT",
            "price": 8
          },
          {
            "id": "60128254-e22c-4918-bf94-555739f034e6",
            "priceType": "UNEMPLOYED",
            "price": 8
          }
        ]
      },
      {
        "id": "2f76abae-3329-4cea-9648-d7d71165bfbc",
        "weekday": "THURSDAY",
        "openingTime": "15:00:00",
        "closingTime": "19:00:00",
        "prices": [
          {
            "id": "ce983d51-0b30-4cf5-8614-0b8d4c9f4552",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "67419ae9-6ae6-4971-b476-bddde8fb2713",
            "priceType": "CHILD",
            "price": 3.5
          },
          {
            "id": "0a738774-606d-41d6-9a28-07101f38a961",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "de345b11-8db3-4f2a-b049-8c2e0c69cb6c",
            "priceType": "STUDENT",
            "price": 8
          },
          {
            "id": "593a4031-3290-4b8a-8780-26f51a960fc8",
            "priceType": "UNEMPLOYED",
            "price": 8
          }
        ]
      },
      {
        "id": "25239230-8670-4e7e-bc8b-8a921eb1f3d6",
        "weekday": "THURSDAY",
        "openingTime": "19:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "77879e06-f1a0-4260-959a-508ff491bfe3",
            "priceType": "ADULT",
            "price": 10
          },
          {
            "id": "22aebb07-1aff-4202-8bf8-196f1f213a1e",
            "priceType": "CHILD",
            "price": 3.5
          },
          {
            "id": "f95dee3d-96ca-4e37-91f0-65efc4de7c45",
            "priceType": "PENSIONER",
            "price": 8
          },
          {
            "id": "bbf708ad-5158-40c3-9580-d1ed15a77531",
            "priceType": "STUDENT",
            "price": 8
          },
          {
            "id": "0902a28c-ba5c-4e41-ab4b-6b4f1fa080b4",
            "priceType": "UNEMPLOYED",
            "price": 8
          }
        ]
      },
      {
        "id": "e521b98e-48d2-4d8a-b151-f528804da6e6",
        "weekday": "SUNDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "bd293c71-8554-4e35-b2e9-51a38e114638",
            "priceType": "ADULT",
            "price": 15
          },
          {
            "id": "d0274466-c866-4671-9361-4cc3c1040cb6",
            "priceType": "CHILD",
            "price": 3.5
          },
          {
            "id": "21c4f880-222f-435d-bee6-95d281f6d8ce",
            "priceType": "PENSIONER",
            "price": 12
          },
          {
            "id": "eb37ebed-10c6-4b3e-803a-8fdd79f0c774",
            "priceType": "STUDENT",
            "price": 12
          },
          {
            "id": "80a3e233-093e-4d53-a0ab-b645abf72696",
            "priceType": "UNEMPLOYED",
            "price": 12
          }
        ]
      }
    ],
    "phone": null,
    "webPage": "https://www.tahmelanhuvila.fi/sauna/",
    "info": "Yleiset saunavuorot: ti klo 15-21 (sekavuoro), to klo 15-19 (sekavuoro) ja klo 19-21 (naisten vuoro) sekä su klo 14-21 (sekavuoro). Saunamaksu ti ja to 10 €, sunnuntaisin 15 €. Eläkeläisille, opiskelijoille ja työttömille alennettu hinta 8 € / 12 €. Lapset 6-12 v. 3,50 € ja alle 6 v. 0 €. Kymppikortti 80 €. Uimapuku mukaan, kaksi puulämmitteistä saunaa käytössä.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "ee4ee3cc-7338-4a97-ab76-2bb51af05d11",
    "name": "Kauhtuan sauna",
    "streetAddress": "Kauhtuantie 6",
    "postalCode": "39200",
    "city": "Kyröskoski",
    "openingHours": [
      {
        "id": "9791b4a1-69e1-401f-971f-39c32c6a14a6",
        "weekday": "MONDAY",
        "openingTime": "15:30:00",
        "closingTime": "20:30:00",
        "prices": [
          {
            "id": "36571a18-7482-4df8-b02b-4adb1a6795bb",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "d1d8a34b-0d54-4ce1-838f-3c076ca23390",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "4c12e967-aa90-42d0-b6d0-07f3d47ea972",
        "weekday": "WEDNESDAY",
        "openingTime": "15:30:00",
        "closingTime": "20:30:00",
        "prices": [
          {
            "id": "41f89f4c-0cc5-4ca3-9818-507bd63b24f7",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "c0b7fdb7-4001-4462-a94d-8dab285330c1",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "57f83be2-3bfb-4459-b6bf-9fdf67e0bf06",
        "weekday": "FRIDAY",
        "openingTime": "15:30:00",
        "closingTime": "20:30:00",
        "prices": [
          {
            "id": "cfea7d6e-4af0-45fb-a4ff-5258a486e773",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "b9a1cd42-2dfc-498b-8eb5-137e1f876173",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      {
        "id": "2308ad8c-69f0-442a-994d-51c19e5b3b03",
        "weekday": "SATURDAY",
        "openingTime": "14:00:00",
        "closingTime": "17:30:00",
        "prices": [
          {
            "id": "82184f72-ff75-4d23-879c-dde2fa2d7a8e",
            "priceType": "ADULT",
            "price": 9
          },
          {
            "id": "4caea64f-92e2-4441-b1aa-3cc2b2efe184",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      }
    ],
    "phone": "044-5400882",
    "webPage": "https://www.hameenkyrontalviuimarit.fi/",
    "info": "Yleiset saunavuorot: ke ja pe klo 15.30-20.30 (tavallinen sauna ja savusauna). Lokakuun alusta saunat ovat auki myös maanantaisin klo 15.30-20.30 ja lauantaisin klo 14-17.30 (tavallinen sauna, kuun ensimmäisenä lauantaina myös savusauna). Kertamaksu 9 €, lapset 10-16 v. 2 € ja alle 10-vuotiaat ilmaiseksi. Takkatuvan kassa sulkeutuu ma, ke ja pe klo 20 ja la klo 17. Karttahakuun kannattaa laittaa Kauhtuan sauna.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "19132d75-07d3-42fe-b072-14f56be104af",
    "name": "Apian sauna",
    "streetAddress": "Urheilukatu 20",
    "postalCode": "37600",
    "city": "Valkeakoski",
    "openingHours": [
      {
        "id": "3530f216-8bc1-49f0-b482-76545a5e6ed4",
        "weekday": "TUESDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "f41b121b-9ce0-4fe3-9778-4543b4f01768",
            "priceType": "ADULT",
            "price": 8
          }
        ]
      },
      {
        "id": "b7a8c000-c517-4aaf-a8de-aa5027b769ae",
        "weekday": "THURSDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "df202900-50f6-429c-b2eb-93836e2381eb",
            "priceType": "ADULT",
            "price": 8
          }
        ]
      },
      {
        "id": "fe017426-28c1-4e2a-bebf-6a752ad499a3",
        "weekday": "FRIDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "519712b6-ad08-4410-b1e8-d0c7d4dd7c9d",
            "priceType": "ADULT",
            "price": 8
          }
        ]
      },
      {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "weekday": "SATURDAY",
        "openingTime": "11:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "b2c3d4e5-f6a7-8901-bcde-ef2345678901",
            "priceType": "ADULT",
            "price": 8
          }
        ]
      },
      {
        "id": "3f0fe722-537b-4aea-9196-a8a396c6fea7",
        "weekday": "SUNDAY",
        "openingTime": "11:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "6ff17db8-3400-4573-b96a-32d2a04c4758",
            "priceType": "ADULT",
            "price": 8
          }
        ]
      }
    ],
    "phone": "",
    "webPage": "https://apianavantouimarit.fi/",
    "info": "Sauna on 27.9.2026 alkaen jälleen avoinna tiistaisin, torstaisin, perjantaisin, lauantaisin ja sunnuntaisin. Kertamaksu ei-jäsenille 8 € ja jäsenille 4 €. Alle 13-vuotiaat pääsevät vanhempien seurassa ilmaiseksi. Kertamaksuissa ei käy käteinen eikä paperiset liikuntasetelit. Pysäköintialueen osoite on Urheilukatu 16-18, sauna löytyy mäen juuresta Apian uimarannalta.",
    "kiosk": false,
    "restaurant": false
  },
  {
    "id": "3717fe0b-fc40-45d0-bd20-d752f181aded",
    "name": "Reipin sauna",
    "streetAddress": "Reipintie 43",
    "postalCode": "33980",
    "city": "Pirkkala",
    "openingHours": [
      {
        "id": "855c4d54-0237-47dc-828e-9cfbaf3db531",
        "weekday": "MONDAY",
        "openingTime": "17:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "c5b87faa-b27e-4319-9b7b-93e4326875cb",
            "priceType": "ADULT",
            "price": 6
          },
          {
            "id": "d50b91b7-f638-432a-9131-33949d82fd07",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      /*{
          "id": "855c4d54-0237-47dc-828e-9cfbaf3db531",
          "weekday": "TUESDAY",
          "openingTime": "14:00:00",
          "closingTime": "20:00:00",
          "prices": [
              {
                  "id": "c5b87faa-b27e-4319-9b7b-93e4326875cb",
                  "priceType": "ADULT",
                  "price": 6
              },
              {
                  "id": "d50b91b7-f638-432a-9131-33949d82fd07",
                  "priceType": "CHILD",
                  "price": 2
              }
          ]
      },*/
      {
        "id": "b9d35093-a5a9-4dda-ac15-d4e69cb7b2a9",
        "weekday": "WEDNESDAY",
        "openingTime": "17:00:00",
        "closingTime": "20:00:00",
        "prices": [
          {
            "id": "b217eca6-3efa-4713-80ee-53b245765b52",
            "priceType": "ADULT",
            "price": 6
          },
          {
            "id": "284a244f-2b85-4be7-9c25-338deda9ba9d",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      },
      /*{
          "id": "a1b2c3d4-e5f6-4748-a9b0-123456789abc",
          "weekday": "THURSDAY",
          "openingTime": "14:00:00",
          "closingTime": "20:00:00",
          "prices": [
              {
                  "id": "a1b2c3d4-e5f6-4748-a9b0-111111111111",
                  "priceType": "ADULT",
                  "price": 6
              },
              {
                  "id": "a1b2c3d4-e5f6-4748-a9b0-222222222222",
                  "priceType": "CHILD",
                  "price": 2
              }
          ]
      },
      {
          "id": "e1f2a3b4-c5d6-4849-b0c1-234567890def",
          "weekday": "FRIDAY",
          "openingTime": "14:00:00",
          "closingTime": "20:00:00",
          "prices": [
              {
                  "id": "e1f2a3b4-c5d6-4849-b0c1-111111111111",
                  "priceType": "ADULT",
                  "price": 6
              },
              {
                  "id": "e1f2a3b4-c5d6-4849-b0c1-222222222222",
                  "priceType": "CHILD",
                  "price": 2
              }
          ]
      },*/
      {
        "id": "ce1c1142-324d-476a-b883-8630df02748e",
        "weekday": "SATURDAY",
        "openingTime": "14:00:00",
        "closingTime": "18:00:00",
        "prices": [
          {
            "id": "81287699-8dc5-4e5f-aa13-557cccb6d684",
            "priceType": "ADULT",
            "price": 6
          },
          {
            "id": "9c457cd9-fb8b-4429-9c66-ad622fc64b32",
            "priceType": "CHILD",
            "price": 2
          }
        ]
      }/*,
            {
                "id": "f1e2d3c4-b5a6-4950-c1d2-345678901fed",
                "weekday": "SUNDAY",
                "openingTime": "14:00:00",
                "closingTime": "18:00:00",
                "prices": [
                    {
                        "id": "f1e2d3c4-b5a6-4950-c1d2-111111111111",
                        "priceType": "ADULT",
                        "price": 6
                    },
                    {
                        "id": "f1e2d3c4-b5a6-4950-c1d2-222222222222",
                        "priceType": "CHILD",
                        "price": 2
                    }
                ]
            }*/
    ],
    "phone": "040 133 5766",
    "webPage": "https://www.pirkkala.fi/toimipisteet/reipin-sauna-fi-5f192a48475a6c2fdbf4c312/",
    "info": "Talvikausi 3.8.2026 alkaen: kaikille avoimet saunavuorot maanantaisin ja keskiviikkoisin klo 17-20 sekä lauantaisin klo 14-18. Saunarakennuksessa on yhteinen takkatupa ja kaksi saunaa ja pukuhuonetta. Vain käteinen: aikuiset 6 €/kerta, lapset (alle 15 v.) 2 €/kerta, 10 kerran kortti 50 €.",
    "kiosk": true,
    "restaurant": false
  },
  {
    "id": "ed5519ee-638b-4a54-bfe3-73e1beee8c99",
    "name": "Lempee sauna",
    "streetAddress": "Vanha Rantatie 107",
    "postalCode": "37500",
    "city": "Lempäälä",
    "openingHours": [
      {
        "id": "b78be3ec-6e6e-4313-8cbe-f858d89e3144",
        "weekday": "MONDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "62d7c1fa-33c5-4e37-b53c-50d43bb9b99e",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "3d27b77b-0386-4fa9-a95e-22cd97397f8a",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "7ae8389e-493d-4a94-bd91-08512b68ae10",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "51496814-b1fd-460d-9cda-44f2d66e06df",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "3d65f133-4b9f-4a04-bff6-c9e3667bd228",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "9a50745b-2b25-47f7-8436-553c2d9c91e8",
        "weekday": "TUESDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "79f242d9-9deb-4c5a-8fb1-55de2edfa828",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "6d0296f2-5bed-4832-94ed-188c9a590185",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "cf108986-9eaf-4f07-8ff1-385795543b5a",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "4748ba44-aca1-466e-8897-81d589b7de63",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "fa1c9088-8a81-490d-8f73-b30df850fd94",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "edf9c9f8-9741-48c5-bc5a-7324cefbd3fa",
        "weekday": "WEDNESDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "cbbd7379-0a5d-4a3d-b0a6-edf0e3288bd2",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "5c9ba5e9-9a67-4b75-8a6e-213afe5f380a",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "ce621e95-7533-44ab-a74b-5c18a196b955",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "07252c16-7822-4992-94ec-05b888a287f3",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "0ad70dde-4426-405b-9bc0-5dda03866183",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "606ec29d-df84-457b-ba58-580c8918733f",
        "weekday": "THURSDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "1b93c82d-9d27-4f9a-9db9-f218e929119b",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "67563727-d4e8-42d2-bf99-d6172d54b8ee",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "178b9b85-0c2b-4660-8cc5-e8cc5726fc59",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "9fd713c4-a5e4-4698-9f45-f7bd0be09282",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "63bd2bf8-6af6-44ff-a49a-ef68e26a49dc",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "391fdbb7-3b94-4ba2-986b-396d99ee0a22",
        "weekday": "FRIDAY",
        "openingTime": "15:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "bcecce13-4b9f-40c6-84f8-a1860d2f9003",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "9fb86946-71df-4592-b104-4522c7ba18b5",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "7711e622-8312-46c6-b9ff-45524428a6bd",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "d961d746-933b-48b9-ab62-aa6044fb47ef",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "0da0f8c6-e8c2-4b70-9c9c-2003f0ec52d6",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "4697a75d-661f-471a-9330-8a0f3d3dbf76",
        "weekday": "SATURDAY",
        "openingTime": "12:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "7cb8fea2-4293-4ded-93f2-6fd910a39e4d",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "57ae7f59-bde7-4934-8d23-24473e433ab4",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "9560beee-f0c3-4dfa-85a9-1a9d67956ad3",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "fbf436dd-08a8-472f-9846-cb0c76462514",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "b017a7ec-ee35-4442-953e-0ce41e6739c8",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      },
      {
        "id": "db554ea6-6e97-4fbd-b4bc-389955b702b8",
        "weekday": "SUNDAY",
        "openingTime": "12:00:00",
        "closingTime": "22:00:00",
        "prices": [
          {
            "id": "e335590c-c36f-4623-a103-d2650d777eca",
            "priceType": "ADULT",
            "price": 13
          },
          {
            "id": "978d6587-34c1-46db-b2ad-7fd9fa711df1",
            "priceType": "CHILD",
            "price": 9
          },
          {
            "id": "dc5b349d-d195-4cf2-af8e-2711ca128d76",
            "priceType": "PENSIONER",
            "price": 11.7
          },
          {
            "id": "c82ab424-6cfe-4da5-b44f-fc18165e4075",
            "priceType": "STUDENT",
            "price": 11.7
          },
          {
            "id": "3f26bcb0-ab6e-44cd-93b8-507f0da62073",
            "priceType": "CONSRIPT",
            "price": 11.7
          }
        ]
      }
    ],
    "phone": "041 3276 983",
    "webPage": "https://lempeesauna.fi/sauna/",
    "info": "Yleinen sauna Pyhäjärven rannalla Lempäälän Mäyriässä. Kaksi maisemasaunaa (Kajo ja Korpi), lämmin- ja kylmäallas sekä uinti järvessä laiturilta ympäri vuoden. Sauna- ja allasalue suljetaan 15 min ennen sulkeutumista. Saunat ovat yhteiset miehille ja naisille, uima-asun käyttö on pakollista. Sauna-aika on 1,5 tuntia, saunat toimivat ilman ajanvarausta. Kertaliput myydään saunan kassalta: aikuinen 13 €, lapsi alle 12 v. 9 €, eläkeläisille, opiskelijoille ja varusmiehille -10 %. 10 kerran sarjalippu 109 €. Maksutapoina käyvät pankkikortti ja yleisimmät hyvinvointi- ja liikuntaedut.",
    "kiosk": true,
    "restaurant": false,
    "isNew": true
  },
  {
    "id": "5ca4a7af-cad7-4b34-99d3-d5d455564e1d",
    "name": "Rantalan sauna",
    "streetAddress": "Ruodasjärventie 50",
    "postalCode": "37560",
    "city": "Lempäälä",
    "openingHours": [
      {
        "id": "3c31ad02-52d4-47d5-a675-941a5a7570a9",
        "weekday": "MONDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "02515916-76d3-405f-b80c-dbd9abf50fd7",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "10a7abe8-896f-4676-b31d-60f0679b92d8",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "397e4304-6a5f-448d-b401-048bbc5311cf",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "f81b9c44-e454-4a45-9393-5b0af936a826",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "516ef212-12f4-4846-a087-b26d3d83a36a",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "38ce8f52-b5e3-4885-93ed-33849ac89854",
        "weekday": "TUESDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "5201587c-0e79-43a9-a47c-c31896b053d3",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "e6f3b3c1-d473-4744-8199-93eef69e8cf3",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "35f9bf38-6a37-433e-b448-e59842a08564",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "d17444c9-2031-44d5-9990-d06a67d31a08",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "5d959431-f8ed-4c03-8d89-e39ca35d6439",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "484c93a2-800a-407f-aee5-b8e35e8ceb01",
        "weekday": "WEDNESDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "0d4c1f56-b4a3-4f56-9122-e0ef06dd3351",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "a942ee5b-ed7b-406e-9d4f-4cfd65691cf8",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "7af605fa-cca9-4de4-aee7-03b8ea676a81",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "9c459bee-efac-42e2-85dd-a0bd8fad3e24",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "81f51d2a-082c-4675-89bc-1baebb5b933f",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "6cba43a3-82c1-4774-86fb-b61ada087727",
        "weekday": "THURSDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "39aa7380-dba6-40b9-9523-dcc6233a03b4",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "20fa3b12-33bc-492b-b030-415bd3d02491",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "0d847129-413d-4aac-9320-5563b7f6b3ec",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "3c929c19-e46f-48e0-a46a-8daa8776a2b9",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "79e51bfd-9d17-457a-a984-50d86a414281",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "1ae6dda9-45c7-49a2-beb7-e70449aeb906",
        "weekday": "FRIDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "03ae72f5-f38c-41b9-b42a-2b1f1bb73796",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "bc0a8a96-ffdd-4cf6-a06b-a529c774d3e5",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "56f3cabc-958c-47bb-bb9f-aaee89f92509",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "cdd44e58-4392-4d7c-83db-802b43b6ed56",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "7447280f-237c-4919-b79d-70cfa16d52c3",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "e7118796-f423-4beb-b33e-c4a8a690872e",
        "weekday": "SATURDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "4d4092f5-d8d5-4fda-b0bb-62a729814b56",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "de49603d-6f07-43f5-b612-4d45ed262706",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "3fdb62a4-ed47-4672-acf7-e687246a2a9b",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "a729709e-508d-4373-aea7-e56639647a79",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "7f007090-68c0-45af-b752-dfd9265ef1a4",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      },
      {
        "id": "4404c64a-352f-4dc4-94cc-4400bbe78b5f",
        "weekday": "SUNDAY",
        "openingTime": "14:00:00",
        "closingTime": "21:30:00",
        "prices": [
          {
            "id": "93bc872f-07c5-4553-9545-660e599baeaa",
            "priceType": "ADULT",
            "price": 11
          },
          {
            "id": "6bb6a4e8-9048-4fac-91a6-febe205c05fd",
            "priceType": "CHILD",
            "price": 6
          },
          {
            "id": "e40790ce-ee92-42db-9fb8-760440acd644",
            "priceType": "PENSIONER",
            "price": 9.9
          },
          {
            "id": "703b0c93-0712-430a-a316-7bd6670ef183",
            "priceType": "STUDENT",
            "price": 9.9
          },
          {
            "id": "83d8a0d4-066e-4ccc-a921-127808708dc6",
            "priceType": "CONSRIPT",
            "price": 9.9
          }
        ]
      }
    ],
    "phone": "+358 45 7834 3303",
    "webPage": "https://rantalansaunalle.fi/",
    "info": "Aito suomalainen saunakokemus Lempäälän ja Tampereen rajalla, avattu 5.9.2026. Lämpimän saunan lisäksi virkistävä avanto talvikaudella ja viihtyisä tuvan kahvio. Saunat toimivat ilman ajanvarausta ja yhden saunavuoron aika on 1,5 h. Kertamaksu 11 €, lapset (alle 12 v.) 6 € ja alennusryhmille (eläkeläiset, opiskelijat, vanhempainvapaa, varusmiehet) -10 %. Sarjakortit: 3 kerran kortti 30 €, 10 kerran kortti 90 €, 35 kerran kortti 290 €. Maksuvälineinä käyvät kortti, käteinen, MobilePay sekä E-passi ja Edenred.",
    "kiosk": true,
    "restaurant": false,
    "isNew": true
  },
  {
    "id": "c80eb4aa-ca3a-4b08-b057-6cdfbdd38247",
    "name": "Vesaniemen avantosauna",
    "streetAddress": "Vesaniementie 15",
    "postalCode": "36200",
    "city": "Kangasala",
    "openingHours": [
      {
        "id": "75705e33-0263-4514-afb7-62af19d35b95",
        "weekday": "MONDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "358de63b-e195-4943-b6bd-26158a604bee",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "e8e9f039-a64f-44ce-99f2-8377241b4157",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "6da196c2-3420-4e78-add4-7f6b2794cad4",
        "weekday": "WEDNESDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "745e7e8f-db30-4ce4-b23f-8a818bc89f68",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "a6b0e47f-7a9d-4654-bb1a-ccfbeb3a7d6b",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "0f5cfa6f-0709-4db0-a68e-dee4b9ff2975",
        "weekday": "THURSDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "57c9f394-2d56-47f9-998e-e0a83f1ea491",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "602b8772-e85e-45c3-9e8c-08790df8357e",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      },
      {
        "id": "4d366138-1e10-4093-901f-1b32708d4646",
        "weekday": "FRIDAY",
        "openingTime": "17:00:00",
        "closingTime": "21:00:00",
        "prices": [
          {
            "id": "42a67b63-4d89-4d61-8559-9693b40cf2ad",
            "priceType": "ADULT",
            "price": 7
          },
          {
            "id": "ffbbf2c3-8781-4013-ac0a-3ccd4d87390b",
            "priceType": "CHILD",
            "price": 4
          }
        ]
      }
    ],
    "phone": "",
    "webPage": "https://www.uintiseura.fi/Vesaniemen-sauna/",
    "info": "Kangasalan kaupungin omistama Vesaniemen sauna Vesijärven rannalla Kangasalan keskustan vieressä; toiminnasta vastaa Kangasalan Uintiseura ry. Avantosaunakausi 4.9.2026-14.5.2027: lokakuusta huhtikuuhun ma, ke, to ja pe klo 17-21, tammi-maaliskuussa myös sunnuntaisin klo 16-19 (sunnuntain aukiolo alkaa vasta tammikuussa). Syyskuussa ja toukokuussa sauna lämpiää ma ja pe klo 17-21. Kassa sulkeutuu arkisin klo 20.15 ja sunnuntaisin klo 18.15. Kesä-elokuussa kesäsauna on Kangasalan Melojien järjestämä. Miehille ja naisille on omat saunat, avanto pidetään sulana ilmakompressorilla. Aikuinen 7 €/kerta, lapset 3-12 v. 4 €/kerta ja alle 3-vuotiaat maksutta, 12 lipun lippuvihko 70 €. Maksutavat: pankkikortti, MobilePay, ePassi ja Edenred; käteinen poistui käytöstä 1.10.2025. Lisätiedot: uintiseura.fi ja kangasalanuintiseura(at)gmail.com.",
    "kiosk": false,
    "restaurant": false
  }

]