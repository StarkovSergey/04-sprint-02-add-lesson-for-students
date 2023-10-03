import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
      <ul className={s.list}>
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>
  )
}
