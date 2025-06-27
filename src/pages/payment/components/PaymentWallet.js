import { Form } from "react-bootstrap";
import paytm from '../../../img/paytm.png';
import googlePay from '../../../img/google-pay.png';
import phonePe from '../../../img/phonepe.png';
import { useState } from "react";
const PaymentWallet = () => {
    const [selectedWallet, setSelectedWallet] = useState('paytm');
    return (

        <Form>
            <h6 className="text-center mb-3">Select Wallet</h6>
            <div className="wallet-options">
                <label className={`wallet ${selectedWallet === 'paytm' ? 'selected' : ''}`}>
                    <input type="radio" name="wallet" value="paytm"
                        onChange={(e) => setSelectedWallet(e.target.value)} />
                    <img src={paytm} alt="Paytm" />

                </label>

                <label className={`wallet ${selectedWallet === 'googlepay' ? 'selected' : ''}`}>
                    <input type="radio" name="wallet" value="googlepay"
                        onChange={(e) => setSelectedWallet(e.target.value)} />
                    <img src={googlePay} alt="Google Pay" />
                </label>

                <label className={`wallet ${selectedWallet === 'phonepe' ? 'selected' : ''}`}>
                    <input type="radio" name="wallet" value="phonepe"
                        onChange={(e) => setSelectedWallet(e.target.value)} />
                    <img src={phonePe} alt="PhonePe" />

                </label>


            </div>
        </Form>

    )
}
export default PaymentWallet;