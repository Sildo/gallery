console.log('asd');

const dsa = new Promise((r) => {
	r('asd');
});

export class Asd {
	static async asd() {
		const ddd = await dsa;

		console.log(ddd);
		Array.from([1, 2, 3], (el) => {
			console.log(el);
        });
        
        fetch();

		return ddd;
	}
}

Asd.asd();
