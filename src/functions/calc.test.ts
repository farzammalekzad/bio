import React from 'react';
import { render } from '@testing-library/react';
import {Biorhythm} from "./calc";

test('Biorhythms physical calculation test', () => {
    const result = Biorhythm('1986-08-11', '2022-04-09', 23);
    expect(result).toBeCloseTo(0.9423);
});


test('Biorhythms emotional calculation test', () => {
    const result = Biorhythm('1986-08-11', '2022-04-09', 28);
    expect(result).toBeCloseTo(0.9010);
});


test('Biorhythms intellectual calculation test', () => {
    const result = Biorhythm('1986-08-11', '2022-04-09', 33);
    expect(result).toBeCloseTo( -0.9450);
});
