import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BoDChalkboard from "../components/BoDChalkboard/BoDChalkboard";
import { expect, test } from "vitest";

test('test', ()=>{
    expect(true).toBe(true);
    });

test('chalkboard api works', async() =>{
    render(<BoDChalkboard/>);
    await(()=>{
        screen.getByText('$5.95');
    })
});

