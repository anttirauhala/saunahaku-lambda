
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: sortSaunasByToday(sortSaunasByName(result)),
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
                "openingTime": "14:00:00",
                "closingTime": "17:00:00",
                "prices": [
                    {
                        "id": "e553d43c-4998-43dd-ac56-2c4136be1a17",
                        "priceType": "ADULT",
                        "price": 7
                    },
                    {
                        "id": "55fc8ad8-0a0f-4ba0-867a-59675385bc4d",
                        "priceType": "CHILD",
                        "price": 2
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
                        "price": 7
                    },
                    {
                        "id": "3f598907-7c64-4731-94c7-f7be099e65b7",
                        "priceType": "CHILD",
                        "price": 2
                    }
                ]
            },
            {
                "id": "496f9b79-0cc4-48d0-96b6-0c1149533e14",
                "weekday": "FRIDAY",
                "openingTime": "15:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "8ae5c1f4-1f3e-4c6a-8f71-87b425e04881",
                        "priceType": "ADULT",
                        "price": 7
                    },
                    {
                        "id": "d6f4b556-8277-416f-a2e8-682621ecd287",
                        "priceType": "CHILD",
                        "price": 2
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
                        "price": 7
                    },
                    {
                        "id": "7533ef71-c44c-44f1-9e79-61c1c57aa386",
                        "priceType": "CHILD",
                        "price": 2
                    }
                ]
            }
        ],
        "phone": "+358 50 919 7050",
        "webPage": "https://www.alisniemi.com/",
        "info": "",
        "kiosk": true,
        "restaurant": false
    },
    {
        "id": "8d2b44bd-d2e6-4145-9c2f-a454d73201be",
        "name": "FLOU Sauna",
        "streetAddress": "Jalkasaarentie 7, Rosendahlin Laituri",
        "postalCode": "33230",
        "city": "Tampere",
        "openingHours": [
            {
                "id": "af9f9da6-bde7-46b5-abf0-0525ffda8137",
                "weekday": "MONDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "26621b66-5f24-4f39-aae4-f07117187ca6",
                        "priceType": "ADULT",
                        "price": 12
                    }
                ]
            },
            {
                "id": "887c9219-f68e-4ad9-9e5e-eac1389d50ae",
                "weekday": "TUESDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "9aa417a3-5e57-4f39-8cf8-03dcf4e0f2d3",
                        "priceType": "ADULT",
                        "price": 12
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
                        "price": 12
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
                        "price": 12
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
                        "price": 12
                    }
                ]
            },
            {
                "id": "12613bc0-3be1-4975-8631-f553f545c01f",
                "weekday": "SATURDAY",
                "openingTime": "08:00:00",
                "closingTime": "20:00:00",
                "prices": [
                    {
                        "id": "10eee2f8-b113-407f-b33a-b877e6aa38ee",
                        "priceType": "ADULT",
                        "price": 12
                    }
                ]
            },
            {
                "id": "428f3549-74da-4f1a-a5e4-2b1cca39d4da",
                "weekday": "SUNDAY",
                "openingTime": "08:00:00",
                "closingTime": "20:00:00",
                "prices": [
                    {
                        "id": "4581568b-8fec-4bdb-a363-9aa64ba5c104",
                        "priceType": "ADULT",
                        "price": 12
                    }
                ]
            }
        ],
        "phone": "+358 44 249 3834",
        "webPage": "https://www.flousauna.fi/",
        "info": "Avoinna Rosendahlin laiturin kupeessa avantosaunana 10.11.2024-15.4.2025. Kesällä Tampereen keskustassa.\n\nPikkupurtavaa ja keittoa arkisin, viikonloppuisin lisänä aamiainen. Voit piipahtaa kahville tai drinkille ohikulkumatkalla. Voit myös vuokrata pyyhkeen. Parkeeraus: \n    Jalkasaarentien lopussa, tästä noin n.250 metrin kävely alukseen. Kulku lauttaan Rosendahlin laiturilta.",
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
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "ea36ecff-8a2b-4b15-871d-509e80f4fc3e",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "e5e5b50d-1183-4738-bd19-ba5ec895572f",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "025cb419-f225-4743-9fb3-5e593cfb7232",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "a98ee685-0002-4edd-b3bb-012039c201ef",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "60f155e2-d0a4-4c41-8b86-1e4907175c80",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "f06dca0a-1e09-47c1-8311-aef5f1e2d925",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "fbdf2943-ce20-4e14-85c1-cc8a9eed222c",
                "weekday": "TUESDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "f249d368-1c52-42a1-a7d3-ba76984fb0e5",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "088302a5-2206-471e-8f92-4cdbeb286876",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "a7249ea3-abac-4bb1-b413-55d39147fa0f",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "fa218c47-3a4c-4cc7-af44-3caa9648c751",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "30ec5e03-a0c9-4876-b1e4-96ab2dbda568",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "406d7af9-ebe3-429c-8861-ab6f1e2eb052",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "18047c83-65f1-4161-b8db-b76b88cd265a",
                "weekday": "WEDNESDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "4a93a2bb-f923-488a-b1fa-fe019241a875",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "391e3c2d-a29e-4cfe-97bd-7a174a3c94a1",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "4d08295f-0a73-4542-9b8c-118d5e17681a",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "ef4cd726-e0f6-4fd5-92b4-f29c9372667e",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "44d688bd-2425-411d-b9cf-2bc4f4a45a50",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "bae17b8e-20b2-4151-90f9-e65931583e9e",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "e034198c-ed01-40aa-81ae-7af440c0c876",
                "weekday": "THURSDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "89a699e6-f4e1-436f-a9a5-5c3bb8eeeee3",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "8d704fcc-d5af-4ba0-b917-31eb570e6622",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "ddec7dc9-5986-4b47-a82b-f54ba87613e5",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "2f7bdef0-9bee-49b4-9fc6-a9c409756a14",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "2a8985d8-357f-49b6-bce3-13dfa43b59b9",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "5e66cf48-2191-4346-bb8c-bd77ab2616d5",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "b112e21b-3391-4f93-aa03-e9a9d371de8d",
                "weekday": "FRIDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "68e60ccd-1a57-4445-903c-01a7fb73a75c",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "783469a3-95b9-4850-8689-c184c3b6ba59",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "595f3876-03ab-4a89-bb03-bca9c2f15f43",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "9dde730a-5aff-4d7b-8d21-cc274b22e848",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "5bd86340-5cb0-4440-a7b6-54ec3f4fdf4a",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "614c291f-0fde-45ae-a497-8957ca46e936",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "6aaed8dc-8d18-450d-9db2-c559e146b698",
                "weekday": "SATURDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "74db766f-21f1-48c8-92f8-5c4d36197dcd",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "6bc6d3ff-e8df-44c7-aa85-eab00951bdcf",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "a96a5816-319e-4a60-8dcf-dfb9e7e1cffe",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "427ff564-28f3-455b-9e2c-b8f48ef68869",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "a7fef312-3b96-4ea5-987f-bb8f9dfda1c3",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "71d9d5bc-8494-41c9-a001-1266175084ad",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            },
            {
                "id": "dfa89100-0a4e-4476-974c-88fea7496417",
                "weekday": "SUNDAY",
                "openingTime": "12:00:00",
                "closingTime": "21:30:00",
                "prices": [
                    {
                        "id": "0fe9ad51-914e-4e8b-a111-a11d41da546e",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "36a2148f-91cc-4e56-8ec7-461fed8c051d",
                        "priceType": "CHILD",
                        "price": 4
                    },
                    {
                        "id": "89f53d32-8c44-4116-8a93-83cd59b1488c",
                        "priceType": "CONSRIPT",
                        "price": 9
                    },
                    {
                        "id": "84cb6552-d742-4628-b3fc-ab9a006fe678",
                        "priceType": "PENSIONER",
                        "price": 9
                    },
                    {
                        "id": "e8055d0c-7338-452a-a3a8-890d778eb17d",
                        "priceType": "STUDENT",
                        "price": 9
                    },
                    {
                        "id": "9709026a-ddae-4e50-bfc3-24ed651f8f1b",
                        "priceType": "UNEMPLOYED",
                        "price": 9
                    }
                ]
            }
        ],
        "phone": "+358 40 590 0539",
        "webPage": "https://www.kaukajarvensauna.fi/",
        "info": "Huomioithan liikennemerkit parkkeeramisesta",
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
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "ab19cdf2-1ac8-4116-829e-a5c436650662",
                        "priceType": "ADULT",
                        "price": 10
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
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "bbb93306-9a1e-4600-b79b-3cb228d73af8",
                        "priceType": "ADULT",
                        "price": 10
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
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "daa7e9a0-1bec-4f64-b6e6-74d3d6d66413",
                        "priceType": "ADULT",
                        "price": 10
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
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "c9830246-d50b-465e-9ed5-e8bb9285b70a",
                        "priceType": "ADULT",
                        "price": 10
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
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "6d96a53b-8681-4190-b02a-b7dc8108dd36",
                        "priceType": "ADULT",
                        "price": 10
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
                        "price": 10
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
                        "price": 10
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
        "info": "Asiakkaiden pysäköinti poikkeuksia lukuunottamatta tapahtuu ylhäällä olevalla pysäköintialueella.",
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
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "76337545-0d01-4109-9cb2-4a016d9500d3",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "8906c475-e9f7-4703-8efe-b2aee62316e0",
                        "priceType": "CHILD",
                        "price": 7
                    },
                    {
                        "id": "32c7de4d-5369-4324-88aa-99c58b50cbe4",
                        "priceType": "CONSRIPT",
                        "price": 12.6
                    },
                    {
                        "id": "bf2c3d71-2159-4816-98f1-3b0ff2e5b87e",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "77027c23-c2fd-46a6-94eb-829ce55de8c2",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "bf75802c-7bf8-4a72-8d02-ce6d0edc3297",
                "weekday": "TUESDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "8a0f39a0-5160-42fd-ab23-88534893efc1",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "628f7b13-d801-4807-b300-a73756b29c0e",
                        "priceType": "CHILD",
                        "price": 7
                    },
                    {
                        "id": "445c99c5-959d-424f-b390-71f890fd11b4",
                        "priceType": "CONSRIPT",
                        "price": 12.6
                    },
                    {
                        "id": "bb9cf3eb-ebb6-462e-a270-777eb4718f26",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "aa6df1cf-e46a-4aa8-81f9-f634fd79ff8d",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "bbe880bc-7516-443f-94d1-3a077dc71b41",
                "weekday": "WEDNESDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "08480b35-1301-4dc5-9496-99ac151dd596",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "a374a70c-a4bf-4d16-9a77-a655772a25d7",
                        "priceType": "CHILD",
                        "price": 7
                    },
                    {
                        "id": "3dd591e1-d916-40b1-b708-ae59c9bac8f3",
                        "priceType": "CONSRIPT",
                        "price": 12.6
                    },
                    {
                        "id": "f37c6d0d-942c-44e1-8e03-02a39fb8d63d",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "2b7cadc1-a4ca-4d82-b213-7caa5a26d7b7",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "033924fb-aa4d-47b0-8a8f-e86caf36b48c",
                "weekday": "THURSDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "e1a11792-4d82-487a-96f6-2e8a5253ac19",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "aaec0f6a-63c0-4a70-bce2-782c2e7748b9",
                        "priceType": "CHILD",
                        "price": 7
                    },
                    {
                        "id": "c832b89f-8738-48e5-afcf-a9854111d3f9",
                        "priceType": "CONSRIPT",
                        "price": 12.6
                    },
                    {
                        "id": "6d5447ff-bcad-4e6c-ac90-da02e5acf244",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "65841321-70ad-4203-bf21-50176ae0d152",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "8a506f81-363e-4648-94e4-d71e3c338172",
                "weekday": "FRIDAY",
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "d51e56fd-b314-45d7-90a2-e4f9ba6f3611",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "466f3694-c80c-46de-a41a-da2c6e52147f",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "ffd0930b-9f98-4a06-9d1f-1ddeee1392a4",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "caa49258-6e5d-4ff0-bab2-2b4778430019",
                "weekday": "SATURDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "4e2ce578-a41a-4178-b864-dc855e1e9b6f",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "74b175b6-0c20-4cc5-938c-ac6d675a1992",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "7cdc7997-acd7-4589-b879-2a8967ba62ad",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            },
            {
                "id": "d444b249-6c4f-4e3a-b6af-c1224dcc938f",
                "weekday": "SUNDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:00:00",
                "prices": [
                    {
                        "id": "085c27b2-954a-4d6a-8600-dfe74ea2ef59",
                        "priceType": "ADULT",
                        "price": 14
                    },
                    {
                        "id": "30631536-92e0-4370-98c3-d3d54dd66a58",
                        "priceType": "PENSIONER",
                        "price": 12.6
                    },
                    {
                        "id": "6d867aeb-274d-43ac-bea0-2ca41b7cadae",
                        "priceType": "STUDENT",
                        "price": 12.6
                    }
                ]
            }
        ],
        "phone": "+358 50 5581818",
        "webPage": "https://pereensaarensauna.fi/",
        "info": "Pyyhkeitä ja uima-asuja vuokrattavana tarvittaessa.",
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
                    },
                    {
                        "id": "d51591e3-fa90-4baf-a377-f5f181e560ba",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "07a33576-655b-4ae8-b441-e0731c80d8bc",
                        "priceType": "STUDENT",
                        "price": 7
                    },
                    {
                        "id": "70e5e752-151f-4883-ae4b-a9ed31b1cce9",
                        "priceType": "UNEMPLOYED",
                        "price": 7
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
                    },
                    {
                        "id": "ecc71712-e8ac-430c-a4eb-e3deec182614",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "104c17ef-b71f-4cf3-9716-849623a2d527",
                        "priceType": "STUDENT",
                        "price": 7
                    },
                    {
                        "id": "baaa4d0d-2900-4afd-9baf-7dc5b1f42a32",
                        "priceType": "UNEMPLOYED",
                        "price": 7
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
                    },
                    {
                        "id": "4b0de2af-eab2-482e-bb9a-e9059a69dc80",
                        "priceType": "PENSIONER",
                        "price": 11
                    },
                    {
                        "id": "ad8f0fef-65a6-4427-b757-bc8607196c5a",
                        "priceType": "STUDENT",
                        "price": 11
                    },
                    {
                        "id": "ab5b6cd4-0a54-410d-b6f8-5d6d33d81c24",
                        "priceType": "UNEMPLOYED",
                        "price": 11
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
                    },
                    {
                        "id": "e0429ecb-b6bc-46be-b6ec-80ae5ed7a26c",
                        "priceType": "PENSIONER",
                        "price": 11
                    },
                    {
                        "id": "5ac6e10f-973f-4cdf-805c-1c70c84d62c2",
                        "priceType": "STUDENT",
                        "price": 11
                    },
                    {
                        "id": "0cc6f661-217d-4d38-896e-3d6f12741769",
                        "priceType": "UNEMPLOYED",
                        "price": 11
                    }
                ]
            }
        ],
        "phone": "+358 40 776 5198",
        "webPage": "https://www.rajaportinsauna.fi/",
        "info": "Suomen vanhin yleinen sauna. Ei pulahdusmahdollisuutta. Kahvio.",
        "kiosk": true,
        "restaurant": true
    },
    {
        "id": "e5464683-0de2-46f7-b84b-0ae7aac715b5",
        "name": "Rauhaniemen kansankylpylä",
        "streetAddress": "Rauhaniementie 24",
        "postalCode": "33180",
        "city": "Tampere",
        "openingHours": [
            {
                "id": "85ea1c9f-8459-4e8b-99fe-0d659d79d759",
                "weekday": "MONDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "27c70c4d-d1ed-4712-a8b9-08315c730cb0",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "7714a5e4-f971-40f7-94ba-3ab74a38e4ac",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "1abdcb0a-39ca-422d-a03d-a87c5afd704b",
                "weekday": "TUESDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "7f454eb2-2545-44a0-9f50-835d3724627b",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "72b6f611-a4bd-485f-b4e3-76b8897784bb",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "17497175-019b-40f2-beeb-65fe16c29ff2",
                "weekday": "WEDNESDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "d22f55d2-727d-4871-ad3e-808505666879",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "7b9015ff-b588-448c-b17c-5e716c5e7131",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "c7169333-c7ca-495a-baf6-3d9ea9a09425",
                "weekday": "THURSDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "fd17543d-9b0a-4016-b27c-32061862b9a8",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "1d4ee9b7-c18a-4f81-bd63-6b958f0c3c91",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "fa36c9f8-0bf5-4c88-b80b-93ab4bcd641e",
                "weekday": "FRIDAY",
                "openingTime": "14:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "cfb4e43e-9c6e-43a2-be97-75a685fc6118",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "9841e0eb-678f-4b4c-a2f5-319a1de312c2",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "ea834daa-4627-4de0-8dd4-67a28d1207e2",
                "weekday": "SATURDAY",
                "openingTime": "11:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "bd816c4d-3d95-436a-af4f-900162837130",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "28aa397b-23ec-4d99-8590-f8d7e56c5bb3",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            },
            {
                "id": "31bdb581-1dd9-4d43-bbda-66c5037dbc7e",
                "weekday": "SUNDAY",
                "openingTime": "11:00:00",
                "closingTime": "22:30:00",
                "prices": [
                    {
                        "id": "17978d64-c2fe-4eca-b4c8-9d92b65b3e2e",
                        "priceType": "ADULT",
                        "price": 11
                    },
                    {
                        "id": "c0c8edf9-1919-4db1-9219-9addc9c57ac9",
                        "priceType": "CHILD",
                        "price": 5
                    }
                ]
            }
        ],
        "phone": "+358 50 326 9815",
        "webPage": "https://rauhaniemi.net/",
        "info": "Kaksi saunaa, joista pienemmässä yleensä miedommat löylyt. Makkaranpaisto mahdollisuus sähkögrillissä.",
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
        "info": "Maksu itsepalveluna käteisellä",
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
                        "price": 15
                    }
                ]
            },
            {
                "id": "c91927c4-0b89-4195-9f93-297d05302db9",
                "weekday": "TUESDAY",
                "openingTime": "06:30:00",
                "closingTime": "10:30:00",
                "prices": [
                    {
                        "id": "735b240a-3497-4102-b0d8-a8cc451c1ed4",
                        "priceType": "ADULT",
                        "price": 12
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
                        "price": 15
                    }
                ]
            },
            {
                "id": "67f968de-72ba-4e02-81e7-338bcf295d7c",
                "weekday": "WEDNESDAY",
                "openingTime": "06:30:00",
                "closingTime": "10:30:00",
                "prices": [
                    {
                        "id": "5345c359-ae69-4631-9098-23e9ea6eeaf9",
                        "priceType": "ADULT",
                        "price": 12
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
                        "price": 15
                    }
                ]
            },
            {
                "id": "19ecae8d-8ec5-4f3f-84fe-813d4229f606",
                "weekday": "THURSDAY",
                "openingTime": "06:30:00",
                "closingTime": "10:30:00",
                "prices": [
                    {
                        "id": "3e1dc25d-3ad4-4358-ae15-6ff8545190dd",
                        "priceType": "ADULT",
                        "price": 12
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
                        "price": 15
                    }
                ]
            },
            {
                "id": "c69bd2ed-ee05-4e4c-92cc-475929f897f8",
                "weekday": "FRIDAY",
                "openingTime": "06:30:00",
                "closingTime": "10:30:00",
                "prices": [
                    {
                        "id": "8cb500eb-ee71-4891-b2f0-8c802c53ea10",
                        "priceType": "ADULT",
                        "price": 12
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
                        "price": 15
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
                        "price": 15
                    }
                ]
            },
            {
                "id": "1a91cec3-68ce-47b0-8785-40421d4cee64",
                "weekday": "SUNDAY",
                "openingTime": "15:00:00",
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "2973082a-3d10-4cf0-ad7e-2edc871f81bd",
                        "priceType": "ADULT",
                        "price": 15
                    }
                ]
            }
        ],
        "phone": "+358 50 5170559",
        "webPage": "https://www.saunaravintolakuuma.fi",
        "info": "Pyyhkeitä, uikkareita ja saunatossuja vuokrattavana",
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
            {
                "id": "a61f467c-2e49-43a0-a195-a3f6470c006c",
                "weekday": "MONDAY",
                "openingTime": "16:00:00",
                "closingTime": "20:00:00",
                "prices": [
                    {
                        "id": "c091069a-34ff-41ce-97db-4955242b60b8",
                        "priceType": "ADULT",
                        "price": 10
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
                "openingTime": "16:00:00",
                "closingTime": "20:00:00",
                "prices": [
                    {
                        "id": "06f4ec0a-ab34-4b55-a46e-a9eb3b5faea1",
                        "priceType": "ADULT",
                        "price": 10
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
                "openingTime": "16:00:00",
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "77e34dfa-2c1c-4f7b-9d2f-01d0d8613ec0",
                        "priceType": "ADULT",
                        "price": 10
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
                "openingTime": "14:00:00",
                "closingTime": "18:00:00",
                "prices": [
                    {
                        "id": "b155a4dd-ba09-4fbc-8e0c-6009f31b4162",
                        "priceType": "ADULT",
                        "price": 10
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
            },
            {
                "id": "dd96f997-490a-496b-bc63-f57f4690cb81",
                "weekday": "SUNDAY",
                "openingTime": "15:00:00",
                "closingTime": "19:00:00",
                "prices": [
                    {
                        "id": "ec87b7d2-ef98-414a-a57a-8f5c69f7b63a",
                        "priceType": "ADULT",
                        "price": 10
                    },
                    {
                        "id": "66936443-9183-4d0f-b96c-4009fa741b91",
                        "priceType": "CHILD",
                        "price": 5
                    },
                    {
                        "id": "d62d4557-6a5a-469a-a8a4-da8013094ff5",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "997805ea-e9a2-4393-a567-c4768e7fc198",
                        "priceType": "STUDENT",
                        "price": 7
                    }
                ]
            }
        ],
        "phone": null,
        "webPage": "https://lielahdenkipina.fi/suomensaarensauna/",
        "info": "Saunalle tulee vain järvivesi, joka on hyvä huomioida ottamalla mukaan vettä juotavaksi. Kahvio.",
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
                "openingTime": "16:00:00",
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
                "openingTime": "16:00:00",
                "closingTime": "22:00:00",
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
                "openingTime": "16:00:00",
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
                "openingTime": "14:00:00",
                "closingTime": "22:00:00",
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
                "openingTime": "14:00:00",
                "closingTime": "22:00:00",
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
        "info": "Maksu: itsepalvelu käteisellä tai MobilePaylla",
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
                "id": "911a7d7f-d84e-426c-949c-dd8ac575ac5f",
                "weekday": "TUESDAY",
                "openingTime": "16:15:00",
                "closingTime": "20:45:00",
                "prices": [
                    {
                        "id": "fa0d4f4e-5531-4365-abb9-e5f199a70186",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "77f4c6ad-eb57-4d38-9a7b-e4796d28aeef",
                        "priceType": "CHILD",
                        "price": 5
                    },
                    {
                        "id": "d2fe6169-0f12-4637-9e7f-442e1bb13789",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "dd2888eb-10b5-4e3e-a5ee-0adc2474596c",
                        "priceType": "STUDENT",
                        "price": 7
                    },
                    {
                        "id": "b5eaf187-3f3e-4a8e-92de-64a89fd07d56",
                        "priceType": "UNEMPLOYED",
                        "price": 7
                    }
                ]
            },
            {
                "id": "1204fbaf-c64a-4420-bac4-42af1622a79b",
                "weekday": "WEDNESDAY",
                "openingTime": "16:15:00",
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
                "openingTime": "16:15:00",
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
                "id": "01055bbc-694d-4458-8554-82361232a67a",
                "weekday": "FRIDAY",
                "openingTime": "16:15:00",
                "closingTime": "20:45:00",
                "prices": [
                    {
                        "id": "4f5da587-217d-4de7-8f43-e036c09c942c",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "f1d6d27f-f06f-42da-bebf-0ec3074959ad",
                        "priceType": "CHILD",
                        "price": 5
                    },
                    {
                        "id": "0001e13f-9263-4e0f-97dc-a1867b2d1732",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "cb433ab9-891a-476f-8259-372860618ee0",
                        "priceType": "STUDENT",
                        "price": 7
                    },
                    {
                        "id": "a8505d80-57c1-4544-9016-77c2305d820a",
                        "priceType": "UNEMPLOYED",
                        "price": 7
                    }
                ]
            },
            {
                "id": "4a0c4d09-f0d1-4dc0-bacd-0cc9978e7fa6",
                "weekday": "SATURDAY",
                "openingTime": "13:15:00",
                "closingTime": "17:45:00",
                "prices": [
                    {
                        "id": "f8c23c5f-d697-4980-993c-c95839d87e26",
                        "priceType": "ADULT",
                        "price": 8
                    },
                    {
                        "id": "380c9b1f-3ab4-4efb-be5a-b03d00857fdb",
                        "priceType": "CHILD",
                        "price": 5
                    },
                    {
                        "id": "09cfc39d-34a0-4f0f-9268-a802de33cad5",
                        "priceType": "PENSIONER",
                        "price": 7
                    },
                    {
                        "id": "e6749775-45c6-4810-a4b6-850143e37c46",
                        "priceType": "STUDENT",
                        "price": 7
                    },
                    {
                        "id": "725b67d7-25bf-4310-860e-df65085cbcb1",
                        "priceType": "UNEMPLOYED",
                        "price": 7
                    }
                ]
            },
            {
                "id": "c3b54d5c-9f10-497b-b90f-d3eb92bb7d62",
                "weekday": "SUNDAY",
                "openingTime": "13:15:00",
                "closingTime": "20:15:00",
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
        "info": "Uusi sauna aloittaa kolmantena saunana Suolijärvellä jouluaattona 2024. Saunavuoro varattava etukäteen. Saunojen aukioloaika on edelleen jaettu tunnin vuoroihin, jotka näet varaussivustolla.",
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
                        "price": 6
                    },
                    {
                        "id": "e4ee8a73-83c4-41ef-baa5-6ad24780a25c",
                        "priceType": "CHILD",
                        "price": 3
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
                        "price": 6
                    },
                    {
                        "id": "975760e1-dd29-4f52-8b40-175528e08c86",
                        "priceType": "CHILD",
                        "price": 3
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
                        "price": 6
                    },
                    {
                        "id": "fbbdbf39-1cd8-4893-b03e-adc89160d434",
                        "priceType": "CHILD",
                        "price": 3
                    }
                ]
            },
            {
                "id": "9967b0e0-3f88-4324-b45c-92149927be43",
                "weekday": "FRIDAY",
                "openingTime": "17:30:00",
                "closingTime": "21:00:00",
                "prices": [
                    {
                        "id": "fcd47be8-3ea0-44d1-84b1-359f709efc8f",
                        "priceType": "ADULT",
                        "price": 6
                    },
                    {
                        "id": "b830af59-8e9a-4b8e-a4c1-17ee2179ebf3",
                        "priceType": "CHILD",
                        "price": 3
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
                        "price": 6
                    },
                    {
                        "id": "2abeac5e-e5db-47a0-a6e1-96aedf3f2d3e",
                        "priceType": "CHILD",
                        "price": 3
                    }
                ]
            },
            {
                "id": "a4299e69-fc53-4f1d-aa60-73487e4e4a0f",
                "weekday": "SUNDAY",
                "openingTime": "17:30:00",
                "closingTime": "18:00:00",
                "prices": [
                    {
                        "id": "b95ea363-56d6-4629-a075-ab3c225ffc33",
                        "priceType": "ADULT",
                        "price": 6
                    },
                    {
                        "id": "1a436b72-565a-417e-958c-ddd01fea0475",
                        "priceType": "CHILD",
                        "price": 3
                    }
                ]
            }
        ],
        "phone": "",
        "webPage": "https://sites.google.com/view/tohlopinuimaseura",
        "info": "Ei suihkuja. Vaatteiden vaihto uimakopissa.",
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
                "openingTime": "14:00:00",
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
                "openingTime": "14:00:00",
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
        "info": "",
        "kiosk": true,
        "restaurant": false
    }
]
