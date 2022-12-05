import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should add two given numbers together', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(operatorAdd);
    fireEvent.click(button1);
    fireEvent.click(operatorEqual);
    expect(runningTotal.textContent).toEqual('5');
  })
  it('should subtract two given numbers together', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const operatorEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(operatorEqual);
    expect(runningTotal.textContent).toEqual('3');
  })
  it('should multiply two given numbers together', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorEqual);
    expect(runningTotal.textContent).toEqual('15');
  })
  it('should divide two given numbers together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const operatorDivide = container.getByTestId('operator-divide');
    const operatorEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operatorDivide);
    fireEvent.click(button7);
    fireEvent.click(operatorEqual);
    expect(runningTotal.textContent).toEqual('3');
  })
  it('should concatenate three given numbers together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  })
  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorAdd = container.getByTestId('operator-add');
    const operatorEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button3);
    fireEvent.click(operatorAdd);
    fireEvent.click(button4);
    fireEvent.click(operatorEqual);

    expect(runningTotal.textContent).toEqual('10');
  })
  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorEqual = container.getByTestId('operator-equals');
    const clearClick = container.getByTestId('clear');
    const operatorAdd = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    // const clearClick = container.getByTestId('clear');
    fireEvent.click(button2);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button3);
    fireEvent.click(operatorEqual);
    fireEvent.click(clear);

    fireEvent.click(operatorAdd)
    fireEvent.click(button2);
    fireEvent.click(operatorEqual);
    expect(runningTotal.textContent).toEqual('8');
  })

})

