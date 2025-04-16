
import {renderHook} from "@testing-library/react-hooks";
import {useBoard} from "./useBoard";


const mockData = new Array(6).fill().map((element, index) =>
    Array(6).fill().map((element2, index2) => ({ status: "unrevealed",
className: "bomb" }))
);

describe("useBoard", () => {
    test('should render the inital board', () => {
        const { result } = renderHook(() => useBoard({rows: 6,columns: 6,numberOfMines: 6}));
        expect(result.current.board.toEqual(mockData)).toBe(true);
    })
})
