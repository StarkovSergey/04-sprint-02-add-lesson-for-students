import s from './DeckItem.module.css'
import Skeleton from 'react-loading-skeleton'
import { ReactElement } from 'react'

export const DeckItemSkeleton = ({ count }: { count: number }): ReactElement => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <li className={s.item} key={index}>
            <h3 className={s.title}>
              <Skeleton width={80} />
            </h3>
            <p className={s.characteristic}>
              <Skeleton width={80} />
            </p>
            <p className={s.characteristic}>
              <Skeleton width={200} />
            </p>
            <p className={s.characteristic}>
              <Skeleton width={200} />
            </p>
          </li>
        ))}
    </>
  )
}
