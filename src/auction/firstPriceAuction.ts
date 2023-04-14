import { AuctionRule } from "./auctionRule"

export const firstPriceAuction: AuctionRule = ({ decisionFunction, transferFunction, bids }) => {
  const d = decisionFunction({ bids: bids })
  const highestBid = Math.max(...bids)
  const t = transferFunction({ bids: bids, winningBid: highestBid })

  return {
    d: d,
    t: t
  }
}