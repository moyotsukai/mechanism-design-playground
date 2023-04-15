import { AuctionRule } from "./auctionRule"

export const secondPriceAuction: AuctionRule = ({ decisionFunction, transferFunction, bids }) => {
  const d = decisionFunction({ bids: bids })
  const highestBid = Math.max(...bids)
  const secondHighestBid = Math.max(...bids.filter((bid) => bid !== highestBid))
  const t = transferFunction({ bids: bids, winningBid: secondHighestBid })

  return {
    d: d,
    t: t
  }
}
