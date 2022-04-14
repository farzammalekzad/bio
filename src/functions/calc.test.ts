import React from 'react';
import { render } from '@testing-library/react';
import {Biorhythm} from "./calc";

test('Biorhythms physical calculation test', () => {
    const result = Biorhythm('1986-08-22', '2022-04-30', 23);
    expect(result).toBeCloseTo(-0.9977);
});


test('Biorhythms emotional calculation test', () => {
    const result = Biorhythm('1986-08-22', '2022-04-30', 28);
    expect(result).toBeCloseTo(-0.2225);
});


test('Biorhythms intellectual calculation test', () => {
    const result = Biorhythm('1986-08-22', '2022-04-30', 33);
    expect(result).toBeCloseTo( 0.0000);
});
