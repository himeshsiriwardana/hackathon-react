import { useState, useEffect } from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

export function UserInfo() {
    const { getDecodedIDToken } = useAuthContext();
  const [tokenInfo, setTokenInfo] = useState('');
  const [error, setError] = useState('');

  useEffect (() => {
    getDecodedIDToken().then((decodedIDToken) => {
        console.log(decodedIDToken);
      setTokenInfo(decodedIDToken);
      }).catch((error) => { setError(error)})
  }) 

    const keys = Object.keys(tokenInfo);

  return (
    <ul>
      {keys.map((key) => (
        <li key={key}>
          {key}: {tokenInfo[key]}
        </li>
      ))}
    </ul>
  );
}