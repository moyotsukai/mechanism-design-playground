import { decisionFunction, transferFunction } from "../auction/auctionRule"
import { firstPriceAuction } from "../auction/firstPriceAuction"

const BIDS = [120, 50, 45, 160, 85]

describe("auction", () => {
  test("decision function", () => {
    expect(decisionFunction({ bids: BIDS })).toEqual([0, 0, 0, 1, 0])
  }),
    test("first price auction", () => {
      expect(
        firstPriceAuction({
          decisionFunction: decisionFunction,
          transferFunction: transferFunction,
          bids: BIDS
        })
      ).toEqual({
        d: [0, 0, 0, 1, 0],
        t: [0, 0, 0, 160, 0]
      })
    })
})
