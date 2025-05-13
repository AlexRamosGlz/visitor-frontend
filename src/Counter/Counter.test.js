import { render } from "@testing-library/react";
import Counter from "./Counter.component";

const intialValue = 10;

describe(Counter, () => {
  it("displays the correct inital value in the counter", () => {
    const { getByTestId } = render(<Counter count={intialValue} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
});
