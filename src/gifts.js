import produce from 'immer'

export const addGift = (state, id, description, image) =>
  produce(state, draft => {
    draft.gifts.push({
      id,
      description,
      image,
      reservedBy: undefined,
    })
  })

export const toggleReservation = (state, giftId) =>
  produce(state, draft => {
    const gift = draft.gifts.find(gift => gift.id === giftId)
    gift.reservedBy =
      gift.reservedBy === undefined
        ? state.currentUser.id
        : gift.reservedBy === state.currentUser.id
        ? undefined
        : gift.reservedBy
  })
