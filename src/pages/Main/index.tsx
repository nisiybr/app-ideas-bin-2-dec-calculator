import React, { useState, useCallback, FormEvent } from 'react';

import { Container, Title, Form } from './styles';

const Main: React.FC = () => {
  const [binaryValue, setBinaryValue] = useState('');
  const [decimalValue, setDecimalValue] = useState('');

  const handleClean = useCallback(() => {
    setBinaryValue('');
    setDecimalValue('');
  }, []);

  const handleConvert = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      const digitAmount = binaryValue.length;
      setDecimalValue('');

      for (let i = 0, j = digitAmount - 1; i < digitAmount; i += 1, j -= 1) {
        const binaryDigit = parseInt(binaryValue.substring(i, i + 1));
        if (binaryDigit !== 1 && binaryDigit !== 0) {
          alert('It should be informed a string composed by 0 and 1!');
          setDecimalValue('');
          break;
        }
        const decimal = binaryDigit * 2 ** j;
        setDecimalValue(state =>
          (parseInt(state === '' ? '0' : state) + decimal).toString(),
        );
      }
    },
    [binaryValue],
  );

  return (
    <Container>
      <Title>Binary to Decimal Calculator</Title>

      <Form onSubmit={handleConvert}>
        <strong>Binary</strong>
        <input
          name="binary"
          type="type"
          placeholder="Binary Number"
          value={binaryValue}
          onChange={e => setBinaryValue(e.target.value)}
        />

        <strong>Decimal</strong>
        <input
          name="decimal"
          type="text"
          placeholder="Decimal Number"
          value={decimalValue}
          onChange={e => setDecimalValue(e.target.value)}
        />
        <button type="submit">Convert</button>
        <button type="button" onClick={handleClean}>
          Clean
        </button>
      </Form>
    </Container>
  );
};

export default Main;
