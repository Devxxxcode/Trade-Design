import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ExternalLayout from './layouts/ExternalLayout';
import Commodities from './pages/Commodities';
import Indices from './pages/Indices';
import Bitcoin from './pages/markets/Bitcoin';
import Forex from './pages/markets/Forex';
import Requirement from './pages/markets/Requirement';
import Marijuana from './pages/markets/Marijuana';
import Estate from './pages/markets/Estate';
import CrudeOil from './pages/markets/CrudeOil';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import ForgotPassword from './pages/authentication/ForgotPassword';
import AuthHome from './pages/dashboard/AuthHome';
import InternalLayout from './layouts/InternalLayout';
import Deposit from './pages/dashboard/deposit/Deposit';
import BitcoinDeposit from './pages/dashboard/deposit/BitcoinDeposit';
import EtherumDeposit from './pages/dashboard/deposit/EtherumDeposit';
import DepositLog from './pages/dashboard/deposit/DepositLog';
import InvestmentPlan from './pages/dashboard/investment/InvestmentPlan';
import InvestmentLog from './pages/dashboard/investment/InvestmentLog';
import Withdrawal from './pages/dashboard/withdrawal/Withdrawal';
import WithdrawalLog from './pages/dashboard/withdrawal/WithdrawalLog';
import Transfer from './pages/dashboard/transfer/Transfer';
import TransferLog from './pages/dashboard/transfer/TransferLog';
import Support from './pages/dashboard/Support';
import Setting from './pages/authentication/Setting';
import ChangePassword from './pages/authentication/ChangePassword';
import PrivateRoute from './components/PrivateRoute';
import Gateway from './pages/dashboard/investment/Gateway';
import BitcoinGatewayDetail from './pages/dashboard/investment/BitcoinGatewayDetail';
import EtherumGatewayDeposit from './pages/dashboard/investment/EtherumGatawayDetail';

const App = () => {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />

       
        <Route element={<InternalLayout />}>
          <Route path='/dashboard/home' element={<PrivateRoute children={< AuthHome/>}/>} />
          <Route path='/dashboard/deposit' element={<PrivateRoute children={< Deposit/>}/>} />
          <Route path='/dashboard/invest/gateway/:id' element={<PrivateRoute children={< Gateway/>}/>}  />
          <Route path='/dashboard/bitcoin/gateway/:id/detail' element={<PrivateRoute children={< BitcoinGatewayDetail/>}/>} />
          <Route path='/dashboard/ethereum/gateway/:id/detail' element={<PrivateRoute children={< EtherumGatewayDeposit/>}/>} />
          <Route path='/dashboard/deposit/bitcoin' element={<PrivateRoute children={< BitcoinDeposit/>}/>}/>
          <Route path='/dashboard/deposit/etherum' element={<PrivateRoute children={< EtherumDeposit/>}/>}/>
          <Route path='/dashboard/deposit/log' element={<PrivateRoute children={< DepositLog/>}/>} />
          <Route path='/dashboard/investment' element={<PrivateRoute children={< InvestmentPlan/>}/>} />
          <Route path='/dashboard/investment/log' element={<PrivateRoute children={< InvestmentLog/>}/>} />
          <Route path='/dashboard/withdrawal' element={<PrivateRoute children={< Withdrawal/>}/>}/>
          <Route path='/dashboard/withdrawal/log' element={<PrivateRoute children={< WithdrawalLog/>}/>} />
          <Route path='/dashboard/transfer' element={<PrivateRoute children={< Transfer/>}/>}/>
          <Route path='/dashboard/transfer/log' element={<PrivateRoute children={< TransferLog/>}/>} />
          <Route path='/dashboard/support' element={<PrivateRoute children={< Support/>}/>} />
          <Route path='/dashboard/setting'  element={<PrivateRoute children={< Setting/>}/>} />
          <Route path='/dashboard/changepassword' element={<PrivateRoute children={< ChangePassword/>}/>} />
        </Route>

        <Route element={<ExternalLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/commondities' element={<Commodities />} />
          <Route path='/indices' element={<Indices />} />
          <Route path='/bitcoin' element={<Bitcoin />} />
          <Route path='/forex' element={<Forex />} />
          <Route path='/requirement' element={<Requirement />} />
          <Route path='/marijuana' element={<Marijuana />} />
          <Route path='/estate' element={<Estate />} />
          <Route path='/crudeoil' element={<CrudeOil />} />
        </Route>
      </Routes>
  )
}

export default App