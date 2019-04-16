import { reverseOnlyLetters } from "./reverseOnlyLetters";

describe("reverse only letters", function() {
  test("ab-cd", function() {
    expect(reverseOnlyLetters("ab-cd")).toEqual("dc-ba");
  });

  test("Test1ng-Leet=code-Q!", function() {
    expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toEqual(
      "Qedo1ct-eeLg=ntse-T!"
    );
  });
});
