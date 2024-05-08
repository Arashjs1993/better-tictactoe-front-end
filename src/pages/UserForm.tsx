export default function UserForm() {
    return (
        <div className='user-form-container'>
            <h1>Modulo utente</h1>
            <form>
                <div className="user-form-field">
                    <label className="form-labels">Nome:</label>
                    <input type="text"></input>
                </div>
                <div className="user-form-field">
                    <label className="form-labels">Età:</label>
                    <input type="number" min={1} max={150}></input>
                </div>
                <div className="user-form-field">
                    <label className="form-labels">Data nascita:</label>
                    <input type="date"></input>
                </div>
                <div className="user-form-field">
                    <label>stato matrimoniale:</label>
                    <span className="user-form-marriage">
                        <label>Single</label>
                        <input type="radio"></input>
                        <label>Sposato</label>
                        <input type="radio"></input>
                    </span>
                </div>
                <div className="user-form-buttons">
                    <button>Invia</button>
                </div>
            </form>
        </div>
    )
}