import React from "react";
import image1 from "../../assest/cdd.jpg";

const CrudeOil = () => {
  return (
    <div className="page-width mt-10 " id="home-page">
      <div className="flex flex-col gap-3">
        <h3 className=" text-customDark text-5xl font-semibold">CRUDE OIL</h3>
        <p className="text-lg opacity-95">Investing in Crude Oil</p>
        <img src={image1} alt="" className="h-[20rem] w-[30rem]" />

        <p>
          The importance of crude oil cannot be overstated. It is a major source
          of energy, generating heat and powering various types of vehicles and
          machinery, and is also used as a component in many of the products we
          use every day, including plastics, paints, and cosmetics. Concerns
          about the damage it does to the environment mean crude oil isn't
          favorable with everyone. However, most agree that we currently cannot
          live without it and that no longer extracting and refining crude oil
          would lead the global economy to grind to a halt.
        </p>
        <p>
          Investors may purchase two types of oil contracts: futures contracts
          and spot contracts. To the individual investor, oil can be a
          speculative asset, a portfolio diversifier, or a hedge against related
          positions.
        </p>

        <p>
          Investors may purchase two types of oil contracts: futures contracts
          and spot contracts. To the individual investor, oil can be a
          speculative asset, a portfolio diversifier, or a hedge against related
          positions.
        </p>

        <p>
          The price of the spot contract reflects the current market price for
          oil, whereas the futures price reflects the price buyers are willing
          to pay for oil on a delivery date set at some point in the future. The
          futures price is no guarantee that oil will actually hit that price in
          the current market when that date comes. It is just the price that, at
          the time of the contract, purchasers of oil are anticipating. The
          actual price of oil on that date depends on many factors. Most
          commodity contracts that are bought and sold on the spot markets take
          effect immediately: Money is exchanged, and the purchaser accepts
          delivery of the goods. In the case of oil, the demand for immediate
          delivery versus future delivery is limited, in no small part due to
          the logistics, TheFipTrades has made it possible for our esteem
          investor to diversify its investment on crude oil.
        </p>

        <h3 className="font-bold text-customDark">
          Min Deposit: $50,000 <br />
          ROI: 20% (Depending on market performance and pivot points)
        </h3>

        <button className=' text-white bg-customOrange py-2 w-[9rem] mt-5 mb-16 rounded-md'>Get Started</button>
      </div>
    </div>
  );
};

export default CrudeOil;
