const Bookings = [
    {
        room:101,
        surname: 'Bhatnagar',
        dateCal: new Date(),
    }
];

export default {
    add: async function (data) {
        debugger;
        return new Promise((resolve) => {
            Bookings.push(data);
            setTimeout(resolve(data), 1000);
        });
    },
    getAll: async function () {
        debugger;
        return new Promise((resolve) => {
            setTimeout(resolve(Bookings), 2000);
        });
    }
}
