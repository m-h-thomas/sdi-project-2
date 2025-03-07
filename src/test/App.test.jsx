import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home/Home";
import { expect, test } from "vitest";

test('test', ()=>{
expect(true).toBe(true);
});

test('should render componenet the entire home componenets ', ()=>{
    render(<Home/>);
    const homeElement = screen.getByTestId('home-body');
    expect(homeElement).toBeInTheDocument();
    });

    test('should render componenet the ', ()=>{
        render(<Home/>);
        const triviaElement = screen.getByTestId('character-trivia');
        expect(triviaElement).toBeInTheDocument();
        });
