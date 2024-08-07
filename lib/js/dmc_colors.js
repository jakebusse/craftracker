const colors = [
    {
      "Number": 1,
      "Name": "White Tin",
      "Hex": "#E3E3E6",
      "Red": 227,
      "Green": 227,
      "Blue": 230
    },
    {
      "Number": 2,
      "Name": "Tin",
      "Hex": "#D7D7D8",
      "Red": 215,
      "Green": 215,
      "Blue": 216
    },
    {
      "Number": 3,
      "Name": "Tin Medium",
      "Hex": "#B8B8BB",
      "Red": 184,
      "Green": 184,
      "Blue": 187
    },
    {
      "Number": 4,
      "Name": "Tin Dark",
      "Hex": "#AEAEB1",
      "Red": 174,
      "Green": 174,
      "Blue": 177
    },
    {
      "Number": 5,
      "Name": "Driftwood Light",
      "Hex": "#E3CCBE",
      "Red": 227,
      "Green": 204,
      "Blue": 190
    },
    {
      "Number": 6,
      "Name": "Driftwood Medium Light",
      "Hex": "#DCC6B8",
      "Red": 220,
      "Green": 198,
      "Blue": 184
    },
    {
      "Number": 7,
      "Name": "Driftwood",
      "Hex": "#8F7B6E",
      "Red": 143,
      "Green": 123,
      "Blue": 110
    },
    {
      "Number": 8,
      "Name": "Driftwood Dark",
      "Hex": "#6A5046",
      "Red": 106,
      "Green": 80,
      "Blue": 70
    },
    {
      "Number": 9,
      "Name": "Cocoa Very Dark",
      "Hex": "#552014",
      "Red": 85,
      "Green": 32,
      "Blue": 14
    },
    {
      "Number": 10,
      "Name": "Tender Green Very Light",
      "Hex": "#EDFED9",
      "Red": 237,
      "Green": 254,
      "Blue": 217
    },
    {
      "Number": 11,
      "Name": "Tender Green Light",
      "Hex": "#E2EDB5",
      "Red": 226,
      "Green": 237,
      "Blue": 181
    },
    {
      "Number": 12,
      "Name": "Tender Green",
      "Hex": "#CDD99A",
      "Red": 205,
      "Green": 217,
      "Blue": 154
    },
    {
      "Number": 13,
      "Name": "Nile Green Medium Light",
      "Hex": "#BFF6E0",
      "Red": 191,
      "Green": 246,
      "Blue": 224
    },
    {
      "Number": 14,
      "Name": "Apple Green Pale",
      "Hex": "#D0FBB2",
      "Red": 208,
      "Green": 251,
      "Blue": 178
    },
    {
      "Number": 15,
      "Name": "Apple Green",
      "Hex": "#D1EDA4",
      "Red": 209,
      "Green": 237,
      "Blue": 164
    },
    {
      "Number": 16,
      "Name": "Chartreuse Light",
      "Hex": "#C9C258",
      "Red": 201,
      "Green": 194,
      "Blue": 88
    },
    {
      "Number": 17,
      "Name": "Yellow Plum Light",
      "Hex": "#E5E272",
      "Red": 229,
      "Green": 226,
      "Blue": 114
    },
    {
      "Number": 18,
      "Name": "Yellow Plum",
      "Hex": "#D9D56D",
      "Red": 217,
      "Green": 213,
      "Blue": 109
    },
    {
      "Number": 19,
      "Name": "Autumn Gold medium Light",
      "Hex": "#F7C95F",
      "Red": 247,
      "Green": 201,
      "Blue": 95
    },
    {
      "Number": 20,
      "Name": "Shrimp",
      "Hex": "#F7AF93",
      "Red": 247,
      "Green": 175,
      "Blue": 147
    },
    {
      "Number": 21,
      "Name": "Alizarin Light",
      "Hex": "#D79982",
      "Red": 215,
      "Green": 153,
      "Blue": 130
    },
    {
      "Number": 22,
      "Name": "Alizarin",
      "Hex": "#BC604E",
      "Red": 188,
      "Green": 96,
      "Blue": 78
    },
    {
      "Number": 23,
      "Name": "Apple Blossom",
      "Hex": "#EDE2ED",
      "Red": 237,
      "Green": 226,
      "Blue": 237
    },
    {
      "Number": 24,
      "Name": "White Lavender",
      "Hex": "#E0D7EE",
      "Red": 224,
      "Green": 215,
      "Blue": 238
    },
    {
      "Number": 25,
      "Name": "Lavender Ultra Light",
      "Hex": "#DAD2E9",
      "Red": 218,
      "Green": 210,
      "Blue": 233
    },
    {
      "Number": 26,
      "Name": "Lavender Pale",
      "Hex": "#D7CAE6",
      "Red": 215,
      "Green": 202,
      "Blue": 230
    },
    {
      "Number": 27,
      "Name": "White Violet",
      "Hex": "#F0EEF9",
      "Red": 240,
      "Green": 238,
      "Blue": 249
    },
    {
      "Number": 28,
      "Name": "Eggplant Medium Light",
      "Hex": "#9086A9",
      "Red": 144,
      "Green": 134,
      "Blue": 169
    },
    {
      "Number": 29,
      "Name": "Eggplant",
      "Hex": "#674076",
      "Red": 103,
      "Green": 64,
      "Blue": 118
    },
    {
      "Number": 30,
      "Name": "Blueberry Medium Light",
      "Hex": "#7D77A5",
      "Red": 125,
      "Green": 119,
      "Blue": 165
    },
    {
      "Number": 31,
      "Name": "Blueberry",
      "Hex": "#50518D",
      "Red": 80,
      "Green": 81,
      "Blue": 141
    },
    {
      "Number": 32,
      "Name": "Blueberry Dark",
      "Hex": "#4D2E8A",
      "Red": 77,
      "Green": 46,
      "Blue": 138
    },
    {
      "Number": 33,
      "Name": "Fuschia",
      "Hex": "#9C599C",
      "Red": 156,
      "Green": 89,
      "Blue": 158
    },
    {
      "Number": 34,
      "Name": "Fuschia Dark",
      "Hex": "#7D3064",
      "Red": 125,
      "Green": 48,
      "Blue": 100
    },
    {
      "Number": 35,
      "Name": "Fuschia Very Dark",
      "Hex": "#46052D",
      "Red": 70,
      "Green": 5,
      "Blue": 45
    },
    {
      "Number": 150,
      "Name": "Dusty Rose Ultra Very Dark",
      "Hex": "#AB0249",
      "Red": 171,
      "Green": 2,
      "Blue": 73
    },
    {
      "Number": 151,
      "Name": "Dusty Rose Very Light",
      "Hex": "#F0CED4",
      "Red": 240,
      "Green": 206,
      "Blue": 212
    },
    {
      "Number": 152,
      "Name": "Shell Pink Medium Light",
      "Hex": "#E2A099",
      "Red": 226,
      "Green": 160,
      "Blue": 153
    },
    {
      "Number": 153,
      "Name": "Violet Very Light",
      "Hex": "#E6CCD9",
      "Red": 230,
      "Green": 204,
      "Blue": 217
    },
    {
      "Number": 154,
      "Name": "Grape Very Dark",
      "Hex": "#572433",
      "Red": 87,
      "Green": 36,
      "Blue": 51
    },
    {
      "Number": 155,
      "Name": "Blue Violet Medium Dark",
      "Hex": "#9891B6",
      "Red": 152,
      "Green": 145,
      "Blue": 182
    },
    {
      "Number": 156,
      "Name": "Blue Violet Medium Light",
      "Hex": "#A3AED1",
      "Red": 163,
      "Green": 174,
      "Blue": 209
    },
    {
      "Number": 157,
      "Name": "Cornflower Blue Very Light",
      "Hex": "#BBC3D9",
      "Red": 187,
      "Green": 195,
      "Blue": 217
    },
    {
      "Number": 158,
      "Name": "Cornflower Blue Very Dark",
      "Hex": "#4C526E",
      "Red": 76,
      "Green": 82,
      "Blue": 110
    },
    {
      "Number": 159,
      "Name": "Blue Gray Light",
      "Hex": "#C7CAD7",
      "Red": 199,
      "Green": 202,
      "Blue": 215
    },
    {
      "Number": 160,
      "Name": "Blue Gray Medium",
      "Hex": "#999FB7",
      "Red": 153,
      "Green": 159,
      "Blue": 183
    },
    {
      "Number": 161,
      "Name": "Blue Gray",
      "Hex": "#7880A4",
      "Red": 120,
      "Green": 128,
      "Blue": 164
    },
    {
      "Number": 162,
      "Name": "Blue Ultra Very Light",
      "Hex": "#DBECF5",
      "Red": 219,
      "Green": 236,
      "Blue": 245
    },
    {
      "Number": 163,
      "Name": "Celadon Green Medium",
      "Hex": "#4D8361",
      "Red": 77,
      "Green": 131,
      "Blue": 97
    },
    {
      "Number": 164,
      "Name": "Forest Green Light",
      "Hex": "#C8D8B8",
      "Red": 200,
      "Green": 216,
      "Blue": 184
    },
    {
      "Number": 165,
      "Name": "Moss Green Very Light",
      "Hex": "#EFF4A4",
      "Red": 239,
      "Green": 244,
      "Blue": 164
    },
    {
      "Number": 166,
      "Name": "Moss Green Medium Light",
      "Hex": "#C0C840",
      "Red": 192,
      "Green": 200,
      "Blue": 64
    },
    {
      "Number": 167,
      "Name": "Yellow Beige Very Dark",
      "Hex": "#A77C49",
      "Red": 167,
      "Green": 124,
      "Blue": 73
    },
    {
      "Number": 168,
      "Name": "Pewter Very Light",
      "Hex": "#D1D1D1",
      "Red": 209,
      "Green": 209,
      "Blue": 209
    },
    {
      "Number": 169,
      "Name": "Pewter Light",
      "Hex": "#848484",
      "Red": 132,
      "Green": 132,
      "Blue": 132
    },
    {
      "Number": 208,
      "Name": "Lavender Very Dark",
      "Hex": "#835B8B",
      "Red": 131,
      "Green": 91,
      "Blue": 139
    },
    {
      "Number": 209,
      "Name": "Lavender Dark",
      "Hex": "#A37BA7",
      "Red": 163,
      "Green": 123,
      "Blue": 167
    },
    {
      "Number": 210,
      "Name": "Lavender Medium",
      "Hex": "#D29FC3",
      "Red": 195,
      "Green": 159,
      "Blue": 195
    },
    {
      "Number": 211,
      "Name": "Lavender Light",
      "Hex": "#E3CBE3",
      "Red": 227,
      "Green": 203,
      "Blue": 227
    },
    {
      "Number": 221,
      "Name": "Shell Pink Very Dark",
      "Hex": "#883E43",
      "Red": 136,
      "Green": 62,
      "Blue": 67
    },
    {
      "Number": 223,
      "Name": "Shell Pink Light",
      "Hex": "#CC847C",
      "Red": 204,
      "Green": 132,
      "Blue": 124
    },
    {
      "Number": 224,
      "Name": "Shell Pink Very Light",
      "Hex": "#EBB7AF",
      "Red": 235,
      "Green": 183,
      "Blue": 175
    },
    {
      "Number": 225,
      "Name": "Shell Pink Ultra Very Light",
      "Hex": "#FFDFD7",
      "Red": 255,
      "Green": 223,
      "Blue": 213
    },
    {
      "Number": 300,
      "Name": "Mahogany Very Dark",
      "Hex": "#6F2F00",
      "Red": 111,
      "Green": 47,
      "Blue": 0
    },
    {
      "Number": 301,
      "Name": "Mahogany Medium",
      "Hex": "#B35F2B",
      "Red": 179,
      "Green": 95,
      "Blue": 43
    },
    {
      "Number": 304,
      "Name": "Red Medium",
      "Hex": "#B71F33",
      "Red": 183,
      "Green": 31,
      "Blue": 51
    },
    {
      "Number": 307,
      "Name": "Lemon",
      "Hex": "#FDED54",
      "Red": 253,
      "Green": 237,
      "Blue": 84
    },
    {
      "Number": 309,
      "Name": "Rose Dark",
      "Hex": "#BA4A4A",
      "Red": 86,
      "Green": 74,
      "Blue": 74
    },
    {
      "Number": 310,
      "Name": "Black",
      "Hex": "#000000",
      "Red": 0,
      "Green": 0,
      "Blue": 0
    },
    {
      "Number": 311,
      "Name": "Wedgewood Ultra Very Dark",
      "Hex": "#1C5066",
      "Red": 28,
      "Green": 80,
      "Blue": 102
    },
    {
      "Number": 312,
      "Name": "Baby Blue Very Dark",
      "Hex": "#35668B",
      "Red": 53,
      "Green": 102,
      "Blue": 139
    },
    {
      "Number": 315,
      "Name": "Antique Mauve Medium Dark",
      "Hex": "#814952",
      "Red": 129,
      "Green": 73,
      "Blue": 82
    },
    {
      "Number": 316,
      "Name": "Antique Mauve Medium",
      "Hex": "#B7737F",
      "Red": 183,
      "Green": 115,
      "Blue": 127
    },
    {
      "Number": 317,
      "Name": "Pewter Gray",
      "Hex": "#6C6C6C",
      "Red": 108,
      "Green": 108,
      "Blue": 108
    },
    {
      "Number": 318,
      "Name": "Steel Gray Light",
      "Hex": "#ABABAB",
      "Red": 171,
      "Green": 171,
      "Blue": 171
    },
    {
      "Number": 319,
      "Name": "Pistachio Grn Very Dark",
      "Hex": "#205F2E",
      "Red": 32,
      "Green": 95,
      "Blue": 46
    },
    {
      "Number": 320,
      "Name": "Pistachio Green Medium",
      "Hex": "#69885A",
      "Red": 105,
      "Green": 136,
      "Blue": 90
    },
    {
      "Number": 321,
      "Name": "Red",
      "Hex": "#C72B3B",
      "Red": 199,
      "Green": 43,
      "Blue": 59
    },
    {
      "Number": 322,
      "Name": "Baby Blue Dark",
      "Hex": "#5A8FB8",
      "Red": 90,
      "Green": 143,
      "Blue": 184
    },
    {
      "Number": 326,
      "Name": "Rose Very Dark",
      "Hex": "#B33B4B",
      "Red": 179,
      "Green": 59,
      "Blue": 75
    },
    {
      "Number": 327,
      "Name": "Violet Dark",
      "Hex": "#633666",
      "Red": 99,
      "Green": 54,
      "Blue": 102
    },
    {
      "Number": 333,
      "Name": "Blue Violet Very Dark",
      "Hex": "#5C5478",
      "Red": 92,
      "Green": 84,
      "Blue": 120
    },
    {
      "Number": 334,
      "Name": "Baby Blue Medium",
      "Hex": "#739FC1",
      "Red": 115,
      "Green": 159,
      "Blue": 193
    },
    {
      "Number": 335,
      "Name": "Rose",
      "Hex": "#EE546E",
      "Red": 238,
      "Green": 84,
      "Blue": 110
    },
    {
      "Number": 336,
      "Name": "Navy Blue",
      "Hex": "#253B73",
      "Red": 37,
      "Green": 59,
      "Blue": 115
    },
    {
      "Number": 340,
      "Name": "Blue Violet Medium",
      "Hex": "#ADA7C7",
      "Red": 173,
      "Green": 167,
      "Blue": 199
    },
    {
      "Number": 341,
      "Name": "Blue Violet Light",
      "Hex": "#B7BFDD",
      "Red": 183,
      "Green": 191,
      "Blue": 221
    },
    {
      "Number": 347,
      "Name": "Salmon Very Dark",
      "Hex": "#BF2D2D",
      "Red": 191,
      "Green": 45,
      "Blue": 45
    },
    {
      "Number": 349,
      "Name": "Coral Dark",
      "Hex": "#D21035",
      "Red": 210,
      "Green": 16,
      "Blue": 53
    },
    {
      "Number": 350,
      "Name": "Coral Medium",
      "Hex": "#E04848",
      "Red": 224,
      "Green": 72,
      "Blue": 72
    },
    {
      "Number": 351,
      "Name": "Coral",
      "Hex": "#E96A67",
      "Red": 233,
      "Green": 106,
      "Blue": 103
    },
    {
      "Number": 352,
      "Name": "Coral Light",
      "Hex": "#FD9C97",
      "Red": 253,
      "Green": 156,
      "Blue": 151
    },
    {
      "Number": 353,
      "Name": "Peach",
      "Hex": "#FED7CC",
      "Red": 254,
      "Green": 215,
      "Blue": 204
    },
    {
      "Number": 355,
      "Name": "Terra Cotta Dark",
      "Hex": "#984436",
      "Red": 152,
      "Green": 68,
      "Blue": 54
    },
    {
      "Number": 356,
      "Name": "Terra Cotta Medium",
      "Hex": "#C56A5B",
      "Red": 197,
      "Green": 106,
      "Blue": 91
    },
    {
      "Number": 367,
      "Name": "Pistachio Green Dark",
      "Hex": "#617A52",
      "Red": 97,
      "Green": 122,
      "Blue": 82
    },
    {
      "Number": 368,
      "Name": "Pistachio Green Light",
      "Hex": "#A6C298",
      "Red": 166,
      "Green": 194,
      "Blue": 152
    },
    {
      "Number": 369,
      "Name": "Pistachio Green Very Light",
      "Hex": "#D7EDCC",
      "Red": 215,
      "Green": 237,
      "Blue": 204
    },
    {
      "Number": 370,
      "Name": "Mustard Medium",
      "Hex": "#B89D64",
      "Red": 184,
      "Green": 157,
      "Blue": 100
    },
    {
      "Number": 371,
      "Name": "Mustard",
      "Hex": "#BFA671",
      "Red": 191,
      "Green": 166,
      "Blue": 113
    },
    {
      "Number": 372,
      "Name": "Mustard Light",
      "Hex": "#CCB784",
      "Red": 204,
      "Green": 183,
      "Blue": 132
    },
    {
      "Number": 400,
      "Name": "Mahogany Dark",
      "Hex": "#8F430F",
      "Red": 143,
      "Green": 67,
      "Blue": 15
    },
    {
      "Number": 402,
      "Name": "Mahogany Very Light",
      "Hex": "#F7A777",
      "Red": 247,
      "Green": 167,
      "Blue": 119
    },
    {
      "Number": 407,
      "Name": "Desert Sand Medium",
      "Hex": "#BB8161",
      "Red": 187,
      "Green": 129,
      "Blue": 97
    },
    {
      "Number": 413,
      "Name": "Pewter Gray Dark",
      "Hex": "#565656",
      "Red": 86,
      "Green": 86,
      "Blue": 86
    },
    {
      "Number": 414,
      "Name": "Steel Gray Dark",
      "Hex": "#8C8C8C",
      "Red": 140,
      "Green": 140,
      "Blue": 140
    },
    {
      "Number": 415,
      "Name": "Pearl Gray",
      "Hex": "#D3D3D6",
      "Red": 211,
      "Green": 211,
      "Blue": 214
    },
    {
      "Number": 420,
      "Name": "Hazelnut Brown Dark",
      "Hex": "#A07042",
      "Red": 160,
      "Green": 112,
      "Blue": 66
    },
    {
      "Number": 422,
      "Name": "Hazelnut Brown Light",
      "Hex": "#C69F7B",
      "Red": 198,
      "Green": 159,
      "Blue": 123
    },
    {
      "Number": 433,
      "Name": "Brown Medium",
      "Hex": "#7A451F",
      "Red": 122,
      "Green": 69,
      "Blue": 31
    },
    {
      "Number": 434,
      "Name": "Brown Light",
      "Hex": "#985E33",
      "Red": 152,
      "Green": 94,
      "Blue": 51
    },
    {
      "Number": 435,
      "Name": "Brown Very Light",
      "Hex": "#B87748",
      "Red": 184,
      "Green": 119,
      "Blue": 72
    },
    {
      "Number": 436,
      "Name": "Tan",
      "Hex": "#CB9051",
      "Red": 203,
      "Green": 144,
      "Blue": 81
    },
    {
      "Number": 437,
      "Name": "Tan Light",
      "Hex": "#E4BB8E",
      "Red": 228,
      "Green": 187,
      "Blue": 142
    },
    {
      "Number": 444,
      "Name": "Lemon Dark",
      "Hex": "#FFD600",
      "Red": 255,
      "Green": 214,
      "Blue": 0
    },
    {
      "Number": 445,
      "Name": "Lemon Light",
      "Hex": "#FFFB8B",
      "Red": 255,
      "Green": 251,
      "Blue": 139
    },
    {
      "Number": 451,
      "Name": "Shell Gray Dark",
      "Hex": "#917B73",
      "Red": 145,
      "Green": 123,
      "Blue": 115
    },
    {
      "Number": 452,
      "Name": "Shell Gray Medium",
      "Hex": "#C0B3AE",
      "Red": 192,
      "Green": 179,
      "Blue": 174
    },
    {
      "Number": 453,
      "Name": "Shell Gray Light",
      "Hex": "#D7CECB",
      "Red": 215,
      "Green": 206,
      "Blue": 203
    },
    {
      "Number": 469,
      "Name": "Avocado Green",
      "Hex": "#72843C",
      "Red": 114,
      "Green": 132,
      "Blue": 60
    },
    {
      "Number": 470,
      "Name": "Avocado Grn Light",
      "Hex": "#94AB4F",
      "Red": 148,
      "Green": 171,
      "Blue": 79
    },
    {
      "Number": 471,
      "Name": "Avocado Grn Very Light",
      "Hex": "#AEBF79",
      "Red": 174,
      "Green": 191,
      "Blue": 121
    },
    {
      "Number": 472,
      "Name": "Avocado Green Ultra Light",
      "Hex": "#D8E498",
      "Red": 216,
      "Green": 228,
      "Blue": 152
    },
    {
      "Number": 498,
      "Name": "Red Dark",
      "Hex": "#A7132B",
      "Red": 167,
      "Green": 19,
      "Blue": 43
    },
    {
      "Number": 500,
      "Name": "Blue Green Very Dark",
      "Hex": "#044D33",
      "Red": 4,
      "Green": 77,
      "Blue": 51
    },
    {
      "Number": 501,
      "Name": "Blue Green Dark",
      "Hex": "#396F52",
      "Red": 57,
      "Green": 111,
      "Blue": 82
    },
    {
      "Number": 502,
      "Name": "Blue Green",
      "Hex": "#5B9071",
      "Red": 91,
      "Green": 144,
      "Blue": 113
    },
    {
      "Number": 503,
      "Name": "Blue Green Medium",
      "Hex": "#7BAC94",
      "Red": 123,
      "Green": 172,
      "Blue": 148
    },
    {
      "Number": 504,
      "Name": "Blue Green Very Light",
      "Hex": "#C4DECC",
      "Red": 196,
      "Green": 222,
      "Blue": 204
    },
    {
      "Number": 505,
      "Name": "Jade Green",
      "Hex": "#338362",
      "Red": 51,
      "Green": 131,
      "Blue": 98
    },
    {
      "Number": 517,
      "Name": "Wedgewood Dark",
      "Hex": "#3B768F",
      "Red": 59,
      "Green": 118,
      "Blue": 143
    },
    {
      "Number": 518,
      "Name": "Wedgewood Light",
      "Hex": "#4F93A7",
      "Red": 79,
      "Green": 147,
      "Blue": 167
    },
    {
      "Number": 519,
      "Name": "Sky Blue",
      "Hex": "#7EB1C8",
      "Red": 126,
      "Green": 177,
      "Blue": 200
    },
    {
      "Number": 520,
      "Name": "Fern Green Dark",
      "Hex": "#666D4F",
      "Red": 102,
      "Green": 109,
      "Blue": 79
    },
    {
      "Number": 522,
      "Name": "Fern Green",
      "Hex": "#969E7E",
      "Red": 150,
      "Green": 158,
      "Blue": 126
    },
    {
      "Number": 523,
      "Name": "Fern Green Light",
      "Hex": "#ABB197",
      "Red": 171,
      "Green": 177,
      "Blue": 151
    },
    {
      "Number": 524,
      "Name": "Fern Green Very Light",
      "Hex": "#C4CDAC",
      "Red": 196,
      "Green": 205,
      "Blue": 172
    },
    {
      "Number": 535,
      "Name": "Ash Gray Very Light",
      "Hex": "#636458",
      "Red": 99,
      "Green": 100,
      "Blue": 88
    },
    {
      "Number": 543,
      "Name": "Beige Brown Ultra Very Light",
      "Hex": "#F2E3CE",
      "Red": 242,
      "Green": 227,
      "Blue": 206
    },
    {
      "Number": 550,
      "Name": "Violet Very Dark",
      "Hex": "#5C184E",
      "Red": 92,
      "Green": 24,
      "Blue": 78
    },
    {
      "Number": 552,
      "Name": "Violet Medium",
      "Hex": "#803A6B",
      "Red": 128,
      "Green": 58,
      "Blue": 107
    },
    {
      "Number": 553,
      "Name": "Violet",
      "Hex": "#A3638B",
      "Red": 163,
      "Green": 99,
      "Blue": 139
    },
    {
      "Number": 554,
      "Name": "Violet Light",
      "Hex": "#DBB3CB",
      "Red": 219,
      "Green": 179,
      "Blue": 203
    },
    {
      "Number": 561,
      "Name": "Celadon Green VD",
      "Hex": "#2C6A45",
      "Red": 44,
      "Green": 106,
      "Blue": 69
    },
    {
      "Number": 562,
      "Name": "Jade Medium",
      "Hex": "#53976A",
      "Red": 83,
      "Green": 151,
      "Blue": 106
    },
    {
      "Number": 563,
      "Name": "Jade Light",
      "Hex": "#8FC098",
      "Red": 143,
      "Green": 192,
      "Blue": 152
    },
    {
      "Number": 564,
      "Name": "Jade Very Light",
      "Hex": "#A7CDAF",
      "Red": 167,
      "Green": 205,
      "Blue": 175
    },
    {
      "Number": 580,
      "Name": "Moss Green Dark",
      "Hex": "#888D33",
      "Red": 136,
      "Green": 141,
      "Blue": 51
    },
    {
      "Number": 581,
      "Name": "Moss Green",
      "Hex": "#A7AE38",
      "Red": 167,
      "Green": 174,
      "Blue": 56
    },
    {
      "Number": 597,
      "Name": "Turquoise",
      "Hex": "#5BA3B3",
      "Red": 91,
      "Green": 163,
      "Blue": 179
    },
    {
      "Number": 598,
      "Name": "Turquoise Light",
      "Hex": "#90C3CC",
      "Red": 144,
      "Green": 195,
      "Blue": 204
    },
    {
      "Number": 600,
      "Name": "Cranberry Very Dark",
      "Hex": "#CD2F63",
      "Red": 205,
      "Green": 47,
      "Blue": 99
    },
    {
      "Number": 601,
      "Name": "Cranberry Dark",
      "Hex": "#D1286A",
      "Red": 209,
      "Green": 40,
      "Blue": 106
    },
    {
      "Number": 602,
      "Name": "Cranberry Medium",
      "Hex": "#E24874",
      "Red": 226,
      "Green": 72,
      "Blue": 116
    },
    {
      "Number": 603,
      "Name": "Cranberry",
      "Hex": "#FFA4BE",
      "Red": 255,
      "Green": 164,
      "Blue": 190
    },
    {
      "Number": 604,
      "Name": "Cranberry Light",
      "Hex": "#FFB0BE",
      "Red": 255,
      "Green": 176,
      "Blue": 190
    },
    {
      "Number": 605,
      "Name": "Cranberry Very Light",
      "Hex": "#FFC0CD",
      "Red": 255,
      "Green": 192,
      "Blue": 205
    },
    {
      "Number": 606,
      "Name": "Orange Red Bright",
      "Hex": "#FA3203",
      "Red": 250,
      "Green": 50,
      "Blue": 3
    },
    {
      "Number": 608,
      "Name": "Burnt Orange Bright",
      "Hex": "#FD5D35",
      "Red": 253,
      "Green": 93,
      "Blue": 53
    },
    {
      "Number": 610,
      "Name": "Drab Brown Dark",
      "Hex": "#796047",
      "Red": 121,
      "Green": 96,
      "Blue": 71
    },
    {
      "Number": 611,
      "Name": "Drab Brown",
      "Hex": "#967656",
      "Red": 150,
      "Green": 118,
      "Blue": 86
    },
    {
      "Number": 612,
      "Name": "Drab Brown Light",
      "Hex": "#BC9A78",
      "Red": 188,
      "Green": 154,
      "Blue": 120
    },
    {
      "Number": 613,
      "Name": "Drab Brown Very Light",
      "Hex": "#DCC4AA",
      "Red": 220,
      "Green": 196,
      "Blue": 170
    },
    {
      "Number": 632,
      "Name": "Desert Sand Ultra Very Dark",
      "Hex": "#875539",
      "Red": 135,
      "Green": 85,
      "Blue": 57
    },
    {
      "Number": 640,
      "Name": "Beige Gray Very Dark",
      "Hex": "#857B61",
      "Red": 133,
      "Green": 123,
      "Blue": 97
    },
    {
      "Number": 642,
      "Name": "Beige Gray Dark",
      "Hex": "#A49878",
      "Red": 164,
      "Green": 152,
      "Blue": 120
    },
    {
      "Number": 644,
      "Name": "Beige Gray Medium",
      "Hex": "#DDD8CB",
      "Red": 221,
      "Green": 216,
      "Blue": 203
    },
    {
      "Number": 645,
      "Name": "Beaver Gray Very Dark",
      "Hex": "#6E655C",
      "Red": 110,
      "Green": 101,
      "Blue": 92
    },
    {
      "Number": 646,
      "Name": "Beaver Gray Dark",
      "Hex": "#877D73",
      "Red": 135,
      "Green": 125,
      "Blue": 115
    },
    {
      "Number": 647,
      "Name": "Beaver Gray Medium",
      "Hex": "#B0A69C",
      "Red": 176,
      "Green": 166,
      "Blue": 156
    },
    {
      "Number": 648,
      "Name": "Beaver Gray Light",
      "Hex": "#BCB4AC",
      "Red": 188,
      "Green": 180,
      "Blue": 172
    },
    {
      "Number": 666,
      "Name": "Bright Red",
      "Hex": "#E31D42",
      "Red": 227,
      "Green": 29,
      "Blue": 66
    },
    {
      "Number": 676,
      "Name": "Old Gold Light",
      "Hex": "#E5CE97",
      "Red": 229,
      "Green": 206,
      "Blue": 151
    },
    {
      "Number": 677,
      "Name": "Old Gold Very Light",
      "Hex": "#F5ECCB",
      "Red": 245,
      "Green": 236,
      "Blue": 203
    },
    {
      "Number": 680,
      "Name": "Old Gold Dark",
      "Hex": "#BC8D0E",
      "Red": 188,
      "Green": 141,
      "Blue": 14
    },
    {
      "Number": 699,
      "Name": "Green",
      "Hex": "#056517",
      "Red": 5,
      "Green": 101,
      "Blue": 23
    },
    {
      "Number": 700,
      "Name": "Green Bright",
      "Hex": "#07731B",
      "Red": 7,
      "Green": 115,
      "Blue": 27
    },
    {
      "Number": 701,
      "Name": "Green Light",
      "Hex": "#3F8F29",
      "Red": 63,
      "Green": 143,
      "Blue": 41
    },
    {
      "Number": 702,
      "Name": "Kelly Green",
      "Hex": "#47A72F",
      "Red": 71,
      "Green": 167,
      "Blue": 47
    },
    {
      "Number": 703,
      "Name": "Chartreuse",
      "Hex": "#7BB547",
      "Red": 123,
      "Green": 181,
      "Blue": 71
    },
    {
      "Number": 704,
      "Name": "Chartreuse Bright",
      "Hex": "#9ECF34",
      "Red": 158,
      "Green": 207,
      "Blue": 52
    },
    {
      "Number": 712,
      "Name": "Cream",
      "Hex": "#FFFBEF",
      "Red": 255,
      "Green": 251,
      "Blue": 239
    },
    {
      "Number": 718,
      "Name": "Plum",
      "Hex": "#9C2462",
      "Red": 156,
      "Green": 36,
      "Blue": 98
    },
    {
      "Number": 720,
      "Name": "Orange Spice Dark",
      "Hex": "#E55C1F",
      "Red": 229,
      "Green": 92,
      "Blue": 31
    },
    {
      "Number": 721,
      "Name": "Orange Spice Medium",
      "Hex": "#F27842",
      "Red": 242,
      "Green": 120,
      "Blue": 66
    },
    {
      "Number": 722,
      "Name": "Orange Spice Light",
      "Hex": "#F7976F",
      "Red": 247,
      "Green": 151,
      "Blue": 111
    },
    {
      "Number": 725,
      "Name": "Topaz Medium Light",
      "Hex": "#FFC840",
      "Red": 255,
      "Green": 200,
      "Blue": 64
    },
    {
      "Number": 726,
      "Name": "Topaz Light",
      "Hex": "#FDD755",
      "Red": 253,
      "Green": 215,
      "Blue": 85
    },
    {
      "Number": 727,
      "Name": "Topaz Very Light",
      "Hex": "#FFF1AF",
      "Red": 255,
      "Green": 241,
      "Blue": 175
    },
    {
      "Number": 728,
      "Name": "Topaz",
      "Hex": "#E4B468",
      "Red": 228,
      "Green": 180,
      "Blue": 104
    },
    {
      "Number": 729,
      "Name": "Old Gold Medium",
      "Hex": "#D0A53E",
      "Red": 208,
      "Green": 165,
      "Blue": 62
    },
    {
      "Number": 730,
      "Name": "Olive Green Very Dark",
      "Hex": "#827B30",
      "Red": 130,
      "Green": 123,
      "Blue": 48
    },
    {
      "Number": 731,
      "Name": "Olive Green Dark",
      "Hex": "#938B37",
      "Red": 147,
      "Green": 139,
      "Blue": 55
    },
    {
      "Number": 732,
      "Name": "Olive Green",
      "Hex": "#948C36",
      "Red": 148,
      "Green": 140,
      "Blue": 54
    },
    {
      "Number": 733,
      "Name": "Olive Green Medium",
      "Hex": "#BCB34C",
      "Red": 188,
      "Green": 179,
      "Blue": 76
    },
    {
      "Number": 734,
      "Name": "Olive Green Light",
      "Hex": "#C7C077",
      "Red": 199,
      "Green": 192,
      "Blue": 119
    },
    {
      "Number": 738,
      "Name": "Tan Very Light",
      "Hex": "#ECCC9E",
      "Red": 236,
      "Green": 204,
      "Blue": 158
    },
    {
      "Number": 739,
      "Name": "Tan Ultra Very Light",
      "Hex": "#F8E4C8",
      "Red": 248,
      "Green": 228,
      "Blue": 200
    },
    {
      "Number": 740,
      "Name": "Tangerine",
      "Hex": "#FF8B00",
      "Red": 255,
      "Green": 139,
      "Blue": 0
    },
    {
      "Number": 741,
      "Name": "Tangerine Medium",
      "Hex": "#FFA32B",
      "Red": 255,
      "Green": 163,
      "Blue": 43
    },
    {
      "Number": 742,
      "Name": "Tangerine Light",
      "Hex": "#FFBF57",
      "Red": 255,
      "Green": 191,
      "Blue": 87
    },
    {
      "Number": 743,
      "Name": "Yellow Medium",
      "Hex": "#FED376",
      "Red": 254,
      "Green": 211,
      "Blue": 118
    },
    {
      "Number": 744,
      "Name": "Yellow Pale",
      "Hex": "#FFE793",
      "Red": 255,
      "Green": 231,
      "Blue": 147
    },
    {
      "Number": 745,
      "Name": "Yellow Pale Light",
      "Hex": "#FFE9AD",
      "Red": 255,
      "Green": 233,
      "Blue": 173
    },
    {
      "Number": 746,
      "Name": "Off White",
      "Hex": "#FCFCEE",
      "Red": 252,
      "Green": 252,
      "Blue": 238
    },
    {
      "Number": 747,
      "Name": "Peacock Blue Very Light",
      "Hex": "#E5FCFD",
      "Red": 229,
      "Green": 252,
      "Blue": 253
    },
    {
      "Number": 754,
      "Name": "Peach Light",
      "Hex": "#F7CBBF",
      "Red": 247,
      "Green": 203,
      "Blue": 191
    },
    {
      "Number": 758,
      "Name": "Terra Cotta Very Light",
      "Hex": "#EEAA9B",
      "Red": 238,
      "Green": 170,
      "Blue": 155
    },
    {
      "Number": 760,
      "Name": "Salmon",
      "Hex": "#F5ADAD",
      "Red": 245,
      "Green": 173,
      "Blue": 173
    },
    {
      "Number": 761,
      "Name": "Salmon Light",
      "Hex": "#FFC9C9",
      "Red": 255,
      "Green": 201,
      "Blue": 201
    },
    {
      "Number": 762,
      "Name": "Pearl Gray Very Light",
      "Hex": "#ECECEC",
      "Red": 236,
      "Green": 236,
      "Blue": 236
    },
    {
      "Number": 772,
      "Name": "Yellow Green Very Light",
      "Hex": "#E4ECD4",
      "Red": 228,
      "Green": 236,
      "Blue": 212
    },
    {
      "Number": 775,
      "Name": "Baby Blue Very Light",
      "Hex": "#D9EBF1",
      "Red": 217,
      "Green": 235,
      "Blue": 241
    },
    {
      "Number": 776,
      "Name": "Pink Medium",
      "Hex": "#FCB0B9",
      "Red": 252,
      "Green": 176,
      "Blue": 185
    },
    {
      "Number": 777,
      "Name": "Raspberry Very Dark",
      "Hex": "#913546",
      "Red": 145,
      "Green": 53,
      "Blue": 70
    },
    {
      "Number": 778,
      "Name": "Antique Mauve Very Light",
      "Hex": "#DFB3BB",
      "Red": 223,
      "Green": 179,
      "Blue": 187
    },
    {
      "Number": 779,
      "Name": "Cocoa Dark",
      "Hex": "#624B45",
      "Red": 98,
      "Green": 75,
      "Blue": 69
    },
    {
      "Number": 780,
      "Name": "Topaz Ultra Very Dark",
      "Hex": "#94631A",
      "Red": 148,
      "Green": 99,
      "Blue": 26
    },
    {
      "Number": 781,
      "Name": "Topaz Very Dark",
      "Hex": "#A26D20",
      "Red": 162,
      "Green": 109,
      "Blue": 32
    },
    {
      "Number": 782,
      "Name": "Topaz Dark",
      "Hex": "#AE7720",
      "Red": 174,
      "Green": 119,
      "Blue": 32
    },
    {
      "Number": 783,
      "Name": "Topaz Medium",
      "Hex": "#CE9124",
      "Red": 206,
      "Green": 145,
      "Blue": 36
    },
    {
      "Number": 791,
      "Name": "Cornflower Blue Very Dark",
      "Hex": "#464563",
      "Red": 70,
      "Green": 69,
      "Blue": 99
    },
    {
      "Number": 792,
      "Name": "Cornflower Blue Dark",
      "Hex": "#555B7B",
      "Red": 85,
      "Green": 91,
      "Blue": 123
    },
    {
      "Number": 793,
      "Name": "Cornflower Blue Medium",
      "Hex": "#707DA2",
      "Red": 112,
      "Green": 125,
      "Blue": 162
    },
    {
      "Number": 794,
      "Name": "Cornflower Blue Light",
      "Hex": "#8F9CC1",
      "Red": 143,
      "Green": 156,
      "Blue": 193
    },
    {
      "Number": 796,
      "Name": "Royal Blue Dark",
      "Hex": "#11416D",
      "Red": 17,
      "Green": 65,
      "Blue": 109
    },
    {
      "Number": 797,
      "Name": "Royal Blue",
      "Hex": "#13477D",
      "Red": 19,
      "Green": 71,
      "Blue": 125
    },
    {
      "Number": 798,
      "Name": "Delft Blue Dark",
      "Hex": "#466A8E",
      "Red": 70,
      "Green": 106,
      "Blue": 142
    },
    {
      "Number": 799,
      "Name": "Delft Blue Medium",
      "Hex": "#748EB6",
      "Red": 116,
      "Green": 142,
      "Blue": 182
    },
    {
      "Number": 800,
      "Name": "Delft Blue Pale",
      "Hex": "#C0CCDE",
      "Red": 192,
      "Green": 204,
      "Blue": 222
    },
    {
      "Number": 801,
      "Name": "Coffee Brown Dark",
      "Hex": "#653919",
      "Red": 101,
      "Green": 57,
      "Blue": 25
    },
    {
      "Number": 803,
      "Name": "Baby Blue Ultra Very Dark",
      "Hex": "#2C597C",
      "Red": 44,
      "Green": 89,
      "Blue": 124
    },
    {
      "Number": 806,
      "Name": "Peacock Blue Dark",
      "Hex": "#3D95A5",
      "Red": 61,
      "Green": 149,
      "Blue": 165
    },
    {
      "Number": 807,
      "Name": "Peacock Blue",
      "Hex": "#64ABBA",
      "Red": 100,
      "Green": 171,
      "Blue": 186
    },
    {
      "Number": 809,
      "Name": "Delft Blue",
      "Hex": "#94A8C6",
      "Red": 148,
      "Green": 168,
      "Blue": 198
    },
    {
      "Number": 813,
      "Name": "Blue Light",
      "Hex": "#A1C2D7",
      "Red": 161,
      "Green": 194,
      "Blue": 215
    },
    {
      "Number": 814,
      "Name": "Garnet Dark",
      "Hex": "#7B001B",
      "Red": 123,
      "Green": 0,
      "Blue": 27
    },
    {
      "Number": 815,
      "Name": "Garnet Medium",
      "Hex": "#87071F",
      "Red": 135,
      "Green": 7,
      "Blue": 31
    },
    {
      "Number": 816,
      "Name": "Garnet",
      "Hex": "#970B23",
      "Red": 151,
      "Green": 11,
      "Blue": 35
    },
    {
      "Number": 817,
      "Name": "Coral Red Very Dark",
      "Hex": "#BB051F",
      "Red": 187,
      "Green": 5,
      "Blue": 31
    },
    {
      "Number": 818,
      "Name": "Baby Pink",
      "Hex": "#FFDFD9",
      "Red": 255,
      "Green": 223,
      "Blue": 217
    },
    {
      "Number": 819,
      "Name": "Baby Pink Light",
      "Hex": "#FFEEEB",
      "Red": 255,
      "Green": 238,
      "Blue": 235
    },
    {
      "Number": 820,
      "Name": "Royal Blue Very Dark",
      "Hex": "#0E365C",
      "Red": 14,
      "Green": 54,
      "Blue": 92
    },
    {
      "Number": 822,
      "Name": "Beige Gray Light",
      "Hex": "#E7E2D3",
      "Red": 231,
      "Green": 226,
      "Blue": 211
    },
    {
      "Number": 823,
      "Name": "Navy Blue Dark",
      "Hex": "#213063",
      "Red": 33,
      "Green": 48,
      "Blue": 99
    },
    {
      "Number": 824,
      "Name": "Blue Very Dark",
      "Hex": "#396987",
      "Red": 57,
      "Green": 105,
      "Blue": 135
    },
    {
      "Number": 825,
      "Name": "Blue Dark",
      "Hex": "#4781A5",
      "Red": 71,
      "Green": 129,
      "Blue": 165
    },
    {
      "Number": 826,
      "Name": "Blue Medium",
      "Hex": "#6B9EBF",
      "Red": 107,
      "Green": 158,
      "Blue": 191
    },
    {
      "Number": 827,
      "Name": "Blue Very Light",
      "Hex": "#BDDDED",
      "Red": 189,
      "Green": 221,
      "Blue": 237
    },
    {
      "Number": 828,
      "Name": "Sky Blue Very Light",
      "Hex": "#C5E8ED",
      "Red": 197,
      "Green": 232,
      "Blue": 237
    },
    {
      "Number": 829,
      "Name": "Golden Olive Very Dark",
      "Hex": "#7E6B42",
      "Red": 126,
      "Green": 107,
      "Blue": 66
    },
    {
      "Number": 830,
      "Name": "Golden Olive Dark",
      "Hex": "#8D784B",
      "Red": 141,
      "Green": 120,
      "Blue": 75
    },
    {
      "Number": 831,
      "Name": "Golden Olive Medium",
      "Hex": "#AA8F56",
      "Red": 170,
      "Green": 143,
      "Blue": 86
    },
    {
      "Number": 832,
      "Name": "Golden Olive",
      "Hex": "#BD9B51",
      "Red": 189,
      "Green": 155,
      "Blue": 81
    },
    {
      "Number": 833,
      "Name": "Golden Olive Light",
      "Hex": "#C8AB6C",
      "Red": 200,
      "Green": 171,
      "Blue": 108
    },
    {
      "Number": 834,
      "Name": "Golden Olive Very Light",
      "Hex": "#DBBE7F",
      "Red": 219,
      "Green": 190,
      "Blue": 127
    },
    {
      "Number": 838,
      "Name": "Beige Brown Very Dark",
      "Hex": "#594937",
      "Red": 89,
      "Green": 73,
      "Blue": 55
    },
    {
      "Number": 839,
      "Name": "Beige Brown Dark",
      "Hex": "#675541",
      "Red": 103,
      "Green": 85,
      "Blue": 65
    },
    {
      "Number": 840,
      "Name": "Beige Brown Medium",
      "Hex": "#9A7C5C",
      "Red": 154,
      "Green": 124,
      "Blue": 92
    },
    {
      "Number": 841,
      "Name": "Beige Brown Light",
      "Hex": "#B69B7E",
      "Red": 182,
      "Green": 155,
      "Blue": 126
    },
    {
      "Number": 842,
      "Name": "Beige Brown Very Light",
      "Hex": "#D1BAA1",
      "Red": 209,
      "Green": 186,
      "Blue": 161
    },
    {
      "Number": 844,
      "Name": "Beaver Gray Ultra Dark",
      "Hex": "#484848",
      "Red": 72,
      "Green": 72,
      "Blue": 72
    },
    {
      "Number": 869,
      "Name": "Hazelnut Brown Very Dark",
      "Hex": "#835E39",
      "Red": 131,
      "Green": 94,
      "Blue": 57
    },
    {
      "Number": 890,
      "Name": "Pistachio Grn Ultra Very Dark",
      "Hex": "#184923",
      "Red": 23,
      "Green": 73,
      "Blue": 35
    },
    {
      "Number": 891,
      "Name": "Carnation Dark",
      "Hex": "#FF5773",
      "Red": 255,
      "Green": 87,
      "Blue": 115
    },
    {
      "Number": 892,
      "Name": "Carnation Medium",
      "Hex": "#FF798C",
      "Red": 255,
      "Green": 121,
      "Blue": 140
    },
    {
      "Number": 893,
      "Name": "Carnation Light",
      "Hex": "#FC90A2",
      "Red": 252,
      "Green": 144,
      "Blue": 162
    },
    {
      "Number": 894,
      "Name": "Carnation Very Light",
      "Hex": "#FFB2BB",
      "Red": 255,
      "Green": 178,
      "Blue": 187
    },
    {
      "Number": 895,
      "Name": "Hunter Green Very Dark",
      "Hex": "#1B5300",
      "Red": 27,
      "Green": 83,
      "Blue": 0
    },
    {
      "Number": 898,
      "Name": "Coffee Brown Very Dark",
      "Hex": "#492A13",
      "Red": 73,
      "Green": 42,
      "Blue": 19
    },
    {
      "Number": 899,
      "Name": "Rose Medium",
      "Hex": "#F27688",
      "Red": 242,
      "Green": 118,
      "Blue": 136
    },
    {
      "Number": 900,
      "Name": "Burnt Orange Dark",
      "Hex": "#D15807",
      "Red": 209,
      "Green": 88,
      "Blue": 7
    },
    {
      "Number": 902,
      "Name": "Garnet Very Dark",
      "Hex": "#822637",
      "Red": 130,
      "Green": 38,
      "Blue": 55
    },
    {
      "Number": 904,
      "Name": "Parrot Green Very Dark",
      "Hex": "#557822",
      "Red": 85,
      "Green": 120,
      "Blue": 34
    },
    {
      "Number": 905,
      "Name": "Parrot Green Dark",
      "Hex": "#628A28",
      "Red": 98,
      "Green": 138,
      "Blue": 40
    },
    {
      "Number": 906,
      "Name": "Parrot Green Medium",
      "Hex": "#7FB335",
      "Red": 127,
      "Green": 179,
      "Blue": 53
    },
    {
      "Number": 907,
      "Name": "Parrot Green Light",
      "Hex": "#C7E666",
      "Red": 199,
      "Green": 230,
      "Blue": 102
    },
    {
      "Number": 909,
      "Name": "Emerald Green Very Dark",
      "Hex": "#156F49",
      "Red": 21,
      "Green": 111,
      "Blue": 73
    },
    {
      "Number": 910,
      "Name": "Emerald Green Dark",
      "Hex": "#187E56",
      "Red": 24,
      "Green": 126,
      "Blue": 86
    },
    {
      "Number": 911,
      "Name": "Emerald Green Medium",
      "Hex": "#189065",
      "Red": 24,
      "Green": 144,
      "Blue": 101
    },
    {
      "Number": 912,
      "Name": "Emerald Green Light",
      "Hex": "#1B9D6B",
      "Red": 27,
      "Green": 157,
      "Blue": 107
    },
    {
      "Number": 913,
      "Name": "Nile Green Medium",
      "Hex": "#6DAB77",
      "Red": 109,
      "Green": 171,
      "Blue": 119
    },
    {
      "Number": 915,
      "Name": "Plum Dark",
      "Hex": "#820043",
      "Red": 130,
      "Green": 0,
      "Blue": 67
    },
    {
      "Number": 917,
      "Name": "Plum Medium",
      "Hex": "#9B1359",
      "Red": 155,
      "Green": 19,
      "Blue": 89
    },
    {
      "Number": 918,
      "Name": "Red Copper Dark",
      "Hex": "#82340A",
      "Red": 130,
      "Green": 52,
      "Blue": 10
    },
    {
      "Number": 919,
      "Name": "Red Copper",
      "Hex": "#A64510",
      "Red": 166,
      "Green": 69,
      "Blue": 16
    },
    {
      "Number": 920,
      "Name": "Copper Medium",
      "Hex": "#AC5414",
      "Red": 172,
      "Green": 84,
      "Blue": 20
    },
    {
      "Number": 921,
      "Name": "Copper",
      "Hex": "#C66218",
      "Red": 198,
      "Green": 98,
      "Blue": 24
    },
    {
      "Number": 922,
      "Name": "Copper Light",
      "Hex": "#E27323",
      "Red": 226,
      "Green": 115,
      "Blue": 35
    },
    {
      "Number": 924,
      "Name": "Gray Green Vy Dark",
      "Hex": "#566A6A",
      "Red": 86,
      "Green": 106,
      "Blue": 106
    },
    {
      "Number": 926,
      "Name": "Gray Green Medium",
      "Hex": "#98AEAE",
      "Red": 152,
      "Green": 174,
      "Blue": 174
    },
    {
      "Number": 927,
      "Name": "Gray Green Light",
      "Hex": "#BDCBCB",
      "Red": 189,
      "Green": 203,
      "Blue": 203
    },
    {
      "Number": 928,
      "Name": "Gray Green Very Light",
      "Hex": "#DDE3E3",
      "Red": 221,
      "Green": 227,
      "Blue": 227
    },
    {
      "Number": 930,
      "Name": "Antique Blue Dark",
      "Hex": "#455C71",
      "Red": 69,
      "Green": 92,
      "Blue": 113
    },
    {
      "Number": 931,
      "Name": "Antique Blue Medium",
      "Hex": "#6A859E",
      "Red": 106,
      "Green": 133,
      "Blue": 158
    },
    {
      "Number": 932,
      "Name": "Antique Blue Light",
      "Hex": "#A2B5C6",
      "Red": 162,
      "Green": 181,
      "Blue": 198
    },
    {
      "Number": 934,
      "Name": "Avocado Grn Black",
      "Hex": "#313919",
      "Red": 49,
      "Green": 57,
      "Blue": 25
    },
    {
      "Number": 935,
      "Name": "Avocado Green Dark",
      "Hex": "#424D21",
      "Red": 66,
      "Green": 77,
      "Blue": 33
    },
    {
      "Number": 936,
      "Name": "Avocado Green Very Dark",
      "Hex": "#4C5826",
      "Red": 76,
      "Green": 88,
      "Blue": 38
    },
    {
      "Number": 937,
      "Name": "Avocado Green Medium",
      "Hex": "#627133",
      "Red": 98,
      "Green": 113,
      "Blue": 51
    },
    {
      "Number": 938,
      "Name": "Coffee Brown Ultra Dark",
      "Hex": "#361F0E",
      "Red": 54,
      "Green": 31,
      "Blue": 14
    },
    {
      "Number": 939,
      "Name": "Navy Blue Very Dark",
      "Hex": "#1B2853",
      "Red": 27,
      "Green": 40,
      "Blue": 83
    },
    {
      "Number": 943,
      "Name": "Green Bright Medium",
      "Hex": "#3D9384",
      "Red": 61,
      "Green": 147,
      "Blue": 132
    },
    {
      "Number": 945,
      "Name": "Tawny",
      "Hex": "#FBD5BB",
      "Red": 251,
      "Green": 213,
      "Blue": 187
    },
    {
      "Number": 946,
      "Name": "Burnt Orange Medium",
      "Hex": "#EB6307",
      "Red": 235,
      "Green": 99,
      "Blue": 7
    },
    {
      "Number": 947,
      "Name": "Burnt Orange",
      "Hex": "#FF7B4D",
      "Red": 255,
      "Green": 123,
      "Blue": 77
    },
    {
      "Number": 948,
      "Name": "Peach Very Light",
      "Hex": "#FEE7DA",
      "Red": 254,
      "Green": 231,
      "Blue": 218
    },
    {
      "Number": 950,
      "Name": "Desert Sand Light",
      "Hex": "#EED3C4",
      "Red": 238,
      "Green": 211,
      "Blue": 196
    },
    {
      "Number": 951,
      "Name": "Tawny Light",
      "Hex": "#FFE2CF",
      "Red": 255,
      "Green": 226,
      "Blue": 207
    },
    {
      "Number": 954,
      "Name": "Nile Green",
      "Hex": "#88BA91",
      "Red": 136,
      "Green": 186,
      "Blue": 145
    },
    {
      "Number": 955,
      "Name": "Nile Green Light",
      "Hex": "#A2D6AD",
      "Red": 162,
      "Green": 214,
      "Blue": 173
    },
    {
      "Number": 956,
      "Name": "Geranium",
      "Hex": "#FF9191",
      "Red": 255,
      "Green": 145,
      "Blue": 145
    },
    {
      "Number": 957,
      "Name": "Geranium Pale",
      "Hex": "#FDB5B5",
      "Red": 253,
      "Green": 181,
      "Blue": 181
    },
    {
      "Number": 958,
      "Name": "Sea Green Dark",
      "Hex": "#3EB6A1",
      "Red": 62,
      "Green": 182,
      "Blue": 161
    },
    {
      "Number": 959,
      "Name": "Sea Green Medium",
      "Hex": "#59C7B4",
      "Red": 89,
      "Green": 199,
      "Blue": 180
    },
    {
      "Number": 961,
      "Name": "Dusty Rose Dark",
      "Hex": "#CF7373",
      "Red": 207,
      "Green": 115,
      "Blue": 115
    },
    {
      "Number": 962,
      "Name": "Dusty Rose Medium",
      "Hex": "#E68A8A",
      "Red": 230,
      "Green": 138,
      "Blue": 138
    },
    {
      "Number": 963,
      "Name": "Dusty Rose Ultra Very Light",
      "Hex": "#FFD7D7",
      "Red": 255,
      "Green": 215,
      "Blue": 215
    },
    {
      "Number": 964,
      "Name": "Sea Green Light",
      "Hex": "#A9E2D8",
      "Red": 169,
      "Green": 226,
      "Blue": 216
    },
    {
      "Number": 966,
      "Name": "Jade Ultra Very Light",
      "Hex": "#B9D7C0",
      "Red": 185,
      "Green": 215,
      "Blue": 192
    },
    {
      "Number": 967,
      "Name": "Apricot Very Light",
      "Hex": "#FFDED5",
      "Red": 255,
      "Green": 222,
      "Blue": 213
    },
    {
      "Number": 970,
      "Name": "Pumpkin Light",
      "Hex": "#F78B13",
      "Red": 247,
      "Green": 139,
      "Blue": 19
    },
    {
      "Number": 971,
      "Name": "Pumpkin",
      "Hex": "#F67F00",
      "Red": 246,
      "Green": 127,
      "Blue": 0
    },
    {
      "Number": 972,
      "Name": "Canary Deep",
      "Hex": "#FFB515",
      "Red": 255,
      "Green": 181,
      "Blue": 21
    },
    {
      "Number": 973,
      "Name": "Canary Bright",
      "Hex": "#FFE300",
      "Red": 255,
      "Green": 227,
      "Blue": 0
    },
    {
      "Number": 975,
      "Name": "Golden Brown Dark",
      "Hex": "#914F12",
      "Red": 145,
      "Green": 79,
      "Blue": 18
    },
    {
      "Number": 976,
      "Name": "Golden Brown Medium",
      "Hex": "#C28142",
      "Red": 194,
      "Green": 129,
      "Blue": 66
    },
    {
      "Number": 977,
      "Name": "Golden Brown Light",
      "Hex": "#DC9C56",
      "Red": 220,
      "Green": 156,
      "Blue": 86
    },
    {
      "Number": 986,
      "Name": "Forest Green Very Dark",
      "Hex": "#405230",
      "Red": 64,
      "Green": 82,
      "Blue": 48
    },
    {
      "Number": 987,
      "Name": "Forest Green Dark",
      "Hex": "#587141",
      "Red": 88,
      "Green": 113,
      "Blue": 65
    },
    {
      "Number": 988,
      "Name": "Forest Green Medium",
      "Hex": "#738B5B",
      "Red": 115,
      "Green": 139,
      "Blue": 91
    },
    {
      "Number": 989,
      "Name": "Forest Green",
      "Hex": "#8DA675",
      "Red": 141,
      "Green": 166,
      "Blue": 117
    },
    {
      "Number": 991,
      "Name": "Aquamarine Dark",
      "Hex": "#477B6E",
      "Red": 71,
      "Green": 123,
      "Blue": 110
    },
    {
      "Number": 992,
      "Name": "Aquamarine Light",
      "Hex": "#6FAE9F",
      "Red": 111,
      "Green": 174,
      "Blue": 159
    },
    {
      "Number": 993,
      "Name": "Aquamarine Very Light",
      "Hex": "#90C0B4",
      "Red": 144,
      "Green": 192,
      "Blue": 180
    },
    {
      "Number": 995,
      "Name": "Electric Blue Dark",
      "Hex": "#2696B6",
      "Red": 38,
      "Green": 150,
      "Blue": 182
    },
    {
      "Number": 996,
      "Name": "Electric Blue Medium",
      "Hex": "#30C2EC",
      "Red": 48,
      "Green": 194,
      "Blue": 236
    },
    {
      "Number": 3011,
      "Name": "Khaki Green Dark",
      "Hex": "#898A58",
      "Red": 137,
      "Green": 138,
      "Blue": 88
    },
    {
      "Number": 3012,
      "Name": "Khaki Green Medium",
      "Hex": "#A6A75D",
      "Red": 166,
      "Green": 167,
      "Blue": 93
    },
    {
      "Number": 3013,
      "Name": "Khaki Green Light",
      "Hex": "#B9B982",
      "Red": 185,
      "Green": 185,
      "Blue": 130
    },
    {
      "Number": 3021,
      "Name": "Brown Gray Very Dark",
      "Hex": "#4F4B41",
      "Red": 79,
      "Green": 75,
      "Blue": 65
    },
    {
      "Number": 3022,
      "Name": "Brown Gray Medium",
      "Hex": "#8E9078",
      "Red": 142,
      "Green": 144,
      "Blue": 120
    },
    {
      "Number": 3023,
      "Name": "Brown Gray Light",
      "Hex": "#B1AA97",
      "Red": 177,
      "Green": 170,
      "Blue": 151
    },
    {
      "Number": 3024,
      "Name": "Brown Gray Very Light",
      "Hex": "#EBEAE7",
      "Red": 235,
      "Green": 234,
      "Blue": 231
    },
    {
      "Number": 3031,
      "Name": "Mocha Brown Very Dark",
      "Hex": "#4B3C2A",
      "Red": 75,
      "Green": 60,
      "Blue": 42
    },
    {
      "Number": 3032,
      "Name": "Mocha Brown Medium",
      "Hex": "#B39F8B",
      "Red": 179,
      "Green": 159,
      "Blue": 139
    },
    {
      "Number": 3033,
      "Name": "Mocha Brown Very Light",
      "Hex": "#E3D8CC",
      "Red": 227,
      "Green": 216,
      "Blue": 204
    },
    {
      "Number": 3041,
      "Name": "Antique Violet Medium",
      "Hex": "#956F7C",
      "Red": 149,
      "Green": 111,
      "Blue": 124
    },
    {
      "Number": 3042,
      "Name": "Antique Violet Light",
      "Hex": "#B79DA7",
      "Red": 183,
      "Green": 157,
      "Blue": 167
    },
    {
      "Number": 3045,
      "Name": "Yellow Beige Dark",
      "Hex": "#BC966A",
      "Red": 188,
      "Green": 150,
      "Blue": 106
    },
    {
      "Number": 3046,
      "Name": "Yellow Beige Medium",
      "Hex": "#D8BC9A",
      "Red": 216,
      "Green": 188,
      "Blue": 154
    },
    {
      "Number": 3047,
      "Name": "Yellow Beige Light",
      "Hex": "#E7D6C1",
      "Red": 231,
      "Green": 214,
      "Blue": 193
    },
    {
      "Number": 3051,
      "Name": "Green Gray Dark",
      "Hex": "#5F6648",
      "Red": 95,
      "Green": 102,
      "Blue": 72
    },
    {
      "Number": 3052,
      "Name": "Green Gray Medium",
      "Hex": "#889268",
      "Red": 136,
      "Green": 146,
      "Blue": 104
    },
    {
      "Number": 3053,
      "Name": "Green Gray",
      "Hex": "#9CA482",
      "Red": 156,
      "Green": 164,
      "Blue": 130
    },
    {
      "Number": 3064,
      "Name": "Desert Sand",
      "Hex": "#C48E70",
      "Red": 196,
      "Green": 142,
      "Blue": 112
    },
    {
      "Number": 3072,
      "Name": "Beaver Gray Very Light",
      "Hex": "#E6E8E8",
      "Red": 230,
      "Green": 232,
      "Blue": 232
    },
    {
      "Number": 3078,
      "Name": "Golden Yellow Very Light",
      "Hex": "#FDF9CD",
      "Red": 253,
      "Green": 249,
      "Blue": 205
    },
    {
      "Number": 3325,
      "Name": "Baby Blue Light",
      "Hex": "#B8D2E6",
      "Red": 184,
      "Green": 210,
      "Blue": 230
    },
    {
      "Number": 3326,
      "Name": "Rose Light",
      "Hex": "#FBADB4",
      "Red": 251,
      "Green": 173,
      "Blue": 180
    },
    {
      "Number": 3328,
      "Name": "Salmon Dark",
      "Hex": "#E36D6D",
      "Red": 227,
      "Green": 109,
      "Blue": 109
    },
    {
      "Number": 3340,
      "Name": "Apricot Medium",
      "Hex": "#FF836F",
      "Red": 255,
      "Green": 131,
      "Blue": 111
    },
    {
      "Number": 3341,
      "Name": "Apricot",
      "Hex": "#FCAB98",
      "Red": 252,
      "Green": 171,
      "Blue": 152
    },
    {
      "Number": 3345,
      "Name": "Hunter Green Dark",
      "Hex": "#1B5915",
      "Red": 27,
      "Green": 89,
      "Blue": 21
    },
    {
      "Number": 3346,
      "Name": "Hunter Green",
      "Hex": "#406A3A",
      "Red": 64,
      "Green": 106,
      "Blue": 58
    },
    {
      "Number": 3347,
      "Name": "Yellow Green Medium",
      "Hex": "#71935C",
      "Red": 113,
      "Green": 147,
      "Blue": 92
    },
    {
      "Number": 3348,
      "Name": "Yellow Green Light",
      "Hex": "#CCD9B1",
      "Red": 204,
      "Green": 217,
      "Blue": 177
    },
    {
      "Number": 3350,
      "Name": "Dusty Rose Ultra Dark",
      "Hex": "#BC4365",
      "Red": 188,
      "Green": 67,
      "Blue": 101
    },
    {
      "Number": 3354,
      "Name": "Dusty Rose Light",
      "Hex": "#E4A6AC",
      "Red": 228,
      "Green": 166,
      "Blue": 172
    },
    {
      "Number": 3362,
      "Name": "Pine Green Dark",
      "Hex": "#5E6B47",
      "Red": 94,
      "Green": 107,
      "Blue": 71
    },
    {
      "Number": 3363,
      "Name": "Pine Green Medium",
      "Hex": "#728256",
      "Red": 114,
      "Green": 130,
      "Blue": 86
    },
    {
      "Number": 3364,
      "Name": "Pine Green",
      "Hex": "#83975F",
      "Red": 131,
      "Green": 151,
      "Blue": 95
    },
    {
      "Number": 3371,
      "Name": "Black Brown",
      "Hex": "#1E1108",
      "Red": 30,
      "Green": 17,
      "Blue": 8
    },
    {
      "Number": 3607,
      "Name": "Plum Light",
      "Hex": "#C54989",
      "Red": 197,
      "Green": 73,
      "Blue": 137
    },
    {
      "Number": 3608,
      "Name": "Plum Very Light",
      "Hex": "#EA9CC4",
      "Red": 234,
      "Green": 156,
      "Blue": 196
    },
    {
      "Number": 3609,
      "Name": "Plum Ultra Light",
      "Hex": "#F4AED7",
      "Red": 244,
      "Green": 174,
      "Blue": 213
    },
    {
      "Number": 3685,
      "Name": "Mauve Very Dark",
      "Hex": "#881531",
      "Red": 136,
      "Green": 21,
      "Blue": 49
    },
    {
      "Number": 3687,
      "Name": "Mauve",
      "Hex": "#C96B70",
      "Red": 201,
      "Green": 107,
      "Blue": 112
    },
    {
      "Number": 3688,
      "Name": "Mauve Medium",
      "Hex": "#E7A9AC",
      "Red": 231,
      "Green": 169,
      "Blue": 172
    },
    {
      "Number": 3689,
      "Name": "Mauve Light",
      "Hex": "#FBBFC2",
      "Red": 251,
      "Green": 191,
      "Blue": 194
    },
    {
      "Number": 3705,
      "Name": "Melon Dark",
      "Hex": "#FF7992",
      "Red": 255,
      "Green": 121,
      "Blue": 146
    },
    {
      "Number": 3706,
      "Name": "Melon Medium",
      "Hex": "#FFADBC",
      "Red": 255,
      "Green": 173,
      "Blue": 188
    },
    {
      "Number": 3708,
      "Name": "Melon Light",
      "Hex": "#FFCBD5",
      "Red": 255,
      "Green": 203,
      "Blue": 213
    },
    {
      "Number": 3712,
      "Name": "Salmon Medium",
      "Hex": "#F18787",
      "Red": 241,
      "Green": 135,
      "Blue": 135
    },
    {
      "Number": 3713,
      "Name": "Salmon Very Light",
      "Hex": "#FFE2E2",
      "Red": 255,
      "Green": 226,
      "Blue": 226
    },
    {
      "Number": 3716,
      "Name": "Dusty Rose Medium Very Light",
      "Hex": "#FFBDBD",
      "Red": 255,
      "Green": 189,
      "Blue": 189
    },
    {
      "Number": 3721,
      "Name": "Shell Pink Dark",
      "Hex": "#A14B51",
      "Red": 161,
      "Green": 75,
      "Blue": 81
    },
    {
      "Number": 3722,
      "Name": "Shell Pink Medium",
      "Hex": "#BC6C64",
      "Red": 188,
      "Green": 108,
      "Blue": 100
    },
    {
      "Number": 3726,
      "Name": "Antique Mauve Dark",
      "Hex": "#9B5B66",
      "Red": 155,
      "Green": 91,
      "Blue": 102
    },
    {
      "Number": 3727,
      "Name": "Antique Mauve Light",
      "Hex": "#DBA9B2",
      "Red": 219,
      "Green": 169,
      "Blue": 178
    },
    {
      "Number": 3731,
      "Name": "Dusty Rose Very Dark",
      "Hex": "#DA6783",
      "Red": 218,
      "Green": 103,
      "Blue": 131
    },
    {
      "Number": 3733,
      "Name": "Dusty Rose",
      "Hex": "#E8879B",
      "Red": 232,
      "Green": 135,
      "Blue": 155
    },
    {
      "Number": 3740,
      "Name": "Antique Violet Dark",
      "Hex": "#785762",
      "Red": 120,
      "Green": 87,
      "Blue": 98
    },
    {
      "Number": 3743,
      "Name": "Antique Violet Very Light",
      "Hex": "#D7CBD3",
      "Red": 215,
      "Green": 203,
      "Blue": 211
    },
    {
      "Number": 3746,
      "Name": "Blue Violet Dark",
      "Hex": "#776B98",
      "Red": 119,
      "Green": 107,
      "Blue": 152
    },
    {
      "Number": 3747,
      "Name": "Blue Violet Very Light",
      "Hex": "#D3D7ED",
      "Red": 211,
      "Green": 215,
      "Blue": 237
    },
    {
      "Number": 3750,
      "Name": "Antique Blue Very Dark",
      "Hex": "#384C5E",
      "Red": 56,
      "Green": 76,
      "Blue": 94
    },
    {
      "Number": 3752,
      "Name": "Antique Blue Very Light",
      "Hex": "#C7D1DB",
      "Red": 199,
      "Green": 209,
      "Blue": 219
    },
    {
      "Number": 3753,
      "Name": "Antique Blue Ultra Very Light",
      "Hex": "#DBE2E9",
      "Red": 219,
      "Green": 226,
      "Blue": 233
    },
    {
      "Number": 3755,
      "Name": "Baby Blue",
      "Hex": "#92B4CE",
      "Red": 147,
      "Green": 180,
      "Blue": 206
    },
    {
      "Number": 3756,
      "Name": "Baby Blue Ultra Very Light",
      "Hex": "#EEFCFC",
      "Red": 238,
      "Green": 252,
      "Blue": 252
    },
    {
      "Number": 3760,
      "Name": "Wedgewood Medium",
      "Hex": "#3E85A2",
      "Red": 62,
      "Green": 133,
      "Blue": 162
    },
    {
      "Number": 3761,
      "Name": "Sky Blue Light",
      "Hex": "#ACD8E2",
      "Red": 172,
      "Green": 216,
      "Blue": 226
    },
    {
      "Number": 3765,
      "Name": "Peacock Blue Very Dark",
      "Hex": "#347F8C",
      "Red": 52,
      "Green": 127,
      "Blue": 140
    },
    {
      "Number": 3766,
      "Name": "Peacock Blue Light",
      "Hex": "#99CFD9",
      "Red": 153,
      "Green": 207,
      "Blue": 217
    },
    {
      "Number": 3768,
      "Name": "Gray Green Dark",
      "Hex": "#657F7F",
      "Red": 101,
      "Green": 127,
      "Blue": 127
    },
    {
      "Number": 3770,
      "Name": "Tawny Vy Light",
      "Hex": "#FFEEE3",
      "Red": 255,
      "Green": 238,
      "Blue": 227
    },
    {
      "Number": 3771,
      "Name": "Terra Cotta Ultra Very Light",
      "Hex": "#F4BBA9",
      "Red": 244,
      "Green": 187,
      "Blue": 169
    },
    {
      "Number": 3772,
      "Name": "Desert Sand Very Dark",
      "Hex": "#A06C50",
      "Red": 160,
      "Green": 108,
      "Blue": 80
    },
    {
      "Number": 3773,
      "Name": "Desert Sand Dark",
      "Hex": "#B67552",
      "Red": 182,
      "Green": 117,
      "Blue": 82
    },
    {
      "Number": 3774,
      "Name": "Desert Sand Very Light",
      "Hex": "#F3E1D7",
      "Red": 243,
      "Green": 225,
      "Blue": 215
    },
    {
      "Number": 3776,
      "Name": "Mahogany Light",
      "Hex": "#CF7939",
      "Red": 207,
      "Green": 121,
      "Blue": 57
    },
    {
      "Number": 3777,
      "Name": "Terra Cotta Very Dark",
      "Hex": "#863022",
      "Red": 134,
      "Green": 48,
      "Blue": 34
    },
    {
      "Number": 3778,
      "Name": "Terra Cotta Light",
      "Hex": "#D98978",
      "Red": 217,
      "Green": 137,
      "Blue": 120
    },
    {
      "Number": 3779,
      "Name": "Rosewood Ultra Very Light",
      "Hex": "#F8CAC8",
      "Red": 248,
      "Green": 202,
      "Blue": 200
    },
    {
      "Number": 3781,
      "Name": "Mocha Brown Dark",
      "Hex": "#6B5743",
      "Red": 107,
      "Green": 87,
      "Blue": 67
    },
    {
      "Number": 3782,
      "Name": "Mocha Brown Light",
      "Hex": "#D2BCA6",
      "Red": 210,
      "Green": 188,
      "Blue": 166
    },
    {
      "Number": 3787,
      "Name": "Brown Gray Dark",
      "Hex": "#625D50",
      "Red": 98,
      "Green": 93,
      "Blue": 80
    },
    {
      "Number": 3790,
      "Name": "Beige Gray Ultra Dark",
      "Hex": "#7F6A55",
      "Red": 127,
      "Green": 106,
      "Blue": 85
    },
    {
      "Number": 3799,
      "Name": "Pewter Gray Very Dark",
      "Hex": "#424242",
      "Red": 66,
      "Green": 66,
      "Blue": 66
    },
    {
      "Number": 3801,
      "Name": "Melon Very Dark",
      "Hex": "#E74967",
      "Red": 231,
      "Green": 73,
      "Blue": 103
    },
    {
      "Number": 3802,
      "Name": "Antique Mauve Very Darkv",
      "Hex": "#714149",
      "Red": 113,
      "Green": 65,
      "Blue": 73
    },
    {
      "Number": 3803,
      "Name": "Mauve Dark",
      "Hex": "#AB3357",
      "Red": 171,
      "Green": 51,
      "Blue": 87
    },
    {
      "Number": 3804,
      "Name": "Cyclamen Pink Dark",
      "Hex": "#E02876",
      "Red": 224,
      "Green": 40,
      "Blue": 118
    },
    {
      "Number": 3805,
      "Name": "Cyclamen Pink",
      "Hex": "#F3478B",
      "Red": 243,
      "Green": 71,
      "Blue": 139
    },
    {
      "Number": 3806,
      "Name": "Cyclamen Pink Light",
      "Hex": "#FF8CAE",
      "Red": 255,
      "Green": 140,
      "Blue": 174
    },
    {
      "Number": 3807,
      "Name": "Cornflower Blue",
      "Hex": "#60678C",
      "Red": 96,
      "Green": 103,
      "Blue": 140
    },
    {
      "Number": 3808,
      "Name": "Turquoise Ultra Very Dark",
      "Hex": "#366970",
      "Red": 54,
      "Green": 105,
      "Blue": 112
    },
    {
      "Number": 3809,
      "Name": "Turquoise Vy Dark",
      "Hex": "#3F7C85",
      "Red": 63,
      "Green": 124,
      "Blue": 133
    },
    {
      "Number": 3810,
      "Name": "Turquoise Dark",
      "Hex": "#488E9A",
      "Red": 72,
      "Green": 142,
      "Blue": 154
    },
    {
      "Number": 3811,
      "Name": "Turquoise Very Light",
      "Hex": "#BCE3E6",
      "Red": 188,
      "Green": 227,
      "Blue": 230
    },
    {
      "Number": 3812,
      "Name": "Sea Green Very Dark",
      "Hex": "#2F8C84",
      "Red": 47,
      "Green": 140,
      "Blue": 132
    },
    {
      "Number": 3813,
      "Name": "Blue Green Light",
      "Hex": "#B2D4BD",
      "Red": 178,
      "Green": 212,
      "Blue": 189
    },
    {
      "Number": 3814,
      "Name": "Aquamarine",
      "Hex": "#508B7D",
      "Red": 80,
      "Green": 139,
      "Blue": 125
    },
    {
      "Number": 3815,
      "Name": "Celadon Green Dark",
      "Hex": "#477759",
      "Red": 71,
      "Green": 119,
      "Blue": 89
    },
    {
      "Number": 3816,
      "Name": "Celadon Green",
      "Hex": "#65A57D",
      "Red": 101,
      "Green": 165,
      "Blue": 125
    },
    {
      "Number": 3817,
      "Name": "Celadon Green Light",
      "Hex": "#99C3AA",
      "Red": 153,
      "Green": 195,
      "Blue": 170
    },
    {
      "Number": 3818,
      "Name": "Emerald Green Ultra Very Dark",
      "Hex": "#115A3B",
      "Red": 17,
      "Green": 90,
      "Blue": 59
    },
    {
      "Number": 3819,
      "Name": "Moss Green Light",
      "Hex": "#E0E868",
      "Red": 224,
      "Green": 232,
      "Blue": 104
    },
    {
      "Number": 3820,
      "Name": "Straw Dark",
      "Hex": "#DFB65F",
      "Red": 223,
      "Green": 182,
      "Blue": 95
    },
    {
      "Number": 3821,
      "Name": "Straw",
      "Hex": "#F3CE75",
      "Red": 243,
      "Green": 206,
      "Blue": 117
    },
    {
      "Number": 3822,
      "Name": "Straw Light",
      "Hex": "#F6DC98",
      "Red": 246,
      "Green": 220,
      "Blue": 152
    },
    {
      "Number": 3823,
      "Name": "Yellow Ultra Pale",
      "Hex": "#FFFDE3",
      "Red": 255,
      "Green": 253,
      "Blue": 227
    },
    {
      "Number": 3824,
      "Name": "Apricot Light",
      "Hex": "#FECDC2",
      "Red": 254,
      "Green": 205,
      "Blue": 194
    },
    {
      "Number": 3825,
      "Name": "Pumpkin Pale",
      "Hex": "#FDBD96",
      "Red": 253,
      "Green": 189,
      "Blue": 150
    },
    {
      "Number": 3826,
      "Name": "Golden Brown",
      "Hex": "#AD7239",
      "Red": 173,
      "Green": 114,
      "Blue": 57
    },
    {
      "Number": 3827,
      "Name": "Golden Brown Pale",
      "Hex": "#F7BB77",
      "Red": 247,
      "Green": 187,
      "Blue": 119
    },
    {
      "Number": 3828,
      "Name": "Hazelnut Brown",
      "Hex": "#B78B61",
      "Red": 183,
      "Green": 139,
      "Blue": 97
    },
    {
      "Number": 3829,
      "Name": "Old Gold Vy Dark",
      "Hex": "#A98204",
      "Red": 169,
      "Green": 130,
      "Blue": 4
    },
    {
      "Number": 3830,
      "Name": "Terra Cotta",
      "Hex": "#BC5544",
      "Red": 185,
      "Green": 85,
      "Blue": 68
    },
    {
      "Number": 3831,
      "Name": "Raspberry Dark",
      "Hex": "#B32F48",
      "Red": 179,
      "Green": 47,
      "Blue": 72
    },
    {
      "Number": 3832,
      "Name": "Raspberry Medium",
      "Hex": "#DB556E",
      "Red": 219,
      "Green": 85,
      "Blue": 110
    },
    {
      "Number": 3833,
      "Name": "Raspberry Light",
      "Hex": "#EA8699",
      "Red": 234,
      "Green": 134,
      "Blue": 153
    },
    {
      "Number": 3834,
      "Name": "Grape Dark",
      "Hex": "#72375D",
      "Red": 114,
      "Green": 55,
      "Blue": 93
    },
    {
      "Number": 3835,
      "Name": "Grape Medium",
      "Hex": "#946083",
      "Red": 148,
      "Green": 96,
      "Blue": 131
    },
    {
      "Number": 3836,
      "Name": "Grape Light",
      "Hex": "#BA91AA",
      "Red": 186,
      "Green": 145,
      "Blue": 170
    },
    {
      "Number": 3837,
      "Name": "Lavender Ultra Dark",
      "Hex": "#6C3A6E",
      "Red": 108,
      "Green": 58,
      "Blue": 110
    },
    {
      "Number": 3838,
      "Name": "Lavender Blue Dark",
      "Hex": "#5C7294",
      "Red": 92,
      "Green": 114,
      "Blue": 148
    },
    {
      "Number": 3839,
      "Name": "Lavender Blue Medium",
      "Hex": "#7B8EAB",
      "Red": 123,
      "Green": 142,
      "Blue": 171
    },
    {
      "Number": 3840,
      "Name": "Lavender Blue Light",
      "Hex": "#B0C0DA",
      "Red": 176,
      "Green": 192,
      "Blue": 218
    },
    {
      "Number": 3841,
      "Name": "Baby Blue Pale",
      "Hex": "#CDDFED",
      "Red": 205,
      "Green": 223,
      "Blue": 237
    },
    {
      "Number": 3842,
      "Name": "Wedgewood Very Dark",
      "Hex": "#32667C",
      "Red": 50,
      "Green": 102,
      "Blue": 124
    },
    {
      "Number": 3843,
      "Name": "Electric Blue",
      "Hex": "#14AAD0",
      "Red": 20,
      "Green": 170,
      "Blue": 208
    },
    {
      "Number": 3844,
      "Name": "Turquoise Bright Dark",
      "Hex": "#12AEBA",
      "Red": 18,
      "Green": 174,
      "Blue": 186
    },
    {
      "Number": 3845,
      "Name": "Turquoise Bright Medium",
      "Hex": "#04C4CA",
      "Red": 4,
      "Green": 196,
      "Blue": 202
    },
    {
      "Number": 3846,
      "Name": "Turquoise Bright Light",
      "Hex": "#06E3E6",
      "Red": 6,
      "Green": 227,
      "Blue": 230
    },
    {
      "Number": 3847,
      "Name": "Teal Green Dark",
      "Hex": "#347D75",
      "Red": 52,
      "Green": 125,
      "Blue": 117
    },
    {
      "Number": 3848,
      "Name": "Teal Green Medium",
      "Hex": "#419392",
      "Red": 85,
      "Green": 147,
      "Blue": 146
    },
    {
      "Number": 3849,
      "Name": "Teal Green Light",
      "Hex": "#52B3AE",
      "Red": 82,
      "Green": 179,
      "Blue": 164
    },
    {
      "Number": 3850,
      "Name": "Green Bright Dark",
      "Hex": "#378477",
      "Red": 55,
      "Green": 132,
      "Blue": 119
    },
    {
      "Number": 3851,
      "Name": "Green Bright Light",
      "Hex": "#49B3A1",
      "Red": 73,
      "Green": 179,
      "Blue": 161
    },
    {
      "Number": 3852,
      "Name": "Straw Very Dark",
      "Hex": "#CD9D37",
      "Red": 205,
      "Green": 157,
      "Blue": 55
    },
    {
      "Number": 3853,
      "Name": "Autumn Gold Dark",
      "Hex": "#F29746",
      "Red": 242,
      "Green": 151,
      "Blue": 70
    },
    {
      "Number": 3854,
      "Name": "Autumn Gold Medium",
      "Hex": "#F2AF68",
      "Red": 242,
      "Green": 175,
      "Blue": 104
    },
    {
      "Number": 3855,
      "Name": "Autumn Gold Light",
      "Hex": "#FAD396",
      "Red": 250,
      "Green": 211,
      "Blue": 150
    },
    {
      "Number": 3856,
      "Name": "Mahogany Ultra Very Light",
      "Hex": "#FFD3B5",
      "Red": 255,
      "Green": 211,
      "Blue": 181
    },
    {
      "Number": 3857,
      "Name": "Rosewood Dark",
      "Hex": "#68251A",
      "Red": 104,
      "Green": 37,
      "Blue": 26
    },
    {
      "Number": 3858,
      "Name": "Rosewood Medium",
      "Hex": "#964A3F",
      "Red": 150,
      "Green": 74,
      "Blue": 63
    },
    {
      "Number": 3859,
      "Name": "Rosewood Light",
      "Hex": "#BA8B7C",
      "Red": 186,
      "Green": 139,
      "Blue": 124
    },
    {
      "Number": 3860,
      "Name": "Cocoa",
      "Hex": "#7D5D57",
      "Red": 125,
      "Green": 93,
      "Blue": 87
    },
    {
      "Number": 3861,
      "Name": "Cocoa Light",
      "Hex": "#A68881",
      "Red": 166,
      "Green": 136,
      "Blue": 129
    },
    {
      "Number": 3862,
      "Name": "Mocha Beige Dark",
      "Hex": "#8A6E4E",
      "Red": 138,
      "Green": 110,
      "Blue": 78
    },
    {
      "Number": 3863,
      "Name": "Mocha Beige Medium",
      "Hex": "#A4835C",
      "Red": 164,
      "Green": 131,
      "Blue": 92
    },
    {
      "Number": 3864,
      "Name": "Mocha Beige Light",
      "Hex": "#CBB69C",
      "Red": 203,
      "Green": 182,
      "Blue": 156
    },
    {
      "Number": 3865,
      "Name": "Winter White",
      "Hex": "#F9F7F1",
      "Red": 249,
      "Green": 247,
      "Blue": 241
    },
    {
      "Number": 3866,
      "Name": "Mocha Brown Ultra Very Light",
      "Hex": "#FAF6F0",
      "Red": 250,
      "Green": 246,
      "Blue": 240
    }
  ]