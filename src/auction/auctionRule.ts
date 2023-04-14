import { maxIndexes } from "../utils/maxIndexes"
import { randomElements } from "../utils/randomElements"

//decision function

type Bids = number[]

type DecisionFunction = ({ }: { bids: Bids }) => Array<0 | 1>

export const decisionFunction: DecisionFunction = ({ bids }) => {
  const numOfWinners = 1
  //decision efficiency
  const winnerIndexes = maxIndexes(bids)
  const winnerIndex = (randomElements(winnerIndexes, numOfWinners) as number[])[0]

  return bids.map((_, index) => {
    if (index === winnerIndex) {
      return 1
    } else {
      return 0
    }
  })
}

//transfer function

type TransferFunction = ({ }: { bids: Bids, winningBid: number }) => number[]

export const transferFunction: TransferFunction = ({ bids, winningBid }) => {
  const d = decisionFunction({ bids: bids })

  return bids.map((_, index) => {
    if (d[index] === 1) {
      return winningBid
    } else {
      return 0
    }
  })
}

//auction rule

export type AuctionRule = ({ }: { decisionFunction: DecisionFunction, transferFunction: TransferFunction, bids: Bids }) => {
  d: ReturnType<DecisionFunction>,
  t: ReturnType<TransferFunction>
}
