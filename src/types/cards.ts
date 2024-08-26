export type TCard = {
	title: string;
	imgUrl: string;
	description: string;
	like: boolean;
	views: number;
	id: string;
};

export type TGetCardsParams = {
	like: boolean;
};
