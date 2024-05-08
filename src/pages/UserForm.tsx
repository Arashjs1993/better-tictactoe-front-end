import { useEffect, useState } from 'react';
import { BaseResponse } from '../interfaces';

export default function UserForm() {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>();
    const [birthDate, setBirthDate] = useState<string>('');
    const [married, setMarried] = useState<boolean>(false);
    const [data , setData] = useState<BaseResponse>();
    const sendRequest = async(e: any) => {
        e.preventDefault();
        fetch('http://localhost:3001/user-form/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          age: age,
          birthdate: birthDate,
          married: married
        })
      })
      .then((rawResponse) => {
        if([200, 201].includes(rawResponse.status)) {
          return rawResponse.json();
        } else {
          throw new Error();
        }        
      })
      .then((response: BaseResponse) => {
        setData(response);
      })
    };
    return (
        <div className='user-form-container'>
            <h1>Modulo utente</h1>
            <form onSubmit={sendRequest}>
                <div className="user-form-field">
                    <label className="form-labels">Nome:</label>
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                </div>
                <div className="user-form-field">
                    <label className="form-labels">Età:</label>
                    <input type="number" value={age} onChange={(e) => {
                        setAge(parseInt(e.target.value));
                    }}></input>
                </div>
                <div className="user-form-field">
                    <label className="form-labels">Data nascita:</label>
                    <input type="date" value={birthDate} onChange={
                        (e) => {
                            setBirthDate(e.target.value)
                        }
                    }></input>
                </div>
                <div className="user-form-field">
                    <label className="form-labels">sposato:</label>
                    <span className="user-form-marriage" >
                        <label>Sì</label>
                        <input type="radio" value='true' name='married' checked={married === true}
                        onChange={(e) => setMarried(e.target.value === 'true')}></input>
                        <label>No</label>
                        <input type="radio" value='false' name='married' checked={married === false}
                    onChange={(e) => setMarried(e.target.value === 'true')}></input>
                    </span>
                </div>
                <div className="user-form-buttons">
                    <button type='submit'>Invia</button>
                </div>
            </form>
        </div>
    )
}