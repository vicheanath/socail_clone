const user = [
    {
        id: 1,
        name: 'Vichea Nath',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/78097455_625004174909189_7403895629660815360_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeGwGDCTTyXvirWt8ASkYwu46O-Dzpanqr7o74POlqeqvsVsyXNw5P2_uxbPYf3Y_ofTjM28MIoLbIOvRH9R6H1Y&_nc_ohc=SbWI9pMhxaEAX8c9F_H&_nc_ht=scontent.fpnh6-1.fna&oh=e5bec1c2220a53d784a0a1a9e502259b&oe=5EF42300'
    },
    {
        id: 2,
        name: 'Bunly',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/89021788_506828060247563_3803604453014110208_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEoPnPO4tGN8w8_MerXc_tLmNLZtRXS9USY0tm1FdL1RMQaT4dS43vzL6M18S_iuo5NFJN2WqgDjXNLmZtuddyy&_nc_ohc=ZoWB4IsRVIgAX_dkZZH&_nc_ht=scontent.fpnh6-1.fna&oh=d989ea9716f672ecf7df7fa02d20f68b&oe=5EF2C370',
    },
    {
        id: 3,
        name: 'Nu Reach',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/89657507_2573609372965875_1841722993462476800_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHAnUAiZFTsDxYCEYWLDYyhjynaF-rp672PKdoX6unrvZVsdZqRJT5lBVmid_sefGiJUwhe7avVrQPlaAhNj5Ze&_nc_ohc=8xM7Un9xH1IAX9nchzP&_nc_ht=scontent.fpnh6-1.fna&oh=5b20584b80cf5a4122aa089aa8a6ccba&oe=5EF1C192',
    },
    {
        id: 4,
        name: 'Pa j',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/56184245_795768360798987_1926505733784862720_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeH67q9xofqQk6iVJuqeykYSKk3b3_HyiiYqTdvf8fKKJi8UT_LCtZhzj6dYf2e1XIdC-5tSM96wH97ePc8YR5RX&_nc_ohc=y4MCCong2J0AX9EwhFS&_nc_ht=scontent.fpnh6-1.fna&oh=fc5e73144571841d73832dc278318eed&oe=5EF449B2',
    },
    {
        id: 5,
        name: 'Pozz Sart',
        image: 'https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t1.0-9/97500936_732695227271368_2696495436113379328_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeFx-bnBH-WAV0-9fmiUjo5OX6LYjrylLTxfotiOvKUtPFmCwDhfAo8oURHJVYqgisdAXrrA3bHVF_N8qUzCW8X0&_nc_ohc=huXU8o9G1FgAX_CO1Go&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=ffff249e405f90619ec1c67f876ef25d&oe=5EF1B866',
    },
];
const post = [
    {
        id: 1,
        name: 'Vichea Nath',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/78097455_625004174909189_7403895629660815360_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeGwGDCTTyXvirWt8ASkYwu46O-Dzpanqr7o74POlqeqvsVsyXNw5P2_uxbPYf3Y_ofTjM28MIoLbIOvRH9R6H1Y&_nc_ohc=SbWI9pMhxaEAX8c9F_H&_nc_ht=scontent.fpnh6-1.fna&oh=e5bec1c2220a53d784a0a1a9e502259b&oe=5EF42300',
        caption: 'Hello new socail meadia .....',
        love: 258,
        coment: 30,
        share: 2,
        time:'3 min ago',
    },
    {
        id: 2,
        name: 'Bunly',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/89021788_506828060247563_3803604453014110208_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEoPnPO4tGN8w8_MerXc_tLmNLZtRXS9USY0tm1FdL1RMQaT4dS43vzL6M18S_iuo5NFJN2WqgDjXNLmZtuddyy&_nc_ohc=ZoWB4IsRVIgAX_dkZZH&_nc_ht=scontent.fpnh6-1.fna&oh=d989ea9716f672ecf7df7fa02d20f68b&oe=5EF2C370',
        caption: 'Love eki risikak',
        love: 25,
        coment: 5,
        share: 2,
        time:'34 min ago',
    },
    {
        id: 3,
        name: 'Nu Reach',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/89657507_2573609372965875_1841722993462476800_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_eui2=AeHAnUAiZFTsDxYCEYWLDYyhjynaF-rp672PKdoX6unrvZVsdZqRJT5lBVmid_sefGiJUwhe7avVrQPlaAhNj5Ze&_nc_ohc=8xM7Un9xH1IAX9nchzP&_nc_ht=scontent.fpnh6-1.fna&oh=5b20584b80cf5a4122aa089aa8a6ccba&oe=5EF1C192',
        caption: 'moy jas ja .....',
        love: 259,
        coment: 65,
        share: 2,
        time:'8 min ago',
    },
    {
        id: 4,
        name: 'Pa j',
        image: 'https://scontent.fpnh6-1.fna.fbcdn.net/v/t1.0-9/56184245_795768360798987_1926505733784862720_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeH67q9xofqQk6iVJuqeykYSKk3b3_HyiiYqTdvf8fKKJi8UT_LCtZhzj6dYf2e1XIdC-5tSM96wH97ePc8YR5RX&_nc_ohc=y4MCCong2J0AX9EwhFS&_nc_ht=scontent.fpnh6-1.fna&oh=fc5e73144571841d73832dc278318eed&oe=5EF449B2',
        caption: 'I love You .....',
        love: 200,
        coment: 2,
        share: 2,
        time:'56 min ago',
    },
];
export { user, post };