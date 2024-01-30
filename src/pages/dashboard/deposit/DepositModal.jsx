import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../context/AlertContext";

export function DepositModal({ open, setOpen, method }) {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric values, backspace, and decimal point
    if (/^\d*\.?\d*$/.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handleOpen = () => setOpen(!open);

  const handleDeposit = (e) => {
    e.preventDefault();
    const errors = {};

    if (amount === "") {
      errors.amount = "Please enter amount to deposit";
    }

    if (Object.keys(errors).length === 0) {
      method === "bitcoin"
        ? navigate(`/dashboard/deposit/bitcoin?amount=${amount}`)
        : navigate(`/dashboard/deposit/etherum?amount=${amount}`);
    } else {
      setAlertInfo1(errors.amount);
      setAlert1(true);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className=" bg-deepBlue border-[0.5px] border-white/30"
      >
        <DialogHeader className="text-white text-md border-b-[0.5px] border-white/30">
          Deposit Amount
        </DialogHeader>
        <form action="" onSubmit={handleDeposit}>
          <DialogBody>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="amount"
                className="text-md text-white/50 font-normal"
              >
                Amount
              </label>
              <input
                type="text"
                name=""
                id="amount"
                className="outline-none focus:outline-customYellow rounded-md p-3 bg-lightBlue outline-1 border border-white/30  focus:border-none"
                pattern="[0-9]*"
                inputMode="numeric"
                value={amount}
                onChange={handleInputChange}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-3 bg-red-900 text-white"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className=" !bg-customYellow">
              <span>Deposit Now</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
