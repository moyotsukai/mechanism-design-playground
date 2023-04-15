import { decisionFunction, transferFunction } from "../auction/auctionRule"
import { firstPriceAuction } from "../auction/firstPriceAuction"
import { secondPriceAuction } from "../auction/secondPriceAuction"

const BIDS = [120, 50, 45, 160, 85]

describe("auction", () => {
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
  }),
    test("second price auction", () => {
      expect(
        secondPriceAuction({
          decisionFunction: decisionFunction,
          transferFunction: transferFunction,
          bids: BIDS
        })
      ).toEqual({
        d: [0, 0, 0, 1, 0],
        t: [0, 0, 0, 120, 0]
      })
    })
})
