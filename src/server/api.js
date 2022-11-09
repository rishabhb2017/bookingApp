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

    // update: async function (data) {
    //     return new Promise((resolve) => {
    //         const { id, ...rest } = data;
    //         const targetIndex = Posts.findIndex(x => x.id === id)
    //         if (targetIndex > -1) {
    //             Posts[targetIndex] = { ...data }
    //         } else {
    //             new Error("Failed to update.")
    //         }
    //         setTimeout(resolve(data), 1000);
    //     });
    // },
    // delete: async function (id) {
    //     return new Promise((resolve) => {
    //         const targetIndex = Posts.findIndex(x => x.id === id)
    //         if (targetIndex > -1)
    //             Posts.splice(targetIndex, 1);
    //         else {
    //             new Error("Failed to delete.")
    //         }
    //         setTimeout(resolve({ affected: 1 }), 1000);
    //     });
    // },

    getAll: async function () {
        debugger;
        return new Promise((resolve) => {
            setTimeout(resolve(Bookings), 2000);
        });
    }
}