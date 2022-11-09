const Bookings = [
    {
        room:101,
        surname: 'Bhatnagar',
        dateCal: new Date(),
    }
];

export default {
    add: async function (data) {
        return new Promise((resolve) => {
            Bookings.push(data);
            setTimeout(resolve(data), 1000);
        });
    },
    getAll: async function () {
        return new Promise((resolve) => {
            setTimeout(resolve(Bookings), 2000);
        });
    }
}