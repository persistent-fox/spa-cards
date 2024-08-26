import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCard, TGetCardsParams } from '../../types/cards';

export const cardsApi = createApi({
	reducerPath: 'cardsApi',
	tagTypes: ['Cards'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://66cca2e7a4dd3c8a71b850fd.mockapi.io/' }),
	endpoints: builder => ({
		getCards: builder.query<TCard[], TGetCardsParams>({
			query: ({ like }) => {
				const queryParams = new URLSearchParams();
				like && queryParams.append('like', `${like}`);
				return `cards${queryParams ? `/?${queryParams}` : ''}`;
			},
			providesTags: result =>
				result ? [...result.map(({ id }) => ({ type: 'Cards' as const, id })), 'Cards'] : ['Cards'],
		}),
		getCardById: builder.query<TCard, string>({
			query: id => `cards/${id}`,
		}),
		toggleLike: builder.mutation<TCard, { id: string; like: boolean }>({
			query: body => {
				const { id, like } = body;
				return { url: `cards/${id}`, method: 'PUT', body: { like } };
			},
			invalidatesTags: [{ type: 'Cards' }],
		}),
		deleteCard: builder.mutation<TCard, { id: string }>({
			query: body => {
				const { id } = body;
				return { url: `cards/${id}`, method: 'DELETE' };
			},
			invalidatesTags: [{ type: 'Cards' }],
		}),
	}),
});

export const { useGetCardsQuery, useGetCardByIdQuery, useToggleLikeMutation, useDeleteCardMutation } = cardsApi;
