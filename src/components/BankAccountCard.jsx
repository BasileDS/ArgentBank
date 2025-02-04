// eslint-disable-next-line react/prop-types
export default function BankAccountCard ({accNb, accBalance}) {
    return <>
    <section className="account outlined-light-section">
        <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking ({accNb})</h3>
            <p className="account-amount">${accBalance}</p>
            <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className=" button filled-button large-button">View transactions</button>
        </div>
    </section>
    </>
}