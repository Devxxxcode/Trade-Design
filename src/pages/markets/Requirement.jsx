import React from "react";
import image1 from "../../assest/cd3.jpeg";
import image2 from "../../assest/rt1.jpeg";
import image3 from "../../assest/cp2.jpeg";

const Requirement = () => {
  return (
    <div className="page-width mt-10 " id="home-page">
      <h3 className=" text-customDark text-5xl font-semibold text-center ">
        Save for your retirement. <br /> Invest in your future
      </h3>

      <p className="text-center mt-3">
        Help strengthen your retirement savings by investing in high-quality
        real estate assets.
      </p>

      <h3 className=" text-customDark text-5xl font-semibold mt-10">
        Retirement Planning
      </h3>

      <p className="mt-5">
        A portfolio built to help preserve and grow your retirement savings. If
        you're still years away from your retirement, investing in long-term
        assets like real estate may be a smart choice. This asset class can
        provide unique stability and insulation from market fluctuations,
        allowing you to help make the most of your retirement savings over the
        long term. Our portfolios are invested across high-quality real estate
        assets with the goal of delivering consistently strong long-term
        results.
      </p>

      <h3 className=" text-customDark text-2xl font-normal mt-10">
        OUR APPROACH
      </h3>

      <p className="mt-5">
        Diversification for your tax-advantaged account. When saving for
        retirement, there are a number of accounts that can provide tax benefits
        to help you keep more of what you earn for your retirement. These
        accounts may allow you to defer taxes or let your savings grow tax-free,
        both of which can help boost your after-tax profits. We've created a
        simple way for you to diversify your retirement portfolio by investing
        in private real estate through a tax-advantaged retirement account,
        allowing you to reduce risk and improve stability.
      </p>

      <h3 className=" text-customDark text-2xl font-normal mt-10">
        OUR PLATFORM
      </h3>

      <p className="mt-5">Investing for your retirement should be simple.</p>
      <p className="mt-5">
        With TheFipTrades, it's easy to open an IRA and start investing. You can
        choose to roll over an existing retirement account (IRA, 401k, or
        another employer-sponsored plan) or make a contribution to open a new
        account and start investing today. Funding your account is typically
        completed directly through our online platform without any complicated
        paperwork.
      </p>

      <h3 className=" text-customDark text-2xl font-semibold mt-10">
        Retirement Plan
      </h3>

      <div>
        <div className="flex flex-col gap-5 mb-5">
          <img src={image1} alt="" className=" w-[12rem] h-[10rem]" />

          <h3 className=" text-customDark font-bold text-lg">
            INDIVIDUAL PLAN <br />
            Min Deposit: $150k <br />
            ROI: 10%
          </h3>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <img src={image2} alt="" className=" w-[12rem] h-[10rem]" />

          <h3 className=" text-customDark font-bold text-lg">
            COUPLE/JOINT PLAN <br />
            Min Deposit: $250k <br />
            ROI: 20%
          </h3>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <img src={image3} alt="" className=" w-[12rem] h-[10rem]" />

          <h3 className=" text-customDark font-bold text-lg">
            FAMILY PLAN <br />
            Min Deposit: $500k <br />
            ROI: 30%
          </h3>
        </div>
      </div>

      <button className=' text-white bg-customOrange py-2 w-[9rem] rounded-md mt-5 mb-32'>Get Started</button>
    </div>
  );
};

export default Requirement;
